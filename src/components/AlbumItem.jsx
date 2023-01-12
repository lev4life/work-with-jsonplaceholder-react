import React from "react";
import Btn from "./UI/button/Btn";
import { useNavigate } from "react-router-dom"


const AlbumItem = (props) => {

  const router = useNavigate()
  console.log(router);

  return (
    <div className="album">
      <div className="album__content">
        <strong>{props.number}. {props.album.title}</strong>
      </div>
      <div className="album__btns">
        <Btn onClick={() => router(`/albums/${props.album.id}`)}>Открыть</Btn>
        <Btn onClick={() => props.remove(props.album)}>Удалить</Btn>
      </div>
    </div>
  );
};

export default AlbumItem;
