import React, { useState } from "react";
import { DormNav } from "../../DormNav/DormNav";

export const Pomona = () => {
    const [activeTab, setActiveTab] = useState("mapbox");
    const [activeFloor, setActiveFloor] = useState(1);
    const pomonaDorms = {
        "walker": { dormName: "Walker", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: ["./WalkerFloor1.png", "./Walker2.png"] },
        "blaisdell": { dormName: "Blaisdell", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: ["./BlaisdellFloor1.png"] },
        "clark1": { dormName: "Clark I", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: ["./ClarkI1.png", "./ClarkI2.png"]},
        "clark3": { dormName: "Clark III", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: ["./ClarkIII1.png", "./ClarkIII23.png", "./ClarkIII23.png"]},
        "clark5": { dormName: "Clark V", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: ["./ClarkV1.png", "./ClarkV2.png"]},
        "dialynas": { dormName: "Dialynas", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: ["./Dialynas1.png", "./Dialynas2.png", "./Dialynas3.png"]},
        "gibson": { dormName: "Gibson", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: ["./Gibson1.png"]},
        "harwood": { dormName: "Harwood", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: ["ResHall-FloorPlan-Harwood 1-1.png", "ResHall-FloorPlan-Harwood 2-1.png", "ResHall-FloorPlan-Harwood 3-1.png", "ResHall-FloorPlan-Harwood 0-1.png"]},
        "lyon": { dormName: "Lyon", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: ["./Lyon12.png", "./Lyon12.png"]},
        "mudd": { dormName: "Mudd", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: ["./MuddBlaisdell1.png", "./MuddBlaisdell2.png", "./MuddBlaisdell34.png", "./MuddBlaisdell34.png"]},
        "oldenborg": { dormName: "Oldenborg", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: ["./Oldenborg1.png", "./Oldenborg23.png", "./Oldenborg23.png"]},
        "smiley": { dormName: "Smiley", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: ["./Smiley12.png", "./Smiley12.png"]},
        "sontag": { dormName: "Sontag", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: ["./Sontag1.png", "./Sontag2.png", "./Sontag3.png"]},
        "wig": { dormName: "Wig", dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.", mapImage: ["./Wig1.png", "./Wig2.png"]}
    };


    const dormIds = Object.keys(pomonaDorms);

    const changeFloor = (floor) => {
        setActiveFloor(floor);
    };

    return (
        <>
            <div className="floorNav">
                {activeTab !== "mapbox" && activeTab === "walker" && (
                    <>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "blaisdell" && (
                    <></>
                )}
                {activeTab !== "mapbox" && activeTab === "clark1" && (
                    <>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "clark3" && (
                    <>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    <button className={activeFloor === 3 ? "active" : ""} onClick={() => changeFloor(3)}>Floor 3</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "clark5" && (
                    <>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "dialynas" && (
                    <>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    <button className={activeFloor === 3 ? "active" : ""} onClick={() => changeFloor(3)}>Floor 3</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "gibson" && (
                    <>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "harwood" && (
                    <>
                    <button className={activeFloor === 0 ? "active" : ""} onClick={() => changeFloor(0)}>Floor 0</button>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    <button className={activeFloor === 3 ? "active" : ""} onClick={() => changeFloor(3)}>Floor 3</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "lyon" && (
                    <>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "mudd" && (
                    <>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    <button className={activeFloor === 3 ? "active" : ""} onClick={() => changeFloor(3)}>Floor 3</button>
                    <button className={activeFloor === 4 ? "active" : ""} onClick={() => changeFloor(4)}>Floor 4</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "oldenborg" && (
                    <>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    <button className={activeFloor === 3 ? "active" : ""} onClick={() => changeFloor(3)}>Floor 3</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "smiley" && (
                    <>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "sontag" && (
                    <>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    <button className={activeFloor === 3 ? "active" : ""} onClick={() => changeFloor(3)}>Floor 3</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "wig" && (
                    <>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    </>
                )}
            </div>
            <DormNav activeTab={activeTab} setActiveTab={setActiveTab} dormList={pomonaDorms} dormIds={dormIds} activeFloor={activeFloor}/>
        </>
    );
}