import "../App.css";

const Photo = ({ src, index }) => {
  return (
    <div className="imgDiv">
      <img src={src} alt={`picture_${index}`} />
    </div>
  );
};

export default Photo;
