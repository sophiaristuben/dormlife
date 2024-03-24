import React, { useState } from "react";
import TabNavItem from "../TabComponents/TabNavItem.js";
import TabContent from "../TabComponents/TabContent.js";
import { Popup } from "./Popup/Popup.js";
import { DormMap } from "./DormMap/DormMap.js";

// import map components
import MapboxComponent from "../MapComponents/MapboxComponent.js";
import "./DormNav.css";

// this will eventually get set by whereever is clicked on the map
// const roomProps = {
//     building: "Sontag",
//     roomNumber: "253"
// };

export const DormNav = ({ currSchool, activeTab, setActiveTab }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [clickedArea, setClickedArea] = useState(null);
    return (
        <div className="dormNav" onClick={Popup}>
            <ul className="dormButtons">
                <TabNavItem title="Sontag" id="sontag" activeTab={activeTab} setActiveTab={setActiveTab} setShowPopup={setShowPopup}/>
                <TabNavItem title="Walker" id="walker" activeTab={activeTab} setActiveTab={setActiveTab} setShowPopup={setShowPopup}/>
                <TabNavItem title="Clark 1" id="clark1" activeTab={activeTab} setActiveTab={setActiveTab} setShowPopup={setShowPopup}/>
                <TabNavItem title="Clark III" id="clark3" activeTab={activeTab} setActiveTab={setActiveTab} setShowPopup={setShowPopup}/>
                <TabNavItem title="Clark V" id="clark5" activeTab={activeTab} setActiveTab={setActiveTab} setShowPopup={setShowPopup}/>
                <TabNavItem title="Mudd" id="mudd" activeTab={activeTab} setActiveTab={setActiveTab} setShowPopup={setShowPopup}/>
                <TabNavItem title="Blaisdell" id="blaisdell" activeTab={activeTab} setActiveTab={setActiveTab} setShowPopup={setShowPopup}/>
                <TabNavItem title="Harwood" id="harwood" activeTab={activeTab} setActiveTab={setActiveTab} setShowPopup={setShowPopup}/>
                <TabNavItem title="Oldenborg" id="oldenborg" activeTab={activeTab} setActiveTab={setActiveTab} setShowPopup={setShowPopup}/>
                <TabNavItem title="Gibson" id="gibson" activeTab={activeTab} setActiveTab={setActiveTab} setShowPopup={setShowPopup}/>
            </ul>
            <div className="outlet">
                {activeTab === "walker" && (
                <TabContent id={activeTab} activeTab={activeTab}>
                    <div className="dormMapContainer">
                        <DormMap setShowPopup={setShowPopup} setClickedArea={setClickedArea}/>
                        {showPopup && (
                                <Popup {...clickedArea}/>
                            )}
                    </div>
                </TabContent>
                )}
                {activeTab === "mapbox" && (
                <TabContent id="mapbox" activeTab={activeTab}>
                    <MapboxComponent currSchool={currSchool}></MapboxComponent>
                </TabContent>
                )}
                

            </div>
        </div>
    )
};