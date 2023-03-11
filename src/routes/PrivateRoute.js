import {Route, Navigate } from 'react-router-dom';

export default function PrivateRoute({ component: Component, session, ...rest}){
  
    const isValidSession = (props) => {
      if (session.isAuthenticated) {
        return (<Component {...props} />);
      }
      //return (<Navigate to={{ pathname: '/login', state: { from: path1 } }} />);
    };
    return (<Component  />);
  };


