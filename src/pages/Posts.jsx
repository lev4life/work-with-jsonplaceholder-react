
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
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSerchedPosts = usePosts(posts, filter.sort, filter.query)
  const [isPostsLoading, setIsPostsLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      fetchPosts()
    }, 2000)
  }, []) 

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {
    setIsPostsLoading(true)
    const posts = await PostService.getAll()
    setPosts(posts)
    setIsPostsLoading(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <h1>Посты</h1>
      <Btn style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Создать пост
      </Btn>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </Modal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {isPostsLoading
        ? <h1>Загрузка...</h1>
        : <PostList remove={removePost} posts={sortedAndSerchedPosts}/>
      }
      
      
    </div>
  );
}

export default Posts;
