import {useMemo} from 'react'
import Posts from '../pages/Posts'

const useSortedAlbums = (albums, userId) => {
if(userId !== 'nobody') {
  return albums.filter(album => album.userId == userId)
}
  return albums
}

export const useAlbums = (albums, userId, query) => {
    const sortedAlbums = useSortedAlbums(albums, userId)

    const sortedAndSerchedAlbums = useMemo(() => {
        return sortedAlbums.filter(album => album.title.toLowerCase().includes(query.toLowerCase()))
      }, [query, sortedAlbums])

      return sortedAndSerchedAlbums
}