import React from "react";
import './Header.css';
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <div className="headerContainer">
            <Link to="/">
            <div className="logo">p-dormlife</div>
            </Link>
        </div>
    )
};