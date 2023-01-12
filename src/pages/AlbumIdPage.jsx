import React, { useState, useEffect } from "react";
import { useFetching } from "../hooks/useFetching";
import { useParams } from 'react-router-dom'
import AlbumService from '../API/AlbumService'


const AlbumIdPage = () => {
    const params = useParams()
    const [album, setAlbum] = useState({})
    const [photos, setPhotos] = useState([])
    const [fetchAlbumsById, isAlbumLoading] = useFetching( async (id) => {
        const response = await AlbumService.getAlbumById(id)
        setAlbum(response.data)
    })
    const [fetchPhotos, isPhotosLoading] = useFetching( async (id) => {
        const response = await AlbumService.getPhotosByAlbumId(id)
        setPhotos(response.data)
    })

    useEffect(() => {
        fetchAlbumsById(params.id)
        setTimeout(() => {
            fetchPhotos(params.id)
        },2000)
    }, [])
    return(
        <div>
            <h1>Альбом № {params.id}</h1>
            {isAlbumLoading
            ? <h1>Загрузка...</h1>
            : <h2>{album.title}</h2>
        }
        <h4>Фотографии:</h4>
        {isPhotosLoading
        ? <h1>Загрузка...</h1>
        : <div>
            {photos.map(photos => 
                <div key={photos.id} style={{marginTop: 15}}>
                    <h4>Название: {photos.title}</h4>
                    <h4>Адрес: {photos.url}</h4>
                    <img src={photos.thumbnailUrl} alt={photos.title}/>
                </div>
                )}
        </div>
        }
        </div>
    )
}

export default AlbumIdPage