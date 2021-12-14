const express = require('express')
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

app.get('/courses', function (req, res) {
    res.send(modulesMock);
})

app.listen(3003)