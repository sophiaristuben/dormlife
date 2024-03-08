import React, { useState } from "react";
import TabNavItem from "./TabNavItem.js";
import TabContent from "./TabContent.js";

// import map components
import MapboxComponent from "../MapComponents/MapboxComponent.js";

// import your 
import WalkerComponent from "../PomonaComponents/WalkerComponent/WalkerComponent.js";
import OldyComponent from "../PomonaComponents/OldyComponent/OldyComponent.js";


const Tabs = () => {
  const [activeTab, setActiveTab] = useState("mapbox");
 
  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem title="Oldy" id="oldy" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Walker" id="walker" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="oldy" activeTab={activeTab}>
          <OldyComponent></OldyComponent>
        </TabContent>
        <TabContent id="walker" activeTab={activeTab}>
          <WalkerComponent></WalkerComponent>
        </TabContent>

      </div>
    </div>
  );
};

export default Tabs;