import React from "react";
import { Provider } from 'react-redux';
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";
import store from "./store";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>React and Redux</h1>
        <Video />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;
