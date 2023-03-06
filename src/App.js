import {useState} from "react";

import logo from './logo.svg';
import './App.css';

import Posts from "./components/Posts/Posts";
import Login from "./components/Login/Login";
  
function App(){
  return(
              <div className="main-container">
                <h1 className="main-heading">
                  Blog App Login
                </h1>
                <Login />
                </div>
  );
  
};


export default App;
