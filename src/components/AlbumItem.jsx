import React from "react";
import Btn from "./UI/button/Btn";

const AlbumItem = (props) => {
    console.log(props);
  return (
    <div className="album">
      <div className="album__content">
        <strong>{props.number}. {props.album.title}</strong>
      </div>
      <div className="album__btns">
        <Btn onClick={() => props.remove(props.album)}>Удалить</Btn>
      </div>
    </div>
  );
};

export default AlbumItem;
