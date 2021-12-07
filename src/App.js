import React from "react";
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";

const App = () => {
  return (
    <div className="App">
      <h1>React and Redux</h1>
      <Video />
      <Sidebar />
    </div>
  );
}

export default App;
