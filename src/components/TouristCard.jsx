import React, { useState, useEffect } from "react";
import "../styles/TouristCard.css";

const TouristCard = ({ image, title, description, link, carouselImages }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (isFlipped) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [isFlipped, carouselImages.length]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleExploreClick = (e) => {
    e.stopPropagation();
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`card-container ${isFlipped ? "flipped" : ""}`}>
      <div className="card card-side bg-base-100 shadow-xl very-big-card front">
        <figure className="very-big-figure" onClick={handleFlip}>
          <img src={image} alt={title} className="object-cover w-full h-full no-border-radius" />
        </figure>
        <div className="card-body flex flex-col justify-between">
          <div>
            <h2 className="card-title">{title}</h2>
            <p className="text-left">{description}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary explore-button" onClick={handleExploreClick}>Explore</button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl very-big-card back">
        <div className="carousel w-full h-full overflow-hidden relative">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              id={`slide${index + 1}`}
              className={`carousel-item absolute w-full h-full transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
            >
              <img src={image} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} onClick={handleFlip} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TouristCard;