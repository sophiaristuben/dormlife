import React, { useState } from "react";
import { DormNav } from "../../DormNav/DormNav";

export const CMC = () => {
    const [activeTab, setActiveTab] = useState("mapbox");

    const cmcDorms = {
        "appleby": { dormName: "Appleby", dormInfo: "", mapImage: "" },
        "auen": { dormName: "Auen", dormInfo: "", mapImage: "" },
        "beckett": { dormName: "Beckett", dormInfo: "", mapImage: "" },
        "benson": { dormName: "Benson", dormInfo: "", mapImage: "" },
        "berger": { dormName: "Berger", dormInfo: "", mapImage: "" },
        "boswell": { dormName: "Boswell", dormInfo: "", mapImage: "" },
        "crown": { dormName: "Crown", dormInfo: "", mapImage: "" },
        "fawcett": { dormName: "Fawcett", dormInfo: "", mapImage: "" },
        "green": { dormName: "Green", dormInfo: "", mapImage: "" },
        "marks": { dormName: "Marks", dormInfo: "", mapImage: "" },
        "phillips": { dormName: "Phillips", dormInfo: "", mapImage: "" },
        "stark": { dormName: "Stark", dormInfo: "", mapImage: "" },
        "valach": { dormName: "Valach", dormInfo: "", mapImage: "" },
        "wohlford": { dormName: "Wohlford", dormInfo: "", mapImage: "" }
    };
    const dormIds = Object.keys(cmcDorms);


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
            <DormNav activeTab={activeTab} setActiveTab={setActiveTab} dormList={cmcDorms} dormIds={dormIds} />
        </>
    );
}