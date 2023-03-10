import React from 'react';
import {Route, Routes, Navigate, Router} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import PostDisplay from '../components/PostDisplay';
import CommentsDisplay from '../components/CommentsDisplay';
import LoginAuthentication from '../components/LoginAuthentication';
import { useLocation } from 'react-router-dom';

const PrivateRoute = ({ component: Component, session, ...rest }) => {
  const location = useLocation();
  const isValidSession = (props) => {
    if (session.isAuthenticated) {
      return (<Component {...props} />);
    }
    return (<Navigate to={{ pathname: '/login', state: { from: location.pathname } }} />);
  };
  return (<Route {...rest} render={isValidSession} />);
};

const AppRoutes = ({ session }) => (
  
  <Router>
     <Navbar />
    <Routes>
                   
    <PrivateRoute exact path="/posts" component={PostDisplay} session={session} />
    <Route path="/login" component={LoginAuthentication }/>
    <PrivateRoute path="/comments" component={CommentsDisplay} session={session} />
    </Routes>
  </Router>
);

export default AppRoutes;