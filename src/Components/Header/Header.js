import React from "react";
import './Header.css';
import { SchoolTab } from "../TabComponent/SchoolTab/SchoolTab";

export const Header = ({setCurrSchool, setActiveTab}) => {
    return (
        <div className="container">
            <div className="logo">p-dormlife</div>
            <ul className="header">
                <SchoolTab name="Pomona" className="school pomona" setCurrSchool={setCurrSchool} setActiveTab={setActiveTab}/>
                <SchoolTab name="Scripps" className="school scripps" setCurrSchool={setCurrSchool} setActiveTab={setActiveTab}/>
                <SchoolTab name="CMC" className="school cmc" setCurrSchool={setCurrSchool} setActiveTab={setActiveTab}/>
                <SchoolTab name="Mudd" className="school mudd" setCurrSchool={setCurrSchool} setActiveTab={setActiveTab}/>
                <SchoolTab name="Pitzer" className="school pitzer" setCurrSchool={setCurrSchool} setActiveTab={setActiveTab}/>
            </ul>
        </div>
    )
};