import { Courses } from "components/Courses";
import React from "react";
import { Provider } from 'react-redux';
import store from "./store";
import * as CourseActions from './store/actions/course';

store.dispatch(CourseActions.getCourses());

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>React and Redux</h1>
        <Courses />
      </Provider>
    </div>
  );
}

export default App;
