import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {

    return (
        <div className="homeContainer">
            <h1>Homepage</h1>
            <nav className="homeHeader">
                <Link className="school pomona" to={"/pomona"} >Pomona </Link>
                <Link className="school scripps" to={"/scripps"}>Scripps </Link>
                <Link className="school cmc" to={"/cmc"}>CMC </Link>
                <Link className="school pitzer" to={"/pitzer"}>Pitzer </Link>
                <Link className="school mudd" to={"/mudd"}>Mudd </Link>
            </nav>
            {/* <Outlet context={[currSchool, setCurrSchool]}/> */}
        </div>
    );
}