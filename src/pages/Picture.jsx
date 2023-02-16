import "../styles/style.css";

const Picture = ({ photographer, src }) => {
  return (
    <div>
      <div className="pictures">
        <div className="picture">
          <div className="imageContainer">
            <img src={src.large} alt="" />
          </div>
          <p className="info">{photographer}</p>
        </div>
      </div>
    </div>
  );
};

export default Picture;
