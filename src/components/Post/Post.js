import React from "react";
import "./Post.css";
const Post = ({ post: { userId, id,
title, body }, index }) => {
return (
	<div className="post-container">
	<h1 className="heading">{title}</h1>
	
	<p>{body}</p>
	<div className="info">	
		<h4>Written by: {userId}</h4>
	</div>
	</div>
);
};

export default Post;
