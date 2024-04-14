import React, { useState } from "react";
import { DormNav } from "../../DormNav/DormNav";

export const Scripps = () => {
    const [activeTab, setActiveTab] = useState("mapbox");

      const scrippsDorms = {
        "240": { dormName: "240", dormInfo: "", mapImage: "" },
        "709": { dormName: "709", dormInfo: "", mapImage: "" },
        "1060": { dormName: "1060", dormInfo: "", mapImage: "" },
        "browning": { dormName: "Browning", dormInfo: "", mapImage: "" },
        "clark": { dormName: "Clark", dormInfo: "", mapImage: "" },
        "dorsey": { dormName: "Dorsey", dormInfo: "", mapImage: "" },
        "frankel": { dormName: "Frankel", dormInfo: "", mapImage: "" },
        "gjw": { dormName: "GJW", dormInfo: "", mapImage: "" },
        "kimberly": { dormName: "Kimberly", dormInfo: "", mapImage: "" },
        "revelle": { dormName: "Revelle", dormInfo: "", mapImage: "" },
        "routt": { dormName: "Routt", dormInfo: "", mapImage: "" },
        "schow": { dormName: "Schow", dormInfo: "", mapImage: "" },
        "toll": { dormName: "Toll", dormInfo: "", mapImage: "" }
    };
    const dormIds = Object.keys(scrippsDorms);


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
            <DormNav activeTab={activeTab} setActiveTab={setActiveTab} dormList={scrippsDorms} dormIds={dormIds} />
        </>
    );
}