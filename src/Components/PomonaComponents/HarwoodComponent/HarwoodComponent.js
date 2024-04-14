import React, { useState } from "react";
import TabContent from "../../TabComponents/TabContent";
import { DormMap } from "../../DormNav/DormMap/DormMap";
import { Popup } from "../../DormNav/Popup/Popup";
import HarFloor1 from "/Users/catherineliu/dormlife/src/Components/DormNav/DormMap/Maps/Harwood/ResHall-FloorPlan-Harwood 0-1.png";
import HarFloor2 from "/Users/catherineliu/dormlife/src/Components/DormNav/DormMap/Maps/Harwood/ResHall-FloorPlan-Harwood 1-1.png";
import HarFloor3 from "/Users/catherineliu/dormlife/src/Components/DormNav/DormMap/Maps/Harwood/ResHall-FloorPlan-Harwood 2-1.png";
import HarFloor4 from "/Users/catherineliu/dormlife/src/Components/DormNav/DormMap/Maps/Harwood/ResHall-FloorPlan-Harwood 3-1.png";
import FirstFloorButton from "../Buttons/Four Floors/4_1_FloorButton.png";
import SecondFloorButton from "../Buttons/Four Floors/4_2_FloorButton.png";
import ThirdFloorButton from "../Buttons/Four Floors/4_3_FloorButton.png";
import FourthFloorButton from "../Buttons/Four Floors/4_4_FloorButton.png";

const HarwoodComponent = ({ activeTab, clickedArea, setClickedArea, showPopup, setShowPopup }) => {
    const [activeMap, setActiveMap] = useState(HarFloor1);

    const switchToFirstFloor = () => {
        setActiveMap(HarFloor1);
    };

    const switchToSecondFloor = () => {
        setActiveMap(HarFloor2);
    };

    const switchToThirdFloor = () => {
        setActiveMap(HarFloor3);
    };
    
    const switchToFourthFloor = () => {
        setActiveMap(HarFloor4);
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
                            <h3>Harwood</h3>
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
                <button style={{ width: '50px', height: '80px', margin: '10px', padding: '0', border: 'none', background: 'none', cursor: 'pointer' }} onClick={switchToThirdFloor}>
                    <img src={ThirdFloorButton} alt="Third Floor" style={{ width: '100%', height: '100%' }} />
                </button>
                <button style={{ width: '50px', height: '80px', margin: '10px', padding: '0', border: 'none', background: 'none', cursor: 'pointer' }} onClick={switchToFourthFloor}>
                    <img src={FourthFloorButton} alt="Fourth Floor" style={{ width: '100%', height: '100%' }} />
                </button>
            </div>
        </>
    );
};

export default HarwoodComponent;
