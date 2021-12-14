export const toggleLesson = (module, lesson) => {
    return {
        //o type indica a ação que está sendo realizada, e essa ação precisa ser única dentro do redux
        type: 'TOGGLE_LESSON',
        //logo depois podemos enviar qualquer outra informação, neste exemplo vamos eviar module e lesson
        //https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
        module,
        lesson
    };
};

export const toggleLessonWithDelay = (module, lesson) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(toggleLesson(module, lesson));
        }, 2000);
    }
};