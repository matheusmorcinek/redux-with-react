import React, { useEffect } from 'react';

import { connect } from 'react-redux';

const Video = ({ activeModule, activeLesson }) => {

    useEffect(() => {

        console.log(' ')
        console.log('Video component did mount');
        console.log('activeModule', activeModule);
        console.log('activeLesson', activeLesson);
    }, []);

    useEffect(() => {

        console.log(' ')
        console.log('Video component did render');
        console.log('activeModule', activeModule);
        console.log('activeLesson', activeLesson);
    });

    return (
        <div>
            <strong>Módulo {activeModule.title}</strong>
            <span>Aula {activeLesson.title}</span>
        </div>
    );
}

export default connect(state => ({
    activeModule: state.course.activeModule,
    activeLesson: state.course.activeLesson
}))(Video);