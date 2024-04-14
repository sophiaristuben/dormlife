import React, { useState } from "react";
import TabContent from "../../TabComponents/TabContent";
import { DormMap } from "../../DormNav/DormMap/DormMap";
import { Popup } from "../../DormNav/Popup/Popup";
import LyonFloor1 from "/Users/catherineliu/dormlife/src/Components/DormNav/DormMap/Maps/Lyon/Lyon12.png";
import LyonFloor2 from "/Users/catherineliu/dormlife/src/Components/DormNav/DormMap/Maps/Lyon/Lyon12.png";
import FirstFloorButton from "../Buttons/Two Floors/2_1_FloorButton.png";
import SecondFloorButton from "../Buttons/Two Floors/2_2_FloorButton.png";

const LyonComponent = ({ activeTab, clickedArea, setClickedArea, showPopup, setShowPopup }) => {
    const [activeMap, setActiveMap] = useState(LyonFloor1);

    const switchToFirstFloor = () => {
        setActiveMap(LyonFloor1);
    };

    const switchToSecondFloor = () => {
        setActiveMap(LyonFloor2);
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
                            <h3>Lyon</h3>
                            <p> ... </p>
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

export default LyonComponent;
