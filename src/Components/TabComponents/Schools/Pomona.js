import React, { useState } from "react";
import { DormNav } from "../../DormNav/DormNav";

export const Pomona = () => {
    const [activeTab, setActiveTab] = useState("mapbox");

    const pomonaDorms = [
        { title: "Walker", id: "walker" },
        { title: "Blaisdell", id: "blaisdell" },
        { title: "Clark 1", id: "clark1" },
        { title: "Clark III", id: "clark3" },
        { title: "Clark V", id: "clark5" },
        { title: "Dialynas", id: "dialynas" },
        { title: "Gibson", id: "gibson" },
        { title: "Harwood", id: "harwood" },
        { title: "Lyon", id: "lyon" },
        { title: "Mudd", id: "mudd" },
        { title: "Oldenborg", id: "oldenborg" },
        { title: "Smiley", id: "smiley" },
        { title: "Sontag", id: "sontag" },
        { title: "Wig", id: "wig" }
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
            <DormNav activeTab={activeTab} setActiveTab={setActiveTab} dormList={pomonaDorms} />
        </>
    );
}