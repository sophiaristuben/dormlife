import React from "react";
import './Header.css';
import { SchoolTab } from "../SchoolTab/SchoolTab";

export const Header = () => {
    return (
        <div className="container">
            <div className="logo">p-dormlife</div>
            <ul className="header">
                <SchoolTab name="Pomona" className="school pomona" />
                <SchoolTab name="Scripps" className="school scripps"/>
                <SchoolTab name="CMC" className="school cmc"/>
                <SchoolTab name="Mudd" className="school mudd"/>
                <SchoolTab name="Pitzer" className="school pitzer"/>
            </ul>
        </div>
    )
};