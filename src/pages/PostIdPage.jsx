import React, { useState, useEffect } from "react";
import { useFetching } from "../hooks/useFetching";
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import MyLoader from '../components/UI/Loader/MyLoader'

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostsById, isPostLoading] = useFetching( async (id) => {
        const response = await PostService.getPostById(id)
        setPost(response.data)
    })
    const [fetchComments, isCommentsLoading] = useFetching( async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostsById(params.id)
        setTimeout(() => {
            fetchComments(params.id)
        },2000)
    }, [])
    return(
        <div>
            <h1>Пост № = {params.id}</h1>
            {isPostLoading
            ? <MyLoader/>
            : <div>{post.id}. {post.title}</div>
        }
        <h4>Комментарии:</h4>
        {isCommentsLoading
        ? <MyLoader/>
        : <div>
            {comments.map(comments => 
                <div key={comments.id} style={{marginTop: 15}}>
                    <h4>{comments.email}</h4>
                    <div>{comments.body}</div>
                </div>
                )}
        </div>
        }
        </div>
    )
}

export default PostIdPage