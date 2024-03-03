import React from "react";
import "./GeorgiaComponent.css"; 

const GeorgiaComponent = () => {
  return (
    <div className="georgia-container">
      <h2 className="georgia-heading">Georgia</h2>
      
      <ul className="georgia-list">
        <li className="georgia-list-item">
          Hello! My name is Georgia, and I'm freshman at Mudd!
        </li>
        <li className="georgia-list-item">
          OG Taiwanese!!! This is my first time living outside of my hometown...&#128543;
        </li>
        <li className="georgia-list-item">
          Hope to know everyone more and learn a lot together!
        </li>
        </ul>
        <p>I don't really know what to put so here are a few of my favorite cat <em> MEMEOWSS </em>!</p>
        <div className="image-container-wrapper">
          <div class="image-chipi"></div>
          <div class="image-scare"></div>
          <div className="image-pop"></div>
          {/* {/* <div className="tree-container" style={{ backgroundImage: "url('dog.jpg')" }}></div> */}
        </div>

    </div>
  );
};

export default GeorgiaComponent;
