import React, { useState } from "react";
import { DormNav } from "../../DormNav/DormNav";

export const Pomona = () => {
    const [activeTab, setActiveTab] = useState("mapbox");

    const pomonaDorms = {
        "walker": { dormName: "Walker", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: "./WalkerFloor1.png" },
        "blaisdell": { dormName: "Blaisdell", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: "./BlaisdellFloor1.png" },
        "clark1": { dormName: "Clark 1", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: "./TahoeHouse2005.jpg"},
        "clark3": { dormName: "Clark III", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: "./TahoeHouse2005.jpg"},
        "clark5": { dormName: "Clark V", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: "./TahoeHouse2005.jpg"},
        "dialynas": { dormName: "Dialynas", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: "./TahoeHouse2005.jpg"},
        "gibson": { dormName: "Gibson", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: "./TahoeHouse2005.jpg"},
        "harwood": { dormName: "Harwood", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: "./TahoeHouse2005.jpg"},
        "lyon": { dormName: "Lyon", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: "./TahoeHouse2005.jpg"},
        "mudd": { dormName: "Mudd", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: "./TahoeHouse2005.jpg"},
        "oldenborg": { dormName: "Oldenborg", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: "./TahoeHouse2005.jpg"},
        "smiley": { dormName: "Smiley", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: "./TahoeHouse2005.jpg"},
        "sontag": { dormName: "Sontag", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: "./TahoeHouse2005.jpg"},
        "wig": { dormName: "Wig", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: "./TahoeHouse2005.jpg"}
    };

    const dormIds = Object.keys(pomonaDorms);

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
            <DormNav activeTab={activeTab} setActiveTab={setActiveTab} dormList={pomonaDorms} dormIds={dormIds}/>
        </>
    );
}