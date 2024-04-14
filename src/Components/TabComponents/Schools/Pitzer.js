import React, { useState } from "react";
import { DormNav } from "../../DormNav/DormNav";

export const Pitzer = () => {
    const [activeTab, setActiveTab] = useState("mapbox");

    const pitzerDorms = [
        { title: "Pitzer", id: "pitzer" },
        { title: "Atherton", id: "Atherton" },
        { title: "Sanborn", id: "sanborn" },
        { title: "Skandera", id: "skandera" },
        { title: "Mead", id: "mead" },
        { title: "West", id: "west" },
        { title: "East", id: "east" },
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
            <DormNav activeTab={activeTab} setActiveTab={setActiveTab} dormList={pitzerDorms}/>
        </>
    );
}