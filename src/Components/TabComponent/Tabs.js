import React from "react";
import { DormNav } from "../DormNav/DormNav";

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