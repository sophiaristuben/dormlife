import React, { useState } from "react";
import TabContent from "../../TabComponents/TabContent";
import { DormMap } from "../../DormNav/DormMap/DormMap";
import { Popup } from "../../DormNav/Popup/Popup";
import DialynasFloor1 from "../../DormNav/DormMap/Maps/Dialynas/Dialynas1.png";
import DialynasFloor2 from "../../DormNav/DormMap/Maps/Dialynas/Dialynas2.png";
import DialynasFloor3 from "../../DormNav/DormMap/Maps/Dialynas/Dialynas3.png";
import FirstFloorButton from "../Buttons/Three Floors/3_1_FloorButton.png";
import SecondFloorButton from "../Buttons/Three Floors/3_2_FloorButton.png";
import ThirdFloorButton from "../Buttons/Three Floors/3_3_FloorButton.png";

const DialynasComponent = ({ activeTab, clickedArea, setClickedArea, showPopup, setShowPopup }) => {
    const [activeMap, setActiveMap] = useState(DialynasFloor1);

    const switchToFirstFloor = () => {
        setActiveMap(DialynasFloor1);
    };

    const switchToSecondFloor = () => {
        setActiveMap(DialynasFloor2);
    };

    const switchToThirdFloor = () => {
        setActiveMap(DialynasFloor3);
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
                            <h3>Dialynas</h3>
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

export default DialynasComponent;
