import { Courses } from "components/Courses";
import CoursesConnect from "components/CoursesConnect";
import React from "react";
import { Provider } from 'react-redux';
import store from "./store";
import * as CourseActions from './store/actions/course';

store.dispatch(CourseActions.getCourses());

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>Connect VS Hooks</h1>
        <Courses />
        {/* <CoursesConnect /> */}
      </Provider>
    </div>
  );
}

export default App;