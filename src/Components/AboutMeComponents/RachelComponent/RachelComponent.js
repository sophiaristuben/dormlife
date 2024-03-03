import React from "react";
import "./RachelComponent.css"; 

const RachelComponent = () => {
  return (
    <div className="rachel-container">
      <h2 className="rachel-heading">Rachel</h2>
      
      <ul className="rachel-list">
        <li className="rachel-list-item">
          Hi everyone! My name is Rachel and I am a senior at Pomona studying Computer Science!
        </li>
        <li className="rachel-list-item">
          I'm originally from the Guam, which is a small island in the Pacific! A US terriroty btw wow
        </li>
        <li className="rachel-list-item">
          Feel free to reach out to me if you have any questions or just want to chat!
        </li>
        </ul>
        <div className="image-container-wrapper">
          <div className="image-radog"></div>
          <div className="image-cookie"></div>
          <div className="image-guam"></div>
          <div className="image-rainbow"></div>
          {/* {/* <div className="tree-container" style={{ backgroundImage: "url('dog.jpg')" }}></div> */}
        </div>

    </div>
  );
};

export default RachelComponent;
