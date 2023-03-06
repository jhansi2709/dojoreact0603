import React from "react";
import "./Posts.css";
import Post from "../Post/Post";
import {useState} from "react";
import {useEffect} from "react";

function Posts(){
	
const [posts,setPosts]=useState('');

 const fetchData= () => {
	 fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>response.json()).then((data)=>setPosts(data)
	
	);
	}
	
	useEffect(()=>{
		fetchData();

	},[])
	
   
return (
	<div className="posts-container">
	{posts.map((post, index) => (
		
		<Post key={post.id} index={index} post={post} />
	))}
	</div>
);
};

export default Posts;
