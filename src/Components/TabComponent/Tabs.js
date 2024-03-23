import React, { useState } from "react";
import TabNavItem from "./TabNavItem.js";
import TabContent from "./TabContent.js";

// import map components
import MapboxComponent from "../MapComponents/MapboxComponent.js";

// import your 
import SophiaComponent from "../AboutMeComponents/SophiaComponent/SophiaComponent.js";
import MaxComponent from "../AboutMeComponents/MaxComponent/MaxComponent.js";
import RachelComponent from "../AboutMeComponents/RachelComponent/RachelComponent.js";
import { SchoolTab } from "../SchoolTab/SchoolTab.js";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("mapbox");

  return (
    <div className="Tabs">
      <div className="floorNav">
        <div>Floor 1</div>
        <div>Floor 2</div>
        <div>Floor 3</div>
      </div>
      <div className="dormNav">
        <ul className="dormButtons">
          <TabNavItem title="Sontag" id="mapbox" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabNavItem title="Walker" id="walker" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabNavItem title="Clark 1" id="clark1" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabNavItem title="Clark III" id="clark3" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabNavItem title="Clark V" id="clark5" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabNavItem title="Mudd" id="mudd" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabNavItem title="Blaisdell" id="blaisdell" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabNavItem title="Harwood" id="harwood" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabNavItem title="Oldenborg" id="oldenborg" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabNavItem title="Gibson" id="gibson" activeTab={activeTab} setActiveTab={setActiveTab} />

        </ul>
        <div className="outlet">
          <TabContent id="mapbox" activeTab={activeTab}>
            <MapboxComponent></MapboxComponent>
          </TabContent>
          <TabContent id="sophia" activeTab={activeTab}>
            <SophiaComponent></SophiaComponent>
          </TabContent>
        </div>
      </div>

    </div>
  );
};

export default Tabs;