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

    setTimeout(() => {
        console.log('backend /courses')
        res.json(modulesMock);
    }, 3000);

    // setTimeout(() => {

    //     res.status(500).send({ error: 'Something failed!' });
    // }, 3000);

})

app.listen(3001)