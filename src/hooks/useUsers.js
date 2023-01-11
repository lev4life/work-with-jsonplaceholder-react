import {useMemo} from 'react'

export const useSortedAlbums = (albums, sort) => {

    const sortedAlbums = useMemo(() => {

        if(sort) {
          return [...albums].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return albums
      
      }, [sort, albums])

      return sortedAlbums;
}

export const useUsers = (albums, sort, query) => {
    const sortedAlbums = useSortedAlbums(albums, sort)

    const sortedAndSerchedAlbums = useMemo(() => {
        return sortedAlbums.filter(album => album.name.toLowerCase().includes(query.toLowerCase()))
      }, [query, sortedAlbums])

      return sortedAndSerchedAlbums
}