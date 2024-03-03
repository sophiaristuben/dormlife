import React from "react";
import "./AdrianComponent.css";

const AdrianComponent = () => {
    return (
        <div className="adrian-container">
            <h2 className="adrian-heading">Adrian</h2>

            <ul className="adrian-list">
                <li className="adrian-list-item">
                    Hello! My name is Adrian and I am a sophomore at Pomona majoring in Computer Science with a minor in Chemistry. 
                </li>
                <li className="adrian-list-item">
                    I'm originally from Portland, Oregon and love engaging in outdoor activities, like hiking, camping, and kiteboarding.
                </li>
                <li className="adrian-list-item">
                    In my spare time I also love listening to music, specifically house, indie pop, and alt rock.
                </li>
                <li className="adrian-list-item">
                    I'm also a member of the Pomona-Pitzer Swim & Dive team.
                </li>
            </ul>

            <div className="image-container-wrapper">
                <div className="image-swim"></div>
                <div className="image-lake"></div>
                <div className="image-paddleboard"></div>
            </div>

        </div>
    );
};


export default AdrianComponent;
