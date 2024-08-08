import React, { useState } from "react";
import "./App.css";
import Photo from "./components/Photo";
import Button from "./components/Button";
import RightArrow from "./components/RightArrow";
import LeftArrow from "./components/LeftArrow";
import { Link } from "react-router-dom";

const App = ({ infinite }) => {
  const img = [
    "https://images.unsplash.com/photo-1662948391946-ab57966b3b8f",
    "https://images.unsplash.com/photo-1723007967308-19cae2bc7e88",
    "https://images.unsplash.com/photo-1470214304380-aadaedcfff84",
    "https://images.unsplash.com/photo-1721819506270-af50411fc152",
    "https://images.unsplash.com/photo-1722714619690-fa9fe88a90b5",
  ];

  const [index, setIndex] = useState(0);

  const nextHandler = () => {
    setIndex((i) => (i + 1) % img.length);
  };

  const previousHandler = () => {
    setIndex((i) => (i - 1 + img.length) % img.length);
  };
  return (
    <div className="flexBox">
      <div className="button_container">
        <Button
          clickHandler={previousHandler}
          direction="left"
          isDisabled={infinite && index === 0}
          svg={<LeftArrow />}
        />
        <Photo src={img[index]} index={index} />
        <Button
          clickHandler={nextHandler}
          direction="right"
          isDisabled={infinite && index === img.length - 1}
          svg={<RightArrow />}
        />
      </div>
      <button className="stupid_carousel_button" onClick={carouselHandler}>
        {check ? "Enable Carousel" : "Disable Carousel"}
      </button>

      {infinite && <Link to={"infinite"}>infinite</Link>}
      {infinite || <Link to={"/"}>back</Link>}
    </div>
  );
};

export default App;
