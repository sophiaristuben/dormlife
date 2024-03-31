import TabContent from "../../TabComponents/TabContent";
import { DormMap } from "../../DormNav/DormMap/DormMap";
import { Popup } from "../../DormNav/Popup/Popup";

const SontagComponent = ({activeTab, clickedArea, setClickedArea, showPopup, setShowPopup}) => {
    return (
        <>
            <TabContent id={activeTab} activeTab={activeTab}>
                <div className="dormMapContainer">
                    <DormMap setShowPopup={setShowPopup} setClickedArea={setClickedArea} />
                    {showPopup && (
                        <Popup {...clickedArea} />
                    )}
                </div>
            </TabContent>
        </>
    )
};

export default SontagComponent;
