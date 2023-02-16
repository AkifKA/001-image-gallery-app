import "../styles/Picture.css";
const Picture = ({ photographer, src }) => {
  return (
    <div>
      <div className="picture">
        <div className="imageContainer">
          <img src={src.large} alt="" />
        </div>
        <div className="info">
          <p>{photographer}</p>
        </div>
      </div>
    </div>
  );
};

export default Picture;
