import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;
        return (
          <FaStar
            key={index}
            size={20}
            color={currentRate <= rating ? "#FFD700" : "#A9A9A9"} 
          />
        );
      })}
    </div>
  );
};

export default StarRating;
