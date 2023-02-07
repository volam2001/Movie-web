import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default App;
