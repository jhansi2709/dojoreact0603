import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Login from '../components/Login/Login';
import PostDisplay from '../components/PostDisplay';
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
        {props.userd  && props.userd.length>0 && <PostDisplay /> }
          {/* {alert(props.userd.username)} */}
          {!props.userd.length>0 && 
          <>
          <h3 style={{textAlign: "center",color: "red"}}> Invalid Username! Please Try Again</h3>
          <Login />
          </>}
        </>

    )
}

LoginAuthentication.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  userd: PropTypes.array
};


const mapStateToProps = state => ({
  userd: state.login.user
  
});


export default connect(mapStateToProps, { fetchUser })(LoginAuthentication);
