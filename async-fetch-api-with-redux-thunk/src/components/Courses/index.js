
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const Courses = () => {

    const courses = useSelector(state => state.course);

    useEffect(() => {

        console.log(' ')
        console.log('> Courses component did mount');
        console.log('coursesState', courses);

    }, []);

    useEffect(() => {

        console.log(' ')
        console.log('> Courses component did render');
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
            {
                courses.courses.map(course => {
                    return (
                        <div key={course.id}>
                            <strong>{course.title}</strong>
                            <ul>
                                {
                                    course.lessons.map(lesson => {
                                        return (
                                            <li key={lesson.id}>
                                                {lesson.title}
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

