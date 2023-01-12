import Main from '../pages/Main'
import Posts from '../pages/Posts'
import Albums from '../pages/Albums'
// import PostIdPage from '../pages/PostIdPage'
// import AlbumIdPage from '../pages/AlbumIdPage'

export const routes = [
    {id: 'main', path: '/main', element: Main, exact: true},
    {id: 'posts', path: '/posts', element: Posts, exact: true},
    {id: 'albums', path: '/albums', element: Albums, exact: true},
    // {id: 'posts.id', path: '/posts/:id', element: PostIdPage, exact: true},
    // {id: 'albums.id', path: '/albums/:id', element: AlbumIdPage, exact: true},
]