import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import AlbumIdPage from "../pages/AlbumIdPage"
import PostIdPage from "../pages/PostIdPage"
import { routes } from "../router/routes"


const AppRouter = () => {
    return(
        <Routes>
        {routes.map(route => 
            <Route 
            path={route.path}
            element={route.element()}
            exact={route.exact}
            key={route.id}
             />
        )}
        <Route path="/posts/:id" element={<PostIdPage/>}/>
        <Route path="/albums/:id" element={<AlbumIdPage/>}/>
        <Route path="*" element={<Navigate to ="/Main" />}/>
      </Routes>
    )
}

export default AppRouter