export const INITIAL_STATE = {
    status: 'idle', // or: 'loading', 'succeeded', 'failed'
    courses: []
};

const course = (state = INITIAL_STATE, action) => {

    //removing unnecessary console logs, the first reducers calls are just the Redux checks.
    if (!action.type.includes('@@redux')) {
        console.log(' ');
        console.log('COURSE Reducer');
        console.log('current state', state);
        console.log('action', action);
    }

    switch (action.type) {

        case 'FETCH_COURSES_LOADED': {

            return {
                // ...state, //todo ???
                status: 'succeeded',
                courses: action.payload
            };
        };

        case 'FETCH_COURSES_LOADING': {

            return {
                ...state,
                status: 'loading'
            };
        };

        case 'FETCH_COURSES_FAILED': {

            return {
                ...state,
                status: 'failed'
            };
        };

        default:

            return state;
    };
};

export default course;