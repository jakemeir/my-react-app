import React, { useState } from "react";
import "./App.css";
import Photo from "./components/Photo";
import Button from "./components/Button";

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
      <Photo src={img[index]} />
      <Button
        direction="previous"
        onNext={previousHandler}
        isDisabled={check && index === 0}
      />
      <Button
        direction={"next"}
        onNext={nextHandler}
        isDisabled={check && index === img.length - 1}
      />
      <Button direction={"carousel"} onNext={carouselHandler}></Button>
    </div>
  );
};

export default App;
