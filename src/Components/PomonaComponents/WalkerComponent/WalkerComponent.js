import "./WalkerComponent.css";

import TabContent from "../../TabComponents/TabContent";
import { DormMap } from "../../DormNav/DormMap/DormMap";
import { Popup } from "../../DormNav/Popup/Popup";
import WalkerFloor1 from "../../DormNav/DormMap/WalkerFloor1.png";

const WalkerComponent = ({activeTab, clickedArea, setClickedArea, showPopup, setShowPopup}) => {
    return (
        <>
            <TabContent id={activeTab} activeTab={activeTab}>
                <div className="dormMapContainer">
                    <DormMap setShowPopup={setShowPopup} setClickedArea={setClickedArea} map={WalkerFloor1}/>
                    {showPopup && (
                        <Popup {...clickedArea} />
                    )}
                </div>
            </TabContent>
        </>
    )
};

export default WalkerComponent;
