import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import PaiLogo from "./pai-logo.png";

export const Home = () => {

    return (
        <div className="homeContainer">
            <div className="homeHeader">
                <a href="https://www.p-ai.org/"> 
                    <img className="paiLogo" src={PaiLogo} alt="pai logo" />
                </a>
                <h1>p-dormlife</h1>
            </div>
            <div className="homeBody">
                <nav className="homeNav">
                    <Link className="school pomona" to={"/app/pomona"} >Pomona </Link>
                    <Link className="school scripps" to={"/app/scripps"}>Scripps </Link>
                    <Link className="school cmc" to={"/app/cmc"}>CMC </Link>
                    <Link className="school pitzer" to={"/app/pitzer"}>Pitzer </Link>
                    <Link className="school mudd" to={"/app/mudd"}>Mudd </Link>
                </nav>
                <div className="homePanel">
                    {/* <p>Backend team can put stuff on the home page here!<br/></p> */}
                    <Link className="survey" to={"/app/survey"}>Fill out our Roommate Matching Survey!</Link>
                </div>
            </div>
        </div>
    );
}