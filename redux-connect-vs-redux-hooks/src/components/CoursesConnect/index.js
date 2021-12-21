
import React, { useEffect } from "react";
import { connect } from 'react-redux';
import RemoveCourseConnectButton from "./RemoveCourseConnectButton";


const CoursesConnect = ({ courses }) => {

    useEffect(() => {

        console.log(' ')
        console.log('> Courses connect component did mount');
        console.log('coursesState', courses);

    }, []);

    useEffect(() => {

        console.log(' ')
        console.log('> Courses connect component did render');
        console.log('coursesState', courses);
    });

    if (courses.status === 'loading') {
        return (
            <h2>Loading ...</h2>
        );
    }

    if (courses.status === 'failed') {
        return (
            <h2>Something failed while fetching courses!</h2>
        );
    }

    return (
        <>
            <h1>Courses component with redux connect</h1>
            {
                courses.courses.map(course => {
                    return (
                        <div key={course.id}>
                            <strong>{course.title}</strong>
                            <ul>
                                {
                                    course.lessons.length === 0 && <p>Nenhuma aula do modulo <strong>{course.title}</strong> foi encontrada..</p>
                                }
                                {
                                    course.lessons.map(lesson => {
                                        return (
                                            <li key={lesson.id}>
                                                {lesson.title}
                                                <RemoveCourseConnectButton courseId={course.id} lessonId={lesson.id} />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </>
    );
};

const mapStateToProps = state => ({
    courses: state.course
});

export default connect(mapStateToProps)(CoursesConnect);