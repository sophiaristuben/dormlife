import React, { useState } from "react";
import TabNavItem from "../TabComponents/TabNavItem.js";
import TabContent from "../TabComponents/TabContent.js";
import { Popup } from "./Popup/Popup.js";
import DormComponent from "../DormComponent/DormComponent.js";

// import map components
import MapboxComponent from "../MapComponents/MapboxComponent.js";
import "./DormNav.css";


export const DormNav = ({ activeTab, setActiveTab, dormList, dormIds }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [clickedArea, setClickedArea] = useState(null);

    const dormComponentState = {
        clickedArea: clickedArea,
        setClickedArea: setClickedArea,
        showPopup: showPopup,
        setShowPopup: setShowPopup
    }

    return (
        <div className="dormNav" onClick={Popup}>
            <ul className="dormButtons">
                {dormIds.map((dormId) => (
                    <TabNavItem
                        key={dormId}
                        title={dormList[dormId].dormName}
                        id={dormId}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        setShowPopup={setShowPopup}
                    />
                ))}
            </ul>
            <div className="outlet">
                {activeTab === "mapbox" && (
                    <TabContent id="mapbox" activeTab={activeTab}>
                        <MapboxComponent></MapboxComponent>
                        {/* <RoomInfo /> */}
                    </TabContent>
                )}
                {/* if activeTab is any of the dorms, render that dorm's component */}
                <DormComponent
                    activeTab={activeTab}
                    dormState={dormComponentState}
                    dormData={dormList[activeTab]}
                />
            </div>
        </div>
    )
};