import React, { useState, useEffect } from "react";
import { useFetching } from "../hooks/useFetching";
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import Btn from "../components/UI/button/Btn";
import Modal from "../components/UI/modal/Modal";
import CommentForm from "../components/CommentForm";


const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comment, setComment] = useState([])
    const [modal, setModal] = useState(false)
    const [fetchPostsById, isPostLoading] = useFetching( async (id) => {
        const response = await PostService.getPostById(id)
        setPost(response.data)
    })
    const [fetchComments, isCommentsLoading] = useFetching( async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComment(response.data)
    })

    useEffect(() => {
        fetchPostsById(params.id)
        setTimeout(() => {
            fetchComments(params.id)
        },2000)
    }, [])

    const createComment = (newComment => {
        setComment([...comment, newComment])
        setModal(false)
      })

    return(
        <div className="App">
            <div style={{textAlign: 'center'}}>
            <h1>Пост № {params.id}</h1>
            {isPostLoading
            ? <h1>Загрузка...</h1>
            : <div>{post.title}</div>
        }
            </div>
            <div>
            <Btn style={{marginTop: '15px'}} onClick={() => setModal(true)}>
        Создать комментарий
      </Btn>
      <Modal visible={modal} setVisible={setModal}>
        <CommentForm create={createComment}/>
      </Modal>
        <h2>Комментарии пользователей:</h2>
        {isCommentsLoading
        ? <h1>Загрузка...</h1>
        : <div>
            {comment.map(comment => 
                <div key={comment.id} style={{ marginTop: 15}} className={'postId'}>
                    <div><strong>Эл. почта пользователя:</strong> {comment.email}</div>
                    <div><strong>Название комментария:</strong> {comment.name}</div>
                    <div><strong>Описание комментария:</strong> {comment.body}</div>
                </div>
                )}
        </div>
        }   
            </div>
        
        
        </div>
    )
}

export default PostIdPage