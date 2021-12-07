import React from 'react';

import { connect } from 'react-redux';
//o connect segue um conceito chamado Higher-Order Components, nada mais é que um pattern para compartilhar informação
//https://blog.rocketseat.com.br/higher-order-components-hocs-no-react-e-react-native/

const Sidebar = ({ modules }) => {

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
                                        <button onClick={() => {  }} />
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