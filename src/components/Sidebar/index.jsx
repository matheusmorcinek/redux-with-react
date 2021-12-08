import React from 'react';

import * as CourseActions from '../../store/actions/course';

import { connect } from 'react-redux';
//o connect segue um conceito chamado Higher-Order Components, nada mais é que um pattern para compartilhar informação
//https://blog.rocketseat.com.br/higher-order-components-hocs-no-react-e-react-native/

//todo componente que utiliza o connect, tem também nas props a função dispatch
//!IMPORTANT - essa dispatch serve para disparar actions para o redux, e essas actions serão ouvidas por todos reducers da aplicação.
const Sidebar = ({ modules, toggleLesson }) => {

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
                                        <button onClick={() => toggleLesson(module, lesson)} >Selecionar</button>
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

const mapStateToProps = state => ({
    modules: state.course.modules
});

const mapDispatchToProps = dispatch => ({
    toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson))
});

//https://react-redux.js.org/api/connect
//usamos o connect para compartilhar o state do redux com o componente Sidebar

//v1 export default connect(state => ({ modules: state.course.modules }))(Sidebar);
// pega o dispatch na props a chama no onclick fica assim: <button onClick={() => { dispatch(CourseActions.toggleLesson(module, lesson)) }} >Selecionar</button>
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

//o primeiro parametro do connect recebe uma função, que recebe o state global e rotorna as propriedades que queremos utilizar.
//mas por enquanto no exemplo só temos uma array no state global, então vamos retornar tudo


//também é possivel reduzir o código gerado pelo redux ao faz o map dispatch to props, e claro, se a função e parametros tiverem o mesmo nome,
//utilizando um helper do redux chamado bindActionCreators
//import { bindActionCreators } from 'redux'
// const mapDispatchToProps = dispatch =>
//     bindActionCreators(CourseActions, dispatch);