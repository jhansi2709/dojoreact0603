import React from 'react';
import {BrowserRouter as Router,Routes, Route, Navigate, } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import PostDisplay from '../components/PostDisplay';
import MyPostDisplay from '../components/MyPosts/MyPostDisplay';
import CommentsDisplay from '../components/CommentsDisplay';
import LoginAuthentication from '../components/LoginAuthentication';
import Login from '../components/Login/Login';
import PrivateRoute from './PrivateRoute';

/* const PrivateRoute = ({ component: Component, session, ...rest}) => {
  
  const isValidSession = (props) => {
    if (session.isAuthenticated) {
      return (<Component {...props} />);
    }
    //return (<Navigate to={{ pathname: '/login', state: { from: path1 } }} />);
  };
  return (<Route {...rest} render={isValidSession} />);
}; */

const AppRoutes = ({ session },{path1}) => (
  
  <Router>
     <Navbar />
    <Routes>
                   
    <Route path="/posts" element={<PrivateRoute  component={PostDisplay}  session={session}/>}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/loginv" element={<LoginAuthentication />}/>
    <Route path="/myposts" element={<MyPostDisplay />}/>
    <Route path="/comments/:id"   element={<CommentsDisplay  />}  />
    </Routes>
  </Router>
);

export default AppRoutes;