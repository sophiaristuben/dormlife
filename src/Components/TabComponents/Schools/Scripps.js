import React, { useState } from "react";
import { DormNav } from "../../DormNav/DormNav";

export const Scripps = () => {
    const [activeTab, setActiveTab] = useState("mapbox");

    const scrippsDorms = [
        { title: "240", id: "240" },
        { title: "709", id: "709" },
        { title: "1060", id: "1060" },
        { title: "Browning", id: "browning" },
        { title: "Clark", id: "clark" },
        { title: "Dorsey", id: "dorsey" },
        { title: "Frankel", id: "frankel" },
        { title: "GJW", id: "gjw" },
        { title: "Kimberly", id: "kimberly" },
        { title: "Revelle", id: "revelle" },
        { title: "Routt", id: "routt" },
        { title: "Schow", id: "schow" },
        { title: "Toll", id: "toll" },
      ];

    return (
        <>
            <div className="floorNav">
                {activeTab !== "mapbox" && (
                    <>
                        <div>Floor 1</div>
                        <div>Floor 2</div>
                        <div>Floor 3</div>
                    </>
                )}
            </div>
            <DormNav activeTab={activeTab} setActiveTab={setActiveTab} dormList={scrippsDorms} />
        </>
    );
}