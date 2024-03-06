import React, { useState } from "react";

const Slider = () => {
  const images = [
    "1.jpg",
  "/img/2.jpg",
  "/img/3.jpg",
  "/img/4.jpg",
  "/img/5.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <img src={`./img/${images[currentImage]}`} alt={`Slide ${currentImage + 1}`} />
        <button className="arrow left-arrow" onClick={prevImage}>
          &#9664;
        </button>
        <button className="arrow right-arrow" onClick={nextImage}>
          &#9654;
        </button>
      </div>
      <div className="dotsContainer">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImage ? "active" : ""}`}
            onClick={() => goToImage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
