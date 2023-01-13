import {useMemo} from 'react'

const useSortedPosts = (posts, userId) => {
  if(userId !== 'nobody') {
    return posts.filter(post => post.userId == userId )
  }
  return posts
}

export const usePosts = (posts, userId, query) => {
    const sortedPosts = useSortedPosts(posts, userId)


    const sortedAndSerchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
      }, [query, sortedPosts])

      return sortedAndSerchedPosts
}