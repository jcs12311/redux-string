#!/usr/bin/env node

// // keyword: forumPost
// // api: 'portal/apiNew/slides'

// // constant
// export default {
//     FORUM_POST_REQUEST: 'FORUM_POST_REQUEST',
//     FORUM_POST_SUCCESS: 'FORUM_POST_SUCCESS',
//     FORUM_POST_FAILURE: 'FORUM_POST_FAILURE'
// }

// // action
// function fetchForumPost(){
//     const API = '';

//     return ApiActionCreator.create( {
//         endpoint: `${BASE_URL}${API}`,
//         method: "GET",
//         actionType: 'FORUM_POST',
//         onSuccess: ( data ) => {
//             onSuccess && onSuccess( data );
//             return fromJS(data);
//         }
//     } );
// }

// export function loadForumPost( data, onSuccess ) {
//     return dispatch => {
//         return dispatch( fetchForumPost() );
//     };
// }

// // reducer
// const initialForumPostState = fromJS( {

// } );

// function forumPost( state = initialForumPostState, action ) {
//     switch ( action.type ) {
//         case CONSTANTS.FORUM_POST_REQUEST:
//             return state;
//         case CONSTANTS.FORUM_POST_SUCCESS:
//             return state;
//         default:
//             return state;
//     }
// }
// 


var argv = require('minimist')(process.argv.slice(2));
var decamelize = require('decamelize');
var fs = require('fs');
var util = require('util');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var keyword = argv.k ? argv.k : ""; //eg: forumPost
var strResult = "";

var uk = decamelize(keyword, '_').toUpperCase(); // FORUM_POST
var fk = capitalizeFirstLetter(keyword); // ForumPost
// constant
var reqs = ['REQUEST', 'SUCCESS', 'FAILURE'];
var KAR = reqs.map(function(req){
    return decamelize(keyword+req, '_').toUpperCase();
});

var strConstant = "\n\n// constant\nexport default {\n\
    %s: '%s',\n\
    %s: '%s',\n\
    %s: '%s'\n\
}";
strConstant = util.format(strConstant, KAR[0], KAR[0]
    , KAR[1], KAR[1], KAR[2], KAR[2]);

// action

var strAction = "\n\n// action\n\
import { BASE_URL } from '../constants/api';\n\
\n\
import ApiActionCreator from '../utils/ApiActionCreator';\n\
\n\
function fetch"+fk+"(data, onSuccess){\n\
    const API = '';\n\
    \n\
    return ApiActionCreator.create( {\n\
        endpoint: `${BASE_URL}${API}`,\n\
        method: \"GET\",\n\
        data: data,\n\
        actionType: '"+uk+"',\n\
        onSuccess: ( data ) => {\n\
            onSuccess && onSuccess( data );\n\
            return data;\n\
        }\n\
    } );\n\
}\n\
\n\
export function load"+fk+"( data, onSuccess ) {\n\
    return dispatch => {\n\
        return dispatch( fetch"+fk+"(data, onSuccess) );\n\
    };\n\
}";

// reducer
var strReducer = "\n\n// reducer\n\
import { fromJS } from 'immutable';\n\
\n\
const initial"+fk+"State = fromJS( {\n\
\n\
} );\n\
\n\
export default function "+keyword+"( state = initial"+fk+"State, action ) {\n\
    switch ( action.type ) {\n\
        case CONSTANTS."+KAR[0]+":\n\
            return state;\n\
        case CONSTANTS."+KAR[1]+":\n\
            return state;\n\
        default:\n\
            return state;\n\
    }\n\
}"

fs.writeFileSync('./str.js', strConstant+strAction+strReducer);
