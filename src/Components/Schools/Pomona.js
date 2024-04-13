import React, { useState } from "react";
import { DormNav } from "../DormNav/DormNav";

export const Pomona = () => {
    const [activeTab, setActiveTab] = useState("mapbox");
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
            <DormNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </>
    );
}