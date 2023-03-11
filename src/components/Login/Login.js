import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './Login.css';
import {useNavigate} from "react-router-dom";
import {useState} from "react";

function Login(){
  
    
  const [username,setUsername]=useState('');
    const navigate=useNavigate(); 

    const onSubmit=(event)=>{
      event.preventDefault();
           
              /*setActive(true);  */ 
                navigate('/loginv',{state:{username:username},});

    }
                 
    const mystyle = {
        
        backgroundColor: "Grey",
        padding: "20px",
        textAlign: "center"
      };

    return (
        <div style={mystyle}>
            <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
          <div >
            <label>Username: </label>
            <br />
            
            <input type="text" id="username" name="username" value={username} placeholder="username"
                onChange={(event)=>setUsername(event.target.value) }/>
          </div>
          
          <br />
          <Button variant="primary" type="submit">Login</Button>{''}
        </form>
        </div>
     
    );
  }


export default Login;
