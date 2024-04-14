import React, { useState } from "react";
import TabContent from "../../TabComponents/TabContent";
import { DormMap } from "../../DormNav/DormMap/DormMap";
import { Popup } from "../../DormNav/Popup/Popup";
import SontagFloor1 from "/Users/catherineliu/dormlife/src/Components/DormNav/DormMap/Maps/Sontag/Sontag1.png";
import SontagFloor2 from "/Users/catherineliu/dormlife/src/Components/DormNav/DormMap/Maps/Sontag/Sontag2.png";
import SontagFloor3 from "/Users/catherineliu/dormlife/src/Components/DormNav/DormMap/Maps/Sontag/Sontag3.png";
import FirstFloorButton from "../Buttons/Three Floors/3_1_FloorButton.png";
import SecondFloorButton from "../Buttons/Three Floors/3_2_FloorButton.png";
import ThirdFloorButton from "../Buttons/Three Floors/3_3_FloorButton.png";

const SontagComponent = ({ activeTab, clickedArea, setClickedArea, showPopup, setShowPopup }) => {
    const [activeMap, setActiveMap] = useState(SontagFloor1);

    const switchToFirstFloor = () => {
        setActiveMap(SontagFloor1);
    };

    const switchToSecondFloor = () => {
        setActiveMap(SontagFloor2);
    };

    const switchToThirdFloor = () => {
        setActiveMap(SontagFloor3);
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
                            <h3>Sontag</h3>
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
                    <img src={ThirdFloorButton} alt="Second Floor" style={{ width: '100%', height: '100%' }} />
                </button>
            </div>
        </>
    );
};

export default SontagComponent;
