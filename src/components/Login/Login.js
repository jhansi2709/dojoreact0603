import {Component} from "react";
import React from "react";
import ReactDOM from "react-dom";
import {useState} from "react";
import {useEffect} from "react";
import {Routes,Route,useNavigate} from 'react-router-dom';
import LoginAuthentication from "../LoginAuthentication/LoginAuthentication";
import "./Login.css";
import {Context} from '../Context';


function Login(){

    const [username,setUsername]=useState('');
    /* const [active,setActive]=useState(false); */
    const navigate=useNavigate(); 

    const updateSubmit=(event)=>{
      event.preventDefault();
           
              /*setActive(true);  */ 
                navigate('/loginauthentication',{state:{username:username},});
                 
      
      /*ReactDOM.render(<LoginAuthentication username={username}/>,document.getElementById('root')); */
         
        
    };
    
            return(

              <div className="main-container">
                
             
            <form onSubmit={updateSubmit}>
                <div>
                <label> Enter Username</label>
                </div>
                <div>
                <input type="text" id="username" name="username" value={username} placeholder="username"
                onChange={(event)=>setUsername(event.target.value) }/>
                </div>
                <div>
                <input type="submit" value="Submit"/>
                </div>
            </form>
            {/*<h2>{message}</h2> 
            {active &&
            (<Context.Provider value={username}>
              
              <LoginAuthentication />
            </Context.Provider>)} */}
            
            </div>


        );

}
export default Login;