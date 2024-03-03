import React, { useState } from "react";
import TabNavItem from "./TabNavItem.js";
import TabContent from "./TabContent.js";

// import map components
import MapboxComponent from "../MapComponents/MapboxComponent.js";

// import your 
import SophiaComponent from "../AboutMeComponents/SophiaComponent/SophiaComponent.js";
import GeorgiaComponent from "../AboutMeComponents/GeorgiaComponent/GeorgiaComponent.js";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("mapbox");
 
  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem title="Map" id="mapbox" activeTab={activeTab} setActiveTab={setActiveTab}/>

        <TabNavItem title="Sophia" id="sophia" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Rachel" id="rachel" activeTab={activeTab} setActiveTab={setActiveTab}/>

        <TabNavItem title="Adrien" id="adrien" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Max" id="max" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Diya" id="diya" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Catherine" id="catherine" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Georgia" id="georgia" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Frank" id="frank" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="mapbox" activeTab={activeTab}>
          <MapboxComponent></MapboxComponent>
        </TabContent>

        <TabContent id="sophia" activeTab={activeTab}>
          <SophiaComponent></SophiaComponent>
        </TabContent>
        <TabContent id="rachel" activeTab={activeTab}>
          <p>Insert text...</p>
        </TabContent>
        <TabContent id="adrien" activeTab={activeTab}>
          <p>Insert text...</p>
        </TabContent>
        <TabContent id="max" activeTab={activeTab}>
          <p>Insert text...</p>
        </TabContent>
        <TabContent id="diya" activeTab={activeTab}>
          <p>Insert text...</p>
        </TabContent>
        <TabContent id="catherine" activeTab={activeTab}>
          <p>Insert text...</p>
        </TabContent>
        <TabContent id="georgia" activeTab={activeTab}>
          <GeorgiaComponent></GeorgiaComponent>
        </TabContent>
        <TabContent id="frank" activeTab={activeTab}>
          <p>Insert text...</p>
        </TabContent>

      </div>
    </div>
  );
};

export default Tabs;