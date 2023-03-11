import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Login from '../components/Login/Login';
import Posts from '../components/Posts';
import LoginActions from '../actions/LoginAction';

import PropTypes from 'prop-types';

import { useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import {fetchUser} from '../actions/LoginAction';

function LoginAuthentication(props){


    const location = useLocation();
    const username=location.state.username;

    useEffect(()=>{
            
      props.fetchUser(username);

  },[])

    return(
        <>
        {props.userd.length>0 && <Posts /> }
          {/* {alert(props.userd.username)} */}
          <Login />
        </>

    )
}

LoginAuthentication.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  userd: PropTypes.array.isRequired
};


const mapStateToProps = state => ({
  userd: state.login.user
  
});


export default connect(mapStateToProps, { fetchUser })(LoginAuthentication);
