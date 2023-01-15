import Main from '../pages/Main'
import Posts from '../pages/Posts'
import Albums from '../pages/Albums'


export const routes = [
    {id: 'main', path: '/main', element: Main, exact: true},
    {id: 'posts', path: '/posts', element: Posts, exact: true},
    {id: 'albums', path: '/albums', element: Albums, exact: true},

]