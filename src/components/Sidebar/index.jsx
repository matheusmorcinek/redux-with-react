import React, { useState } from 'react';

export const modulesMock = [
    {
        id: 1,
        title: 'Iniciando com React',
        lessons: [
            {
                id: 1,
                title: 'Primeira aula'
            },
            {
                id: 2,
                title: 'Segunda aula'
            }
        ]
    },
    {
        id: 2,
        title: 'Aprendendo Redux',
        lessons: [
            {
                id: 1,
                title: 'Primeira aula'
            },
            {
                id: 2,
                title: 'Segunda aula'
            }
        ]
    }
];

const Sidebar = () => {

    const [modules, setModules] = useState(modulesMock);

    return (
        <aside>
            {
                modules.map(module =>
                (
                    <div key={module.id}>
                        <strong>{module.title}</strong>
                        <ul>
                            {
                                module.lessons.map(lesson => (
                                    <li key={lesson.id}>
                                        {lesson.title}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )
                )
            }
        </aside>
    );
}

export default Sidebar;