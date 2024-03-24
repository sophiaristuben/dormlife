import React from "react";

export const SchoolTab = ({name, className, setCurrSchool, setActiveTab}) => {

    const handleSchool = (name) => {
        console.log(name.target.innerText)
        setCurrSchool(name.target.innerText);
        setActiveTab("mapbox");
    }
    return (
        <li className={className} onClick={handleSchool}>
            { name }
        </li>

    )
};