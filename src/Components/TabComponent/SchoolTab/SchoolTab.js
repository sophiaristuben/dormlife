import React from "react";

export const SchoolTab = ({name, className, setCurrSchool}) => {

    const handleSchool = (name) => {
        console.log(name.target.innerText)
        setCurrSchool(name.target.innerText);
    }
    return (
        <li className={className} onClick={handleSchool}>
            { name }
        </li>

    )
};