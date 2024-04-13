import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {

    return (
        <div className="homeContainer">
            <div className="homeHeader">
            <h1>p-dormlife</h1>
            </div>
            <div className="homeBody">
                <nav className="homeNav">
                    <Link className="school pomona" to={"/pomona"} >Pomona </Link>
                    <Link className="school scripps" to={"/scripps"}>Scripps </Link>
                    <Link className="school cmc" to={"/cmc"}>CMC </Link>
                    <Link className="school pitzer" to={"/pitzer"}>Pitzer </Link>
                    <Link className="school mudd" to={"/mudd"}>Mudd </Link>
                </nav>
                <div className="homePanel">
                    <p>Backend team can put stuff on the home page here!</p>
                </div>
            </div>
        </div>
    );
}