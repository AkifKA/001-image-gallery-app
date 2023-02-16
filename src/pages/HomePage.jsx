import Picture from "./Picture";
import data from "../utils/data";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div>
      <h1>Image Gallary</h1>
      <div className="pictures">
        {data.map(({ photographer, src }) => {
          return <Picture photographer={photographer} src={src} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
