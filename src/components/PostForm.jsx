import React, { useState } from 'react'
import Btn from './UI/button/Btn'
import Inp from './UI/input/Inp'

const PostForm = ({create}) => {

  const [post, setPost] = useState({title: '', body: ''})
    


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', id: Date.now()})
      }

      
    return(
        <form>
        <Inp 
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        type="text" 
        placeholder="Название поста"
        />

        <Inp 
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
        type="text" 
        placeholder="Описание поста"
        /> 

        <Btn onClick={addNewPost}>Создать</Btn>
      </form>
    )
}

export default PostForm