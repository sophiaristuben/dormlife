import React from "react";
import TabContent from "../TabComponents/TabContent";
import { DormMap } from "../DormNav/DormMap/DormMap";
import { Popup } from "../DormNav/Popup/Popup";

const DormComponent = ({ activeTab, dormState, dormData, activeFloor}) => {
    if (!dormData || !dormState) {
        return null;
    }
    const { dormName, dormInfo, mapImage } = dormData;
    const { clickedArea, setClickedArea, showPopup, setShowPopup } = dormState;

    return (
        <TabContent id={activeTab} activeTab={activeTab}>
            <div className="dormMapContainer">
                <DormMap setShowPopup={setShowPopup} setClickedArea={setClickedArea} map={mapImage[activeFloor-1]} activeTab={activeTab}/>
                {showPopup && (
                    <Popup {...clickedArea} />
                )}
                {!showPopup && (
                    <div className="dormInfo">
                        <div className="infoContentWrapper">
                            <h3>{dormName}</h3>
                            <p>{dormInfo}</p>
                        </div>
                    </div>
                )}
            </div>
            <div>test</div>
        </TabContent>
    );
};

export default DormComponent;