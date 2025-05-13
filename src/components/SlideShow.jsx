import "../styles/slideshow.css";
import image from "../img/amigurumi4.png";
import image2 from "../img/amigurumi2.png";
import image3 from "../img/amigurumi3.jpg";
import image4 from "../img/amigurumi5.jpg";
import { useEffect, useState } from "react";

function SlideShow() {
  const images = [image, image2, image3, image4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((img, index) =>
        index === current ? (
          <img key={index} id="slideimage" src={img} alt="slideimage" />
        ) : null
      )}
      <div className="slidebtn-container">
        {images.map((_, index) => (
          <button
            className={index === current ? "btn-selected" : null}
            key={index}
            onClick={() => setCurrent(index)}
            id="slide-btn"
          ></button>
        ))}
      </div>
    </div>
  );
}

export default SlideShow;
