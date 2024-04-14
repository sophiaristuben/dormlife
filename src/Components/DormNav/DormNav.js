import React, { useState } from "react";
import TabNavItem from "../TabComponents/TabNavItem.js";
import TabContent from "../TabComponents/TabContent.js";
import { Popup } from "./Popup/Popup.js";
import WalkerComponent from "../PomonaComponents/WalkerComponent/WalkerComponent.js"
import SontagComponent from "../PomonaComponents/SontagComponent/SontagComponent.js";
import ClarkIComponent from "../PomonaComponents/ClarkIComponent/ClarkIComponent.js";
import ClarkIIIComponent from "../PomonaComponents/ClarkIIIComponent/ClarkIIIComponent.js";
import ClarkVComponent from "../PomonaComponents/ClarkVComponent/ClarkVComponent.js";
import HarwoodComponent from "../PomonaComponents/HarwoodComponent/HarwoodComponent.js";
import GibsonComponent from "../PomonaComponents/GibsonComponent/GibsonComponent.js";
import OldenborgComponent from "../PomonaComponents/OldenborgComponent/OldenborgComponent.js";
import DialynasComponent from "../PomonaComponents/DialynasComponent/DialynasComponent.js";
import MuddComponent from "../PomonaComponents/MuddComponent/MuddComponent.js";
import BlaisdellComponent from "../PomonaComponents/BlaisdellComponent/BlaisdellComponent.js";
import WigComponent from "../PomonaComponents/WigComponent/WigComponent.js";

// import map components
import MapboxComponent from "../MapComponents/MapboxComponent.js";
import "./DormNav.css";


export const DormNav = ({activeTab, setActiveTab, dormList}) => {
    const [showPopup, setShowPopup] = useState(false);
    const [clickedArea, setClickedArea] = useState(null);
    return (
        <div className="dormNav" onClick={Popup}>
            <ul className="dormButtons">
                {dormList.map(dorm => (
                    <TabNavItem
                    key={dorm.id}
                    title={dorm.title}
                    id={dorm.id}
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
                {activeTab === "sontag" && (
                    <SontagComponent 
                        activeTab={activeTab}
                        clickedArea={clickedArea}
                        setClickedArea={setClickedArea} 
                        showPopup={showPopup} 
                        setShowPopup={setShowPopup} />
                )}
                {activeTab === "walker" && (
                    <WalkerComponent 
                        activeTab={activeTab} 
                        clickedArea={clickedArea} 
                        setClickedArea={setClickedArea} 
                        showPopup={showPopup} 
                        setShowPopup={setShowPopup} 
                    />
                )}
                {activeTab === "clark1" && (
                    <ClarkIComponent 
                        activeTab={activeTab} 
                        clickedArea={clickedArea} 
                        setClickedArea={setClickedArea} 
                        showPopup={showPopup} 
                        setShowPopup={setShowPopup} 
                    />
                )}
                {activeTab === "clark3" && (
                    <ClarkIIIComponent 
                    activeTab={activeTab} 
                    clickedArea={clickedArea} 
                    setClickedArea={setClickedArea} 
                    showPopup={showPopup} 
                    setShowPopup={setShowPopup} 
                />
                )}
                {activeTab === "clark5" && (
                    <ClarkVComponent 
                    activeTab={activeTab} 
                    clickedArea={clickedArea} 
                    setClickedArea={setClickedArea} 
                    showPopup={showPopup} 
                    setShowPopup={setShowPopup} 
                />
                )}
                {activeTab === "mudd" && (
                    <MuddComponent 
                    activeTab={activeTab} 
                    clickedArea={clickedArea} 
                    setClickedArea={setClickedArea} 
                    showPopup={showPopup} 
                    setShowPopup={setShowPopup} 
                />
                )}
                {activeTab === "blaisdell" && (
                    <BlaisdellComponent 
                    activeTab={activeTab} 
                    clickedArea={clickedArea} 
                    setClickedArea={setClickedArea} 
                    showPopup={showPopup} 
                    setShowPopup={setShowPopup} 
                />
                )}
                {activeTab === "harwood" && (
                    <HarwoodComponent 
                    activeTab={activeTab} 
                    clickedArea={clickedArea} 
                    setClickedArea={setClickedArea} 
                    showPopup={showPopup} 
                    setShowPopup={setShowPopup} 
                />
                )}
                {activeTab === "dialynas" && (
                    <DialynasComponent 
                    activeTab={activeTab} 
                    clickedArea={clickedArea} 
                    setClickedArea={setClickedArea} 
                    showPopup={showPopup} 
                    setShowPopup={setShowPopup} 
                />
                )}
                {activeTab === "oldenborg" && (
                    <OldenborgComponent 
                    activeTab={activeTab} 
                    clickedArea={clickedArea} 
                    setClickedArea={setClickedArea} 
                    showPopup={showPopup} 
                    setShowPopup={setShowPopup} 
                />
                )}
                {activeTab === "gibson" && (
                    <GibsonComponent 
                    activeTab={activeTab} 
                    clickedArea={clickedArea} 
                    setClickedArea={setClickedArea} 
                    showPopup={showPopup} 
                    setShowPopup={setShowPopup} 
                />
                )}
                {activeTab === "wig" && (
                    <WigComponent 
                    activeTab={activeTab} 
                    clickedArea={clickedArea} 
                    setClickedArea={setClickedArea} 
                    showPopup={showPopup} 
                    setShowPopup={setShowPopup} 
                />
                )}


            </div>
        </div>
    )
};