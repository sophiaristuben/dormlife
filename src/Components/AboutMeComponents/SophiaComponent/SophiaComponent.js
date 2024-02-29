import React from "react";
import "./SophiaComponent.css"; 

const SophiaComponent = () => {
  return (
    <div className="sophia-container">
      <h2 className="sophia-heading">Sophia</h2>
      
      <ul className="sophia-list">
        <li className="sophia-list-item">
          Hi everyone! My name is Sophia and I am a senior at Pomona studying Computer Science.
        </li>
        <li className="sophia-list-item">
          I'm originally from the Seattle area but I hate the rain and much prefer Claremont weather.
        </li>
        <li className="sophia-list-item">
          Feel free to reach out to me if you have any questions or just want to chat!
        </li>
        </ul>
        <div className="image-container-wrapper">
          <div className="image-dog"></div>
          <div className="image-tree"></div>
          <div className="image-puzzle"></div>
          <div className="image-holly"></div>
          {/* {/* <div className="tree-container" style={{ backgroundImage: "url('dog.jpg')" }}></div> */}
        </div>

    </div>
  );
};

export default SophiaComponent;
