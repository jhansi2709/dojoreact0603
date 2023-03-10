import {Component} from 'react';

import { Provider } from 'react-redux';
import Comments from './Comments';
import CommentForm from './CommentForm';


class CommentsDisplay extends Component{


render(){

    return(
        <>
        <CommentForm />
        <Comments />
        </>

    )


}

}

export default CommentsDisplay;