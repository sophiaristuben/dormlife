import "./App.css";
import React from "react";
import { Header } from "../Components/Header/Header";
import { Outlet } from "react-router-dom";

const App = () => {

  return (
    <>
      <Header />
      <div className="App">
        <div className="Tabs">
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default App;


