import React from "react";

const Button = ({ direction, onNext, isDisabled }) => {
  return (
    <button onClick={onNext} disabled={isDisabled}>
      {direction}
    </button>
  );
};

export default Button;
