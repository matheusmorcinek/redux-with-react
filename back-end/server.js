const express = require('express')
const cors = require('cors')
const app = express()

const modulesMock = [
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
    },
    {
        id: 3,
        title: 'Iniciando com Node',
        lessons: [
            {
                id: 1,
                title: 'Primeira aula'
            },
            {
                id: 2,
                title: 'Segunda aula'
            },
            {
                id: 3,
                title: 'Terceira aula'
            },
            {
                id: 4,
                title: 'Quarta aula'
            }
        ]
    }
];

app.use(cors())

app.get('/courses', function (req, res) {

    const timeout = Math.random() * (3000 - 1000) + 1000;

    setTimeout(() => {
        console.log('backend /courses')
        res.json(modulesMock);
    }, timeout);

    // setTimeout(() => {

    //     res.status(500).send({ error: 'Something failed!' });
    // }, 3000);

})


app.get('/remove/lesson/:moduleId/:lessonId', function (req, res) {

    console.log('/remove/lesson');
    console.log('moduleId', req.params.moduleId);
    console.log('lessonId', req.params.lessonId);

    const timeout = Math.random() * (1000 - 500) + 500;

    try {

        setTimeout(() => {
            const moduleIndex = parseInt(req.params.moduleId) - 1;
            const lessonId = parseInt(req.params.lessonId);
            modulesMock[moduleIndex].lessons = modulesMock[moduleIndex].lessons.filter(lesson => lesson.id !== lessonId);
            res.send(200);
        }, timeout);
    } catch (err) {

        console.error(err);
        res.send(500);
    }
});


app.listen(3001)