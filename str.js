

// constant
export default {
    FORUM_COMMENTS_REQUEST: 'FORUM_COMMENTS_REQUEST',
    FORUM_COMMENTS_SUCCESS: 'FORUM_COMMENTS_SUCCESS',
    FORUM_COMMENTS_FAILURE: 'FORUM_COMMENTS_FAILURE'
}

// action
import { BASE_URL } from '../constants/api';

import ApiActionCreator from '../utils/ApiActionCreator';

function fetchForumComments(data, onSuccess){
    const API = '';
    
    return ApiActionCreator.create( {
        endpoint: `${BASE_URL}${API}`,
        method: "GET",
        data: data,
        actionType: 'FORUM_COMMENTS',
        onSuccess: ( data ) => {
            onSuccess && onSuccess( data );
            return data;
        }
    } );
}

export function loadForumComments( data, onSuccess ) {
    return dispatch => {
        return dispatch( fetchForumComments(data, onSuccess) );
    };
}

// reducer
import { fromJS } from 'immutable';

const initialForumCommentsState = fromJS( {

} );

export default function forumComments( state = initialForumCommentsState, action ) {
    switch ( action.type ) {
        case CONSTANTS.FORUM_COMMENTS_REQUEST:
            return state;
        case CONSTANTS.FORUM_COMMENTS_SUCCESS:
            return state;
        default:
            return state;
    }
}