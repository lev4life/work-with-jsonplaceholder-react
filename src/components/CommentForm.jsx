import React, { useState } from 'react'
import Btn from './UI/button/Btn'
import Inp from './UI/input/Inp'

const CommentForm = ({create}) => {

  const [comment, setComment] = useState({name: '', body: ''})
    


    const addNewComment = (e) => {
        e.preventDefault()
        
        const newComment = {
            ...comment, id: Date.now()
        }
        create(newComment)
        setComment({name: '', body: '', id: Date.now()})
      }

      
    return(
        <form>
        <Inp 
        value={comment.name}
        onChange={e => setComment({...comment, name: e.target.value})}
        type="text" 
        placeholder="Название комментария"
        />

        <Inp 
        value={comment.body}
        onChange={e => setComment({...comment, body: e.target.value})}
        type="text" 
        placeholder="Описание комментария"
        /> 

        <Btn onClick={addNewComment}>Создать</Btn>
      </form>
    )
}

export default CommentForm