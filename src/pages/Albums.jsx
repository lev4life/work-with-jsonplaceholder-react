import React, { useState, useEffect } from "react";
import AlbumService from "../API/AlbumService";
import AlbumFilter from "../components/AlbumFilter";
import AlbumList from "../components/AlbumList";
import { useAlbums } from "../hooks/useAlbums";
import '../styles/App.css';


function Albums() {
  const [userId, setUserId] = useState('nobody')
  const [albums, setAlbums] = useState([])
  const [filter, setFilter] = useState('')
  const sortedAndSerchedAlbums = useAlbums(albums, userId, filter)
  const [isAlbumsLoading, setIsAlbumsLoading] = useState(false)


  useEffect(() => {
      fetchAlbums()
  }, []) 


  async function fetchAlbums() {
    setIsAlbumsLoading(true)
    setTimeout(async() => {
      const albums = await AlbumService.getAll()
      setAlbums(albums)
      setIsAlbumsLoading(false)
    }, 2000)
    
  }

  const removeAlbum = (album) => {
    setAlbums(albums.filter(p => p.id !== album.id))
  }

  return (
    <div className="App">
      <h1>Альбомы</h1>
      <AlbumFilter filter={filter} setFilter={setFilter} userId={userId} setUserId={setUserId}/>
      {isAlbumsLoading
      ? <h1>Загрузка...</h1>
      : <AlbumList remove={removeAlbum} albums={sortedAndSerchedAlbums}/>
      }
      
    </div>
  );
}

export default Albums;
