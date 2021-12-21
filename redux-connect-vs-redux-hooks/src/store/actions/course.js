export const coursesLoading = () => ({ type: 'FETCH_COURSES_LOADING' });

export const coursesFailed = () => ({ type: 'FETCH_COURSES_FAILED' });

export const coursesLoaded = (courses) => ({
    type: 'FETCH_COURSES_LOADED',
    payload: courses
});

var requestOptions = {
    method: 'GET'
};

const fetchCourses = async (dispatch) => {
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

// Thunk function
export const getCourses = () => (dispatch) => {
    dispatch(coursesLoading());
    fetchCourses(dispatch);
};

// Thunk function
export const removeLesson = (courseId, lessonId) => async (dispatch) => {
    dispatch(coursesLoading());
    await fetch(`http://localhost:3001/remove/lesson/${courseId}/${lessonId}`, requestOptions)
        .then(response => {

            if (response.ok) {
                fetchCourses(dispatch);
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



