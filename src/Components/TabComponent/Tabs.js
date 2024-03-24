import React from "react";
import { DormNav } from "../DormNav/DormNav";

const Tabs = ({currSchool}) => {
  return (
    <div className="Tabs">
      <div className="floorNav">
        <div>Floor 1</div>
        <div>Floor 2</div>
        <div>Floor 3</div>
      </div>
      <DormNav currSchool={currSchool} />
    </div>
  );
};

export default Tabs;