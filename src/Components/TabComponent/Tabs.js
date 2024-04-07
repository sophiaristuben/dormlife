import React from "react";
import { DormNav } from "../DormNav/DormNav";
import ThreeFirstButton from './3_1_FloorButton.png';
import ThreeSecondButton from './3_2_FloorButton.png';
import ThreeThirdButton from './3_3_FloorButton.png';

const Tabs = ({ currSchool, activeTab, setActiveTab }) => {
  return (
    <div className="Tabs">
        <div className="floorNav">
          {activeTab !== "mapbox" && (
            <>
              <div>Floor 1</div>
              <div>Floor 2</div>
              <div>Floor 3</div>
            </>
          )}
        </div>
      <DormNav currSchool={currSchool} activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Tabs;