import React from "react";
import "./CatherineComponent.css"; 

const CatherineComponent = () => {
  return (
    <div className="catherine-container">
      <h2 className="catherine-heading">Catherine</h2>
      
      <ul className="catherine-list">
        <li className="catherine-list-item">
          Hi everyone! My name is Catherine and I am a sophomore at CMC studying Economics and Computer Science. 
        </li>
        <li className="catherine-list-item">
          I'm originally from the Toronto but I moved to Southern California in elementary school.
        </li>
        </ul>
        <div className="image-container-wrapper">
          <div className="image-dog"></div>
          <div className="image-me"></div>
          <div className="image-sunset"></div>
        </div>

    </div>
  );
};

export default CatherineComponent;

