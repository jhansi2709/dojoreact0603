import React from "react";
import "./Posts.css";
import Post from "../Post/Post";
import MyPosts from "../MyPosts/MyPosts";
import {useState,useContext} from "react";
import {useEffect} from "react";
import {userId} from '../Context';
function Posts(){
	
const [posts,setPosts]=useState([]);
const id=useContext(userId);

 const fetchData= () => {
	 fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>response.json()).then((data)=>setPosts(data)
	
	);
	}
	
	useEffect(()=>{
		fetchData();

	},[])
	
	const onSubmit=()=>{
		return <MyPosts />

	};
   
return (
	<div className="posts-container">
		<button type="submit" onClick={onSubmit}>My Posts</button>
	{id!=0 && posts.filter(p=>p.userId!=id).map((post, index) => (
		
		
		<Post key={post.id} index={index} post={post} />
		 
		))}
	</div>
);
};

export default Posts;
