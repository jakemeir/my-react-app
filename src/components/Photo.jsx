import React from "react";
import "./Photo.css";

const Photo = ({ src }) => {
  return (
    <div className="imgDiv">
      <img src={src} alt="" />
    </div>
  );
};

export default Photo;
