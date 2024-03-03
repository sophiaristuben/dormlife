import React from "react";
import "./MaxComponent.css";
import yosemite from './yosemite.JPG';
import copenhagen from './copenhagen.jpeg';
import levi from './levi.JPG';

const MaxComponent = () => {
  return (
    <div className="max-container">
      <h2 className="max-heading">Max</h2>

      <ul className="max-list">
        <li className="max-list-item">
          Hello! My name's Max and I'm a senior at Pomona majoring in CS.
        </li>
        <li className="max-list-item">
          I'm from the San Francisco Bay Area, specifically Piedmont.
        </li>
        <li className="max-list-item">
          I studied abroad in Copenhagen last year.
        </li>
        <li className="max-list-item">
          My cat's name is Levi.
        </li>
      </ul>
      <div className="image-container-wrapper">
        <figure>
          <img src={yosemite} alt="yosemite"></img>
          <figcaption>Me in Yosemite</figcaption>
        </figure>
        <figure>
          <img src={copenhagen} alt="copenhagen"></img>
          <figcaption>Copenhagen</figcaption>
        </figure>
        <figure>
          <img src={levi} alt="levi"></img>
          <figcaption>Levi</figcaption>
        </figure>
      </div>

    </div>
  );
};

export default MaxComponent;
