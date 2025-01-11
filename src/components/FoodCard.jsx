import React from 'react';
import '../styles/FoodCard.css';
import StarRating from './StarRating';

const FoodCard = ({ image, title, rating, description }) => {
  return (
    <div className="food-card sm:ml-16 md:ml-32 lg:ml-0 xl:ml-0">
      <div className="food-card-inner">
        <div className="food-card-front">
          <div className="food-card-image relative overflow-hidden rounded-lg shadow-lg w-full h-full">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="food-card-back">
          <div className="food-card-details bg-light rounded-lg shadow-lg w-full h-full p-4">
            <span className="text-xl font-bold text-center block">{title}</span>
            <div className="flex justify-center mt-2">
              <StarRating rating={rating} /> {/* Add star rating */}
            </div>
            <p className="text-lg mt-6 text-gray-800">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;