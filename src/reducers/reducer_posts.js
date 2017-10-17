import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state={}, action){
    switch(action.type){
    case DELETE_POST:
        return _.omit(state, action.payload);
    case FETCH_POST:{
        const post = action.payload.data;
        const newState = { ...state };
        newState[post.id] = post;
        return newState;
    }
        
        //return { ...state, [action.payload.data]: action.payload.data };
    case FETCH_POSTS:
        const ne = _.mapKeys(action.payload.data, 'id');
        console.log(action.payload.data, ne);
        return ne;
    default:
        return state;
    }
}