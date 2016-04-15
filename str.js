export default {
    FORUM_POST_REQUEST: 'FORUM_POST_REQUEST',
    FORUM_POST_SUCCESS: 'FORUM_POST_SUCCESS',
    FORUM_POST_FAILURE: 'FORUM_POST_FAILURE'
}

// action
import { BASE_URL } from '../constants/api';

import ApiActionCreator from '../utils/ApiActionCreator';

function fetchForumPost(data, onSuccess){
    const API = '';
    
    return ApiActionCreator.create( {
        endpoint: `${BASE_URL}${API}`,
        method: "GET",
        data: data,
        actionType: 'FORUM_POST',
        onSuccess: ( data ) => {
            onSuccess && onSuccess( data );
            return data;
        }
    } );
}

export function loadForumPost( data, onSuccess ) {
    return dispatch => {
        return dispatch( fetchForumPost() );
    };
}

// reducer
import { fromJS } from 'immutable';

const initialForumPostState = fromJS( {

} );

export function forumPost( state = initialForumPostState, action ) {
    switch ( action.type ) {
        case CONSTANTS.FORUM_POST_REQUEST:
            return state;
        case CONSTANTS.FORUM_POST_SUCCESS:
            return state;
        default:
            return state;
    }
}