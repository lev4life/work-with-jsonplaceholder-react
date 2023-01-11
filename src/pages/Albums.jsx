import React, { useState, useEffect } from "react";
import AlbumService from "../API/AlbumService";
import AlbumFilter from "../components/AlbumFilter";
import AlbumList from "../components/AlbumList";
import { useAlbums } from "../hooks/useAlbums";
import '../styles/App.css';


function Albums() {
  const [albums, setAlbums] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const sortedAndSerchedAlbums = useAlbums(albums, filter.sort, filter.query)

  useEffect(() => {
    setTimeout(() => {
      fetchPosts()
    }, 2000)
  }, []) 


  async function fetchPosts() {
    const albums = await AlbumService.getAll()
    setAlbums(albums)
  }

  const removeAlbum = (album) => {
    setAlbums(albums.filter(p => p.id !== album.id))
  }

  return (
    <div className="App">
      <h1>Альбомы</h1>
      <AlbumFilter filter={filter} setFilter={setFilter}/>
      <AlbumList remove={removeAlbum} albums={sortedAndSerchedAlbums}/>
    </div>
  );
}

export default Albums;