import React from "react";
import "./FrankComponent.css"; 

const FrankComponent = () => {
  return (
    <div className="frank-container">
      <h2 className="frank-heading">Frank</h2>
      
      <ul className="frank-list">
        <li className="frank-list-item">
          Hi everyone! My name is Frank and I am a freshman at Pomona studying Computer Science.   
        </li>
        <li className="frank-list-item">
          I'm originally from Poland but I grew up in Chicago!
        </li>
        <li className="frank-list-item">
          I am super excited for this semester's project!
        </li>
        </ul>
        <div className="image-container-wrapper">
          <div className="image-chicago"></div>
        </div>

    </div>
  );
};

export default FrankComponent;
