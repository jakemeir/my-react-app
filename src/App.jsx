import React, { useState } from "react";
import "./App.css";
import Photo from "./components/Photo";
import Button from "./components/Button";
import RightArrow from "./components/RightArrow";
import LeftArrow from "./components/LeftArrow";

const App = () => {
  const img = [
    "https://i.ytimg.com/vi/HaYZk16wUug/maxresdefault.jpg",
    "https://www.israelhayom.co.il/wp-content/uploads/2022/04/28/15287981395352_b-1280x960.jpg",
    "https://www.edb.co.il/photos/1211974_person04.full.jpg",
    "https://images1.ynet.co.il/PicServer5/2019/09/22/9500723/11185255_11185066_rumble_490X0.jpg",
    "https://jfc.org.il/media/BAMAI/T26470_TUVIA_TZAFIR_MAIN.jpg",
  ];
  const [check, setCheck] = useState(false);

  const [index, setIndex] = useState(0);

  const carouselHandler = () => {
    setCheck((prevCheck) => !prevCheck);
  };

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
          isDisabled={check && index === 0}
          svg={<LeftArrow />}
        />
        <Photo src={img[index]} index={index} />
        <Button
          clickHandler={nextHandler}
          direction="right"
          isDisabled={check && index === img.length - 1}
          svg={<RightArrow />}
        />
      </div>
      <button className="stupid_carousel_button" onClick={carouselHandler}>
        {check ? "Enable Carousel" : "Disable Carousel"}
      </button>
    </div>
  );
};

export default App;
