import React from "react";
import "./Post.css";
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Comments from "../Comments/Comments";

var id1=0;

const Post = ({ post: { userId, id,
title, body }, index }) => {
	
return (
	<div className="post-container">
		
		<ul>
	<li><h1 className="heading">{title}</h1></li>
	
	<li><p>{body}</p></li>
	<div className="info">	
		<li><h4>Written by: {userId}</h4></li>
	</div>
	<div><li><button  onClick={(event)=>id1=id}>View Comments</button></li></div>
	<li><input type="textarea" name="comment"/> <input type="submit" value="Comment"/></li>
	</ul>
	
	<Comments id={id} />
	
	</div>
);
};

export default Post;
