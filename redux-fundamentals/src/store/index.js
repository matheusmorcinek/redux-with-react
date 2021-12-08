//A função createStore do redux cria o nosso estado global, o store global da nossa aplicação, onde será armazenado todas informações do app.
import { createStore } from 'redux';

import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;