import React, { useState } from "react";
import TabContent from "../../TabComponents/TabContent";
import { DormMap } from "../../DormNav/DormMap/DormMap";
import { Popup } from "../../DormNav/Popup/Popup";
import GibsonFloor1 from "../../DormNav/DormMap/Maps/Gibson/Gibson1.png";
import FirstFloorButton from "../Buttons/Two Floors/2_1_FloorButton.png";
import SecondFloorButton from "../Buttons/Two Floors/2_2_FloorButton.png";

const GibsonComponent = ({ activeTab, clickedArea, setClickedArea, showPopup, setShowPopup }) => {
    const [activeMap, setActiveMap] = useState(GibsonFloor1);

    const switchToFirstFloor = () => {
        setActiveMap(GibsonFloor1);
    };

    return (
        <>
            <TabContent id={activeTab} activeTab={activeTab}>
                <div className="dormMapContainer" style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100vh', padding: '20px' }}>
                    <DormMap setShowPopup={setShowPopup} setClickedArea={setClickedArea} map={activeMap} activeTab={activeTab} />
                    {showPopup && (
                        <Popup {...clickedArea} />
                    )}
                    {!showPopup && (
                        <div className="dormInfo">
                            <h3>Gibson!</h3>
                            <p> ... </p>
                        </div>
                    )}
                </div>
            </TabContent>
        </>
    );
};

export default GibsonComponent;
