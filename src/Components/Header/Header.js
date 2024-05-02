import React from "react";
import './Header.css';
import {Link} from "react-router-dom";
import PaiLogo from "../../Pages/pai-logo.png";


export const Header = () => {
    return (
        <div className="headerContainer">
            <div className="homeHeader">
                <a href="https://www.p-ai.org/"> 
                    <img className="paiLogo" src={PaiLogo} alt="pai logo" />
                </a>
                <Link to="/" className="headerTitle">
                    <h1 >p-dormlife</h1>
                </Link>
                <Link to="add-review">
                    <button>Add Review</button>
                </Link> 
            </div>
        </div>
    );
};