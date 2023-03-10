import {
    FETCH_POSTS,
    NEW_POST,
    FETCH_COMMENTS,
    NEW_COMMENT
} from '../actions/types';

const initialState = {
    items: [],
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