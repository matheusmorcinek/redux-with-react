export const coursesLoading = () => ({ type: 'FETCH_COURSES_LOADING' });

export const coursesFailed = () => ({ type: 'FETCH_COURSES_FAILED' });

export const coursesLoaded = (courses) => ({
    type: 'FETCH_COURSES_LOADED',
    payload: courses
});

var requestOptions = {
    method: 'GET'
};

// Thunk function
export const getCourses = () => async (dispatch) => {
    dispatch(coursesLoading());
    await fetch('http://localhost:3001/courses', requestOptions)
        .then(response => {

            if (response.ok) {
                response.json().then(parsedBody => {

                    dispatch(coursesLoaded(parsedBody));
                });
            }

            if (response.status === 500) {
                throw new Error('Something went wrong.');
            }
        })
        .catch(error => {
            console.error(error);
            dispatch(coursesFailed());
        });
};