import React, { useState } from "react";
import { DormNav } from "../../DormNav/DormNav";

export const Pitzer = () => {
    const [activeTab, setActiveTab] = useState("mapbox");

    const pitzerDorms = {
        "pitzer": { dormName: "Pitzer", dormInfo: "", mapImage: "" },
        "Atherton": { dormName: "Atherton", dormInfo: "", mapImage: "" },
        "sanborn": { dormName: "Sanborn", dormInfo: "", mapImage: "" },
        "skandera": { dormName: "Skandera", dormInfo: "", mapImage: "" },
        "mead": { dormName: "Mead", dormInfo: "", mapImage: "" },
        "west": { dormName: "West", dormInfo: "", mapImage: "" },
        "east": { dormName: "East", dormInfo: "", mapImage: "" }
    };
    const dormIds = Object.keys(pitzerDorms);

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
            <DormNav activeTab={activeTab} setActiveTab={setActiveTab} dormList={pitzerDorms} dormIds={dormIds} />
        </>
    );
}