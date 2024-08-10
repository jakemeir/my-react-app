import "../App.css";

const Button = ({ svg, clickHandler, isDisabled }) => {
  return (
    <button onClick={clickHandler} disabled={isDisabled}>
      {svg}
    </button>
  );
};

export default Button;
