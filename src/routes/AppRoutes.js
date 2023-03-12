import React from 'react';
import {BrowserRouter as Router,Routes, Route, Navigate, } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import PostDisplay from '../components/PostDisplay';
import MyPostDisplay from '../components/MyPosts/MyPostDisplay';
import CommentsDisplay from '../components/CommentsDisplay';
import LoginAuthentication from '../components/LoginAuthentication';
import Logout from '../components/Logout';
import Login from '../components/Login/Login';



const AppRoutes = ({ session },{path1}) => (
  
  <Router>
     <Navbar />
    <Routes>
                   
    <Route path="/posts" element={<PostDisplay/>} />
    <Route path="/login" element={<Login />}/>
    <Route path="/logout" element={<Logout />}/>
    <Route path="/loginv" element={<LoginAuthentication />}/>
    <Route path="/myposts" element={<MyPostDisplay />}/>
    <Route path="/comments/:id"   element={<CommentsDisplay  />}  />
    </Routes>
  </Router>
);

export default AppRoutes;