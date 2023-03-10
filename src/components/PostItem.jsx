import React from "react";
import Btn from "./UI/button/Btn";
import { useNavigate } from "react-router-dom"

const PostItem = (props) => {

  const router = useNavigate()

  return (
    <div className="post">
      <div className="post__content">
        <div><strong>Название поста:</strong> {props.post.title}</div>
        <div><strong>Описание поста:</strong> {props.post.body}</div>
      </div>
      <div className="post__btns">
        <Btn onClick={() => router(`/posts/${props.post.id}`)}>Открыть</Btn>
        <Btn onClick={() => props.remove(props.post)}>Удалить</Btn>
      </div>
    </div>
  );
};

export default PostItem;
