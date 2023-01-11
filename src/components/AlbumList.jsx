import React from "react";
import AlbumItem from "./AlbumItem";

const AlbumList = ({albums, title, remove}) => {

  if(!albums.length) {
      return(
        <h1 style={{textAlign: 'center', color: 'red'}}>
          Список альбомов пуст!
        </h1>
      )
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {albums.map((album, index) => (
        <AlbumItem remove={remove} number={index + 1} album={album} key={album.id} />
      ))}
    </div>
  );
};

export default AlbumList;
