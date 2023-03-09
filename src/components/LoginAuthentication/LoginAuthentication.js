import {Component, useContext} from "react";
import ReactDOM from "react-dom";
import {useState} from "react";
import {useEffect} from "react";
import Posts from "../Posts/Posts";
import MyPosts from "../MyPosts/MyPosts";
import Login from "../Login/Login";
import View from "../View";
import {Routes,Route,useNavigate,useLocation, Navigate} from 'react-router-dom';
import {userId,Context} from '../Context';

function LoginAuthentication(){
    
    var count=0;
    var active=0;
    const location=useLocation();
    const navigate=useNavigate();
    const [user,setUser]=useState([]);
    
    
    const fetchData= () => {
        return fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json()).then((data)=>setUser(data)
        
        );
        }
        
        useEffect(()=>{
            
            fetchData();

          
            
    
        },[])
        return(
            <>
            {user && user.length>0 && user.map((dataObj,index)=>{
                count+=1;
                
                if(dataObj.username==location.state.username){
                        localStorage.setItem("authenticated",true);
                        active=dataObj.id;
                        
                        
                    }
                else if(count==user.length & active==0){
                   
                    active=-1;
                  
                }
                 
                

            })}
            
            {active>=1 &&
            (<userId.Provider value={active}>
              
              <MyPosts />
            </userId.Provider>)}
            
            {active<0 &&
             
             <Login />}
           

            </>



        );
      
            
            

     
       
    
    
    
    

}

export default LoginAuthentication;