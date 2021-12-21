import React from "react";
import { connect } from "react-redux";
import * as CourseActions from '../../../store/actions/course';

const RemoveCourseConnectButton = ({ courseId, lessonId, removeLesson, courses }) => {

    const remove = (event) => {
        event.preventDefault();
        removeLesson(courseId, lessonId);
    };

    return (
        <button onClick={remove}>Remover Aula</button>
    );
};


const mapDispatchToProps = dispatch => ({
    removeLesson: (courseId, lessonId) => dispatch(CourseActions.removeLesson(courseId, lessonId))
});

export default connect(null, mapDispatchToProps)(RemoveCourseConnectButton);