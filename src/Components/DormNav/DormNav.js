import React, { useState } from "react";
import TabNavItem from "../TabComponent/TabNavItem";
import TabContent from "../TabComponent/TabContent";
// import { RoomInfo } from "../TabComponent/RoomInfo";
 // import map components
import MapboxComponent from "../MapComponents/MapboxComponent.js";
import "./DormNav.css";

import Popup from "../TabComponent/RoomInfo";

export const DormNav = ({currSchool}) => {
    const [activeTab, setActiveTab] = useState("mapbox");

    return (
        <div className="dormNav" onClick={Popup}>
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
                    <MapboxComponent currSchool={currSchool}></MapboxComponent>
                    {/* <RoomInfo /> */}
                </TabContent>
                
            </div>
        </div>
    )
};