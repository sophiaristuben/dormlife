import React, { useState } from "react";
import { DormNav } from "../../DormNav/DormNav";

export const Mudd = () => {
    const [activeTab, setActiveTab] = useState("mapbox");

    const muddDorms = {
        "atwood": { dormName: "Atwood", dormInfo: "", mapImage: "" },
        "case": { dormName: "Case", dormInfo: "", mapImage: "" },
        "east": { dormName: "East", dormInfo: "", mapImage: "" },
        "drinkward": { dormName: "Drinkward", dormInfo: "", mapImage: "" },
        "linde": { dormName: "Linde", dormInfo: "", mapImage: "" },
        "sontag": { dormName: "Sontag", dormInfo: "", mapImage: "" },
        "north": { dormName: "North", dormInfo: "", mapImage: "" },
        "marks": { dormName: "Marks", dormInfo: "", mapImage: "" },
        "west": { dormName: "West", dormInfo: "", mapImage: "" }
    };
    const dormIds = Object.keys(muddDorms);

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
            <DormNav activeTab={activeTab} setActiveTab={setActiveTab} dormList={muddDorms} dormIds={dormIds} />
        </>
    );
}