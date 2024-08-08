import React, { useState } from "react";
import "./App.css";
import Photo from "./components/Photo";
import Button from "./components/Button";
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
