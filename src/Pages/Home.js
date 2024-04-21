import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {

    return (
        <div className="homeContainer">
            <div className="homeHeader">
                <img className="paiLogo" alt="p-ai logo" src="https://images.squarespace-cdn.com/content/v1/5d5aca05ce74150001a5af3e/1580018583262-NKE94RECI46GRULKS152/Screen+Shot+2019-12-05+at+11.18.53+AM.png?format=1500w" />
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