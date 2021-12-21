import React from "react";
import { useDispatch } from "react-redux";
import * as CourseActions from '../../../store/actions/course';

export const RemoveCourseButton = ({ courseId, lessonId }) => {

    const dispatch = useDispatch();

    const remove = (event) => {
        event.preventDefault();
        dispatch(CourseActions.removeLesson(courseId, lessonId));
    };

    return (
        <button onClick={remove}>Remover Aula</button>
    );
};