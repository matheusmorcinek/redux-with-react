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

export const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: modulesMock,
};

//função que retorna o state inicial
//E também, a função reducer é chamada de forma automática em alguns momentos da nossa aplicação.

const reducer = (state = INITIAL_STATE, action) => {
    //na primeira chamada que disparada ao construir o store, o state chega vazio, logo podemos definir um initial state para o app.

    console.log(' ');
    console.log('reducer test');
    console.log('state', state);
    console.log('action', action);
    //verificar que o primeiro log é pq o redux carregou o estado inicial da aplicação.
    //e quando uma action for disparada outro log será feito... mas pq isso aconteceu?
    //pq o reducer não serve apenas para retornar o estado inicial do app, mas serve também para manipular o state.
    //e esse state é manipulado através das actions.


    if (action.type === 'TOGGLE_LESSON') {
        return {
            ...state,
            activeLesson: action.lesson,
            activeModule: action.module
        }
    }

    //https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
    //então basicamente o reducer recebe dois parametros toda vez que uma action é disparada ou quando o store é construido.
    //state -> que simboliza o state antes da alteração
    //action
    return state;
};

const store = createStore(reducer);

export default store;