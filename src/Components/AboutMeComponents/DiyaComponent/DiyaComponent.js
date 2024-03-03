import React from "react";
import "./DiyaComponent.css"; 

const DiyaComponentComponent = () => {
  return (
    <div className="diya-container">
      <h2 className="diya-heading">Diya</h2>
      
      <ul className="diya-list">
        <li className="diya-list-item">
          Hi everyone! My name is Diya and I am a soph at Harvey Mudd studying Computer Science.
        </li>
        <li className="diya-list-item">
          I'm originally from the Hyderabad in India and I love the california weather.
        </li>
        <li className="diya-list-item">
          Feel free to reach out to me if you have any questions or just want to chat!
        </li>
        </ul>
        <div className="image-container-wrapper">
          <div className="image-food"></div>
          <div className="image-tree"></div>
          <div className="image-wedding"></div>
          <div className="image-concert"></div>
          {/* {/* <div className="tree-container" style={{ backgroundImage: "url('dog.jpg')" }}></div> */}
        </div>

    </div>
  );
};

export default DiyaComponent;
