import {Component} from "react";
import ReactDOM from "react-dom";
import {useState} from "react";
import {useEffect} from "react";
import Posts from "../Posts/Posts";
import "./Login.css";

function LoginUser(props){

    const [user,setUser]=useState([]);
    const [message,setMessage]=useState([]);

    const fetchData= () => {
        return fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json()).then((data)=>setUser(data)
        
        );
        }
        
        useEffect(()=>{
            fetchData();
    
        },[])
        return(
            <div>
                    
           
                 {user && user.length>0 && user.map((dataObj,index)=>{
                   
                    if(dataObj.username==props.username){
                        
                        return <Posts />
                        
                    }

                 })}
                
                {/* setMessage('Invalid username!'); */}
                <h2>{message}</h2>
                <Login />
                 
                
               
            </div>
            );
       
    
    
    
    

}




function Login(){

    const [username,setUsername]=useState('');
    const [message,setMessage]=useState('');

    const updateSubmit=(event)=>{
      event.preventDefault();
      ReactDOM.render(<LoginUser username={username}/>,document.getElementById('root'));
        
        
        
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
            <h2>{message}</h2>
            
            </div>


        );

}
export default Login;