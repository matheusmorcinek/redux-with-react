//A função createStore do redux cria o nosso estado global, o store global da nossa aplicação, onde será armazenado todas informações do app.
import { createStore } from 'redux';

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


//função que retorna o state inicial
//E também, a função reducer é chamada de forma automática em alguns momentos da nossa aplicação.

const reducer = () => ({
    activeLesson: null,
    activeModule: null,
    modules: modulesMock,
});

const store = createStore(reducer);

export default store;