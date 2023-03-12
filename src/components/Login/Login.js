import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './Login.css';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {resetUser} from '../../actions/LoginAction';
import {useEffect} from 'react'

function Login(props){
 

  const [username,setUsername]=useState('');
    const navigate=useNavigate(); 

    const onSubmit=(event)=>{
      event.preventDefault();
           
              /*setActive(true);  */ 
                navigate('/loginv',{state:{username:username},});

    }
  

    return (
        <div  class="logincss">
            <h1>Sign In</h1>
            <br/>
        <form onSubmit={onSubmit}>

            <br/>
            <label>Username: </label>
          
            
            <div>
            <input type="text" id="username" name="username" value={username} placeholder="username"
                onChange={(event)=>setUsername(event.target.value) }/>
          </div>
          
          
          <div>
          <Button variant="primary" type="submit">Login</Button>{''}</div>
        </form>
        </div>
     
    );
  }

  Login.propTypes = {
    resetUser: PropTypes.func.isRequired,
    userd: PropTypes.array.isRequired
  };
  
  
  const mapStateToProps = state => ({
    userd: state.login.user
    
  });
  
  
export default connect(mapStateToProps, {resetUser})(Login);

