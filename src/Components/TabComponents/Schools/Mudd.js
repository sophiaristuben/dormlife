import React, { useState } from "react";
import { DormNav } from "../../DormNav/DormNav";

export const Mudd = () => {
    const [activeTab, setActiveTab] = useState("mapbox");

    const muddDorms = [
        { title: "Atwood", id: "atwood" },
        { title: "Case", id: "case" },
        { title: "East", id: "east" },
        { title: "Drinkward", id: "drinkward" },
        { title: "Linde", id: "linde" },
        { title: "Sontag", id: "sontag" },
        { title: "North", id: "north" },
        { title: "Marks", id: "marks" },
        { title: "West", id: "west" },
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
            <DormNav activeTab={activeTab} setActiveTab={setActiveTab} dormList={muddDorms}/>
        </>
    );
}