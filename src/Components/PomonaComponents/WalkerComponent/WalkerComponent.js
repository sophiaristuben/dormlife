import React, { useState } from "react";
import TabContent from "../../TabComponents/TabContent";
import { DormMap } from "../../DormNav/DormMap/DormMap";
import { Popup } from "../../DormNav/Popup/Popup";
import WalkerFloor1 from "../../DormNav/DormMap/WalkerFloor1.png";
import WalkerFloor2 from "../../DormNav/DormMap/WalkerMap2.png";
import FirstFloorButton from "../Buttons/Two Floors/2_1_FloorButton.png";
import SecondFloorButton from "../Buttons/Two Floors/2_2_FloorButton.png";

const WalkerComponent = ({ activeTab, clickedArea, setClickedArea, showPopup, setShowPopup }) => {
    const [activeMap, setActiveMap] = useState(WalkerFloor1);

    const switchToFirstFloor = () => {
        setActiveMap(WalkerFloor1);
    };

    const switchToSecondFloor = () => {
        setActiveMap(WalkerFloor2);
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
                            <h3>Walker!</h3>
                            <p>Walker Hall is located on North Campus directly across from Clark 5.</p>
                        </div>
                    )}
                </div>
            </TabContent>
            <div className="sidePanel" style={{ position: 'absolute', top: '50%', left: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: '999' }}>
                 <button style={{ width: '50px', height: '80px', margin: '0px', padding: '0', border: 'none', background: 'none', cursor: 'pointer' }} onClick={switchToFirstFloor}>
                    <img src={FirstFloorButton} alt="First Floor" style={{ width: '100%', height: '100%' }} />
                </button>
                <button style={{ width: '50px', height: '80px', margin: '35px', padding: '0', border: 'none', background: 'none', cursor: 'pointer' }} onClick={switchToSecondFloor}>
                    <img src={SecondFloorButton} alt="Second Floor" style={{ width: '100%', height: '100%' }} />
                </button>
            </div>
        </>
    );
};

export default WalkerComponent;
