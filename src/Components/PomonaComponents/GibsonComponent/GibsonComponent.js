import TabContent from "../../TabComponents/TabContent";
import { DormMap } from "../../DormNav/DormMap/DormMap";
import { Popup } from "../../DormNav/Popup/Popup";
import TahoeHouse from "../SontagComponent/TahoeHouse2005.jpg";

const GibsonComponent = ({activeTab, clickedArea, setClickedArea, showPopup, setShowPopup}) => {
    return (
        <>
            <TabContent id={activeTab} activeTab={activeTab}>
                <div className="dormMapContainer">
                    <DormMap setShowPopup={setShowPopup} setClickedArea={setClickedArea} map={TahoeHouse} activeTab={activeTab}/>
                    {showPopup && (
                        <Popup {...clickedArea} />
                    )}
                </div>
            </TabContent>
        </>
    )
};

export default GibsonComponent;
