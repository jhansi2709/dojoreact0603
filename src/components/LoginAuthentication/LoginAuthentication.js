import {Component} from "react";
import ReactDOM from "react-dom";
import {useState} from "react";
import {useEffect} from "react";
import Posts from "../Posts/Posts";
import Login from "../Login/Login"
import {Routes,Route,useNavigate,useLocation} from 'react-router-dom';

function LoginAuthentication(){
    
    const [user,setUser]=useState([]);
    const navigate=useNavigate();
    const location = useLocation();
    const [a,setA]=useState(false);

    const fetchData= () => {
        return fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json()).then((data)=>setUser(data)
        
        );
        }
        
        useEffect(()=>{
            
            fetchData();

            validate();
            
    
        },[])
       
        const validate=()=>{
            
            {user && user.length>0 && user.map((dataObj,index)=>{
               
                if(dataObj.username==location.state.username){
                   
                   setA(true);
                    
                }

            })}

            if(a){
                navigate('/posts');
            }
            else{
                alert(a);
                navigate('/login');
            }

        }
       
    
    
    
    

}

export default LoginAuthentication;