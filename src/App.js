import React from 'react';
import './styles/App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Main from './pages/Main';
import Posts from './pages/Posts';

import Navbar from './components/UI/navbar/Navbar';
import Albums from './pages/Albums';
import PostIdPage from './pages/PostIdPage';


function App() {



  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/main" element={<Main/>}/>
      <Route exact path="/posts" element={<Posts/>}/>
      <Route exact path="/posts/:id" element={<PostIdPage/>}/>
      <Route path="/albums" element={<Albums/>}/>
      <Route path="*" element={<Navigate to ="/Main" />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
