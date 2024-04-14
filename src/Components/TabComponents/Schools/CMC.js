import React, { useState } from "react";
import { DormNav } from "../../DormNav/DormNav";

export const CMC = () => {
    const [activeTab, setActiveTab] = useState("mapbox");

    const cmcDorms = [
        { title: "Appleby", id: "appleby" },
        { title: "Auen", id: "auen" },
        { title: "Beckett", id: "beckett" },
        { title: "Benson", id: "benson" },
        { title: "Berger", id: "berger" },
        { title: "Boswell", id: "boswell" },
        { title: "Crown", id: "crown" },
        { title: "Fawcett", id: "fawcett" },
        { title: "Green", id: "green" },
        { title: "Marks", id: "marks" },
        { title: "Phillips", id: "phillips" },
        { title: "Stark", id: "stark" },
        { title: "Valach", id: "valach" },
        { title: "Wohlford", id: "wohlford" }
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
            <DormNav activeTab={activeTab} setActiveTab={setActiveTab} dormList={cmcDorms}/>
        </>
    );
}