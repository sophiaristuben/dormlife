import React from "react";
import FrameImage from "./Frame.png";

export const DormMap = ({setShowPopup, setClickedArea}) => {
    const handleAreaClick = (areaInfo, event) => {
        event.preventDefault();
        console.log("hello");
        setShowPopup(true);
        setClickedArea(areaInfo);
    }
    return (
        <div>
            <img className="floorplan" src={FrameImage} useMap="#image-map" alt="dorm map"/>
            <map name="image-map">
                <area target="" alt="652" title="652" href="" coords="44,97,114,15" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "652" }, event)}/>
                <area target="" alt="653" title="653" href="" coords="115,13,181,99" shape="rect" />
                <area target="" alt="651" title="651" href="" coords="29,141,113,209" shape="rect" />
                <area target="" alt="647" title="647" href="" coords="115,141,196,209,356,298" shape="0" />
            </map>
        </div>
    );
}