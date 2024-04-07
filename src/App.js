import "./App.css";
import React, {useState} from "react";
import Tabs from "./Components/TabComponents/Tabs";
import { Header } from "./Components/Header/Header";

const App = () => {
  const [currSchool, setCurrSchool] = useState("default");
  const [activeTab, setActiveTab] = useState("mapbox");
  // console.log("currSchool from app: ", currSchool);
  return (
    <>
      <Header setCurrSchool={setCurrSchool} setActiveTab={setActiveTab}/>
      <div className="App">
        <Tabs currSchool={currSchool} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </>
  );
}
export default App;