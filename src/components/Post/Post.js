import React from "react";
import "./Post.css";
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
	<div><li><button>View Comments</button></li></div>
	<li><input type="textarea" name="comment"/> <input type="submit" value="Comment"/></li>
	</ul>
	
	</div>
);
};

export default Post;
