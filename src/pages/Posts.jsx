
import React, { useState, useEffect } from "react";
import PostService from "../API/PostService";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Btn from "../components/UI/button/Btn"
import Modal from "../components/UI/modal/Modal";
import { usePosts } from "../hooks/usePosts";
import '../styles/App.css';


function Posts() {
  const [userId, setUserId] = useState('nobody')
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState('')
  const [modal, setModal] = useState(false)
  const sortedAndSerchedPosts = usePosts(posts, userId, filter)
  const [isPostsLoading, setIsPostsLoading] = useState(false)

  useEffect(() => {
      fetchPosts()
  }, []) 

  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {
    setIsPostsLoading(true)
    setTimeout(async() => {
      const posts = await PostService.getAll()
      setPosts(posts)
      setIsPostsLoading(false)
    }, 2000)
    
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Посты</h1>
      <div className="App__container">
      <Btn onClick={() => setModal(true)}>
        Создать пост
      </Btn>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </Modal>
      <PostFilter filter={filter} setFilter={setFilter} userId={userId} setUserId={setUserId} />
      </div>
      {isPostsLoading
        ? <h1>Загрузка...</h1>
        : <PostList remove={removePost} posts={sortedAndSerchedPosts}/>
      }
    </div>
  );
}

export default Posts;
