import React from "react";
import Component from "./components/componentsetup";
import "./setup.css";

const App = () => {
  return (
    <>
      <h1 className="title">Linux</h1>
      <h3 className="subtitle">This is a blog for Linux</h3>
      <Component />
    </>
  );
};

export default App;
