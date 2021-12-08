import { combineReducers } from 'redux';
//serva para quando temos varios reducers dentro da aplicação

import course from './course';

export default combineReducers({
    course
});

//agora temos
// {
//     course: {
//         modules: [],
//         activeLesson: {},
//         activeModule: {}
//     },
//     user: {
//         name: ''
//         avatar: ''
//     }
// }
