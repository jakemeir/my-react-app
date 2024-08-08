import React, { useState } from "react";
import "./App.css";
import Photo from "./components/Photo";
import Button from "./components/Button";
import { Link } from "react-router-dom";

const App = ({ infinite }) => {
  const img = [
    "https://i.ytimg.com/vi/HaYZk16wUug/maxresdefault.jpg",
    "https://www.israelhayom.co.il/wp-content/uploads/2022/04/28/15287981395352_b-1280x960.jpg",
    "https://www.edb.co.il/photos/1211974_person04.full.jpg",
    "https://images1.ynet.co.il/PicServer5/2019/09/22/9500723/11185255_11185066_rumble_490X0.jpg",
    "https://jfc.org.il/media/BAMAI/T26470_TUVIA_TZAFIR_MAIN.jpg",
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
      <Photo src={img[index]} />
      <Button
        direction="previous"
        onNext={previousHandler}
        isDisabled={infinite && index === 0}
      />
      <Button
        direction={"next"}
        onNext={nextHandler}
        isDisabled={infinite && index === img.length - 1}
      />
      {infinite && <Link to={"infinite"}>infinite</Link>}
      {infinite || <Link to={"/"}>back</Link>}
    </div>
  );
};

export default App;
