
import {useState,useEffect} from "react";

function Comments(props){
const [comments,setComments]=useState([]);
	const fetchDa= () => {
		fetch('https://jsonplaceholder.typicode.com/comments').then((response)=>response.json()).then((data)=>setComments(data)
	   
	   );
	   }
	
	   useEffect(()=>{
		
		fetchDa();
	
	},[])
return(
    <div>
    <h1>Comments</h1>
   
	{comments && comments.filter(c=>c.postId==props.id).map((comment,index)=>{
        
        <p>{comment.body}</p>
    })
     }
    </div>


);




}

export default Comments;