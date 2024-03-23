import "./App.css";
import React, {useState} from "react";
import Tabs from "./Components/TabComponent/Tabs";
import { Header } from "./Components/Header/Header";

const App = () => {
  const [currSchool, setCurrSchool] = useState("default");
  // console.log("currSchool from app: ", currSchool);
  return (
    <>
      <Header setCurrSchool={setCurrSchool} />
      <div className="App">
        <Tabs currSchool={currSchool} />
      </div>
    </>
  );
}
export default App;