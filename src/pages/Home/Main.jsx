import React, { useState, useEffect } from 'react';
import '../Home/Main.css';

const images = [
    'src/assets/img/Catalogo1.png',
    'src/assets/img/Catalogo2.png',
    'src/assets/img/Catalogo3.png',
    'src/assets/img/Catalogo4.png',
    'src/assets/img/Catalogo5.png',
];

function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button className="carousel-button left" onClick={goToPrevious}>
          &#10094;
        </button>
        <img src={images[currentIndex]} alt="Catalog item" className="carousel-image" />
        <button className="carousel-button right" onClick={goToNext}>
          &#10095;
        </button>
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Main;