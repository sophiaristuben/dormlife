import React from "react";
import './Header.css';
import { SchoolTab } from "../TabComponent/SchoolTab/SchoolTab";

export const Header = ({setCurrSchool}) => {
    return (
        <div className="container">
            <div className="logo">p-dormlife</div>
            <ul className="header">
                <SchoolTab name="Pomona" className="school pomona" setCurrSchool={setCurrSchool} />
                <SchoolTab name="Scripps" className="school scripps" setCurrSchool={setCurrSchool}/>
                <SchoolTab name="CMC" className="school cmc" setCurrSchool={setCurrSchool}/>
                <SchoolTab name="Mudd" className="school mudd" setCurrSchool={setCurrSchool}/>
                <SchoolTab name="Pitzer" className="school pitzer" setCurrSchool={setCurrSchool}/>
            </ul>
        </div>
    )
};