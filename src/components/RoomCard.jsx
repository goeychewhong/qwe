import React, { useState } from 'react';
import StarRating from './StarRating';
import '../styles/RoomCard.css';

const RoomCard = ({ images, title, description, location, priceRange, rating }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const nextImage = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFade(false);
        }, 150);
    };

    const prevImage = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setFade(false);
        }, 150);
    };

    return (
        <div className="room-card shadow-lg rounded-1g overflow-hidden w-[325px] bg-white">
            <div className="relative h-[350px]">
                <img
                    src={images[currentImageIndex]}
                    alt={`Room image ${currentImageIndex + 1}`}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
                />
                <button onClick={prevImage} className="room-card-button left-2 top-1/2 transform -translate-y-1/2">
                    &lt;
                </button>
                <button onClick={nextImage} className="room-card-button right-2 top-1/2 transform -translate-y-1/2">
                    &gt;
                </button>
                <div className="room-card-overlay">
                    <div className="room-card-details text-white p-4">
                        <p className="room-card-description text-base text-justify">{description}</p>
                        <p className="room-card-location text-base text-center"><strong>Location:</strong> {location}</p>
                        <p className="room-card-price text-base text-center"><strong>Price Range:</strong> {priceRange}</p>
                        <div className="room-card-rating text-base text-center">
                            <strong>Rating:</strong> <StarRating rating={rating} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center p-4">
                <h2 className="room-card-title text-xl font-bold mb-2">{title}</h2>
            </div>
        </div>
    );
};

export default RoomCard;