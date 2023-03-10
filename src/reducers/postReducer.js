import {
    FETCH_POSTS,
    FETCH_POSTS_SELF,
    NEW_POST,
    FETCH_COMMENTS,
    NEW_COMMENT
} from '../actions/types';

const initialState = {
    items: [],
    myps: [],
    item: {},
    comments:[],
    comment:{}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case FETCH_POSTS_SELF:
            return {
                ...state,
                myps: action.payload
            };    
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        case FETCH_COMMENTS:
            return {
                ...state,
                comments: action.payload
            };
        case NEW_COMMENT:
            return {
                ...state,
                comment: action.payload
            };
        default:
            return state;
    }
}