import React from "react"; 
import Sidebar from "./Layout/Sidebar";
import Widgets from "./Layout/Widgets";
import Content from "./Layout/Content";

const  App = () => {
  return (
    <div className="flex mx-auto  min-h-screen max-w-5xl ">
          <Sidebar />
          <Content />
          <Widgets />
    </div>
  );
}

export default App;
