export default {
    FORUM_TOP_NEW_REQUEST: 'FORUM_TOP_NEW_REQUEST',
    FORUM_TOP_NEW_SUCCESS: 'FORUM_TOP_NEW_SUCCESS',
    FORUM_TOP_NEW_FAILURE: 'FORUM_TOP_NEW_FAILURE'
}

// action
function fetchForumTopNew(){
    const API = '';
    
    return ApiActionCreator.create( {
        endpoint: `${BASE_URL}${API}`,
        method: "GET",
        actionType: 'FORUM_TOP_NEW',
        onSuccess: ( data ) => {
            onSuccess && onSuccess( data );
            return fromJS(data);
        }
    } );
}

export function loadForumTopNew( data, onSuccess ) {
    return dispatch => {
        return dispatch( fetchForumTopNew() );
    };
}

// reducer
const initialForumTopNewState = fromJS( {

} );

function forumTopNew( state = initialForumTopNewState, action ) {
    switch ( action.type ) {
        case CONSTANTS.FORUM_TOP_NEW_REQUEST:
            return state;
        case CONSTANTS.FORUM_TOP_NEW_SUCCESS:
            return state;
        default:
            return state;
    }
}