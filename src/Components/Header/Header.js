import React from "react";
import './Header.css';
import {Link} from "react-router-dom";
import ReviewForm from "../Reviews/ReviewForm2";

export const Header = () => {
    return (
        <div className="headerContainer">
            <Link to="/home">
            <div className="logo">p-dormlife</div>
            </Link>
        </div>
    )
};