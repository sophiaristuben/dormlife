import React from "react";
import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <>
        <h1>Homepage</h1>
            <nav>
                <Link to={"/maps"}>Maps </Link>
                <Link to={"/maps/pomona"}>Pomona </Link>
                <Link to={"/maps/scripps"}>Scripps </Link>
                <Link to={"/maps/cmc"}>CMC </Link>
                <Link to={"/maps/pitzer"}>Pitzer </Link>
                <Link to={"/maps/pitzer/mudd"}>Mudd </Link>
            </nav>
        </>
    );
}