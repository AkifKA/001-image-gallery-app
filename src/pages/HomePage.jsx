import "../styles/style.css";
import Picture from "./Picture";

const HomePage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="morePicture">
        {data.map((item, key) => (
          <Picture
            photographer={item.photographer}
            src={item.src}
            key={key.id}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
