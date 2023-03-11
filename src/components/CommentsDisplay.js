import {Component} from 'react';

import { Provider } from 'react-redux';
import Comments from './Comments';
import CommentForm from './CommentForm';
import { useParams } from 'react-router-dom';

function CommentsDisplay(){


    const { id } = useParams();
    return(
        <>
        <CommentForm />
        <Comments cid={id}/>
        </>

    )
}

export default CommentsDisplay;