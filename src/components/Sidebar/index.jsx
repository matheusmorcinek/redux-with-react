import React from 'react';

import { connect } from 'react-redux';
//o connect segue um conceito chamado Higher-Order Components, nada mais é que um pattern para compartilhar informação
//https://blog.rocketseat.com.br/higher-order-components-hocs-no-react-e-react-native/

const toggleLesson = (module, lesson) => {
    return {
        //o type indica a ação que está sendo realizada, e essa ação precisa ser única dentro do redux
        type: 'TOGGLE_LESSON',
        //logo depois podemos enviar qualquer outra informação, neste exemplo vamos eviar module e lesson
        //https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
        module,
        lesson
    };
};

//todo componente que utiliza o connect, tem também nas props a função dispatch
//!IMPORTANT - essa dispatch serve para disparar actions para o redux, e essas actions serão ouvidas por todos reducers da aplicação.
const Sidebar = ({ modules, dispatch }) => {

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
                                        <button onClick={() => { dispatch(toggleLesson(module, lesson)) }} >Selecionar</button>
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

//https://react-redux.js.org/api/connect
//usamos o connect para compartilhar o state do redux com o componente Sidebar
export default connect(state => ({ modules: state.modules }))(Sidebar);

//o primeiro parametro do connect recebe uma função, que recebe o state global e rotorna as propriedades que queremos utilizar.
//mas por enquanto no exemplo só temos uma array no state global, então vamos retornar tudo