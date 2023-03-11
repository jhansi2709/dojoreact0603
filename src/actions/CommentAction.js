import {FETCH_COMMENTS, NEW_COMMENT} from "./types";

export const fetchComments = id => dispatch => {
    const url='https://jsonplaceholder.typicode.com/posts/'+id+'/comments';
    fetch(url)
        .then(res => res.json())
        .then(comm =>
            dispatch({
                type: FETCH_COMMENTS,
                payload: comm
            })
        );
};

export const createComment = commentData => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
            method: 'POST',
            headers: {
               'content-type': 'application/json'
           },
            body: JSON.stringify(commentData)
        })
        .then(res => res.json())
       .then(com =>
            dispatch({
               type: NEW_COMMENT,
               payload: com
          })
       );
};