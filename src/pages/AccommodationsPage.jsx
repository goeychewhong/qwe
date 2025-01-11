import React, { useState } from 'react';
import '../styles/styles.css';
//Hotels Images Import
//Eastern And Oriental Hotel
import Eastern1 from '../assets/Accommodations/Hotels/Eastern And Oriental Hotel/Eastern1.webp';
import Eastern2 from '../assets/Accommodations/Hotels/Eastern And Oriental Hotel/Eastern2.webp';
import Eastern3 from '../assets/Accommodations/Hotels/Eastern And Oriental Hotel/Eastern3.webp';
import Eastern4 from '../assets/Accommodations/Hotels/Eastern And Oriental Hotel/Eastern4.webp';
import Eastern5 from '../assets/Accommodations/Hotels/Eastern And Oriental Hotel/Eastern5.jpg';
//G Hotel Gurney
import G1 from '../assets/Accommodations/Hotels/G Hotel Gurney/G1.webp';
import G2 from '../assets/Accommodations/Hotels/G Hotel Gurney/G2.webp';
import G3 from '../assets/Accommodations/Hotels/G Hotel Gurney/G3.webp';
import G4 from '../assets/Accommodations/Hotels/G Hotel Gurney/G4.webp';
import G5 from '../assets/Accommodations/Hotels/G Hotel Gurney/G5.webp';
//Gurney Bay Hotel
import Gur1 from '../assets/Accommodations/Hotels/Gurney Bay Hotel/Gur1.webp';
import Gur2 from '../assets/Accommodations/Hotels/Gurney Bay Hotel/Gur2.jpg';
import Gur3 from '../assets/Accommodations/Hotels/Gurney Bay Hotel/Gur3.jpg';
import Gur4 from '../assets/Accommodations/Hotels/Gurney Bay Hotel/Gur4.jpg';
import Gur5 from '../assets/Accommodations/Hotels/Gurney Bay Hotel/Gur5.jpg';
//Hard Rock Hotel Penang
import Hard1 from '../assets/Accommodations/Hotels/Hard Rock Hotel Penang/Hard1.webp';
import Hard2 from '../assets/Accommodations/Hotels/Hard Rock Hotel Penang/Hard2.webp';
import Hard3 from '../assets/Accommodations/Hotels/Hard Rock Hotel Penang/Hard3.webp';
import Hard4 from '../assets/Accommodations/Hotels/Hard Rock Hotel Penang/Hard4.jpg';
import Hard5 from '../assets/Accommodations/Hotels/Hard Rock Hotel Penang/Hard5.jpg';
//Jazz Hotel Penang
import Jaz1 from '../assets/Accommodations/Hotels/Jazz Hotel Penang/Jaz1.jpg';
import Jaz2 from '../assets/Accommodations/Hotels/Jazz Hotel Penang/Jaz2.webp';
import Jaz3 from '../assets/Accommodations/Hotels/Jazz Hotel Penang/Jaz3.webp';
import Jaz4 from '../assets/Accommodations/Hotels/Jazz Hotel Penang/Jaz4.jpg';
import Jaz5 from '../assets/Accommodations/Hotels/Jazz Hotel Penang/Jaz5.webp';
//Shangri-La Golden Sands, Penang
import Shang1 from '../assets/Accommodations/Hotels/Shangri-La Golden Sands, Penang/Shang1.webp';
import Shang2 from '../assets/Accommodations/Hotels/Shangri-La Golden Sands, Penang/Shang2.webp';
import Shang3 from '../assets/Accommodations/Hotels/Shangri-La Golden Sands, Penang/Shang3.webp';
import Shang4 from '../assets/Accommodations/Hotels/Shangri-La Golden Sands, Penang/Shang4.jpg';
import Shang5 from '../assets/Accommodations/Hotels/Shangri-La Golden Sands, Penang/Shang5.jpg';

//Resorts Images Import
//Aayu Stewart Resort
import Aayu1 from '../assets/Accommodations/Resorts/Aayu Stewart Resort/Ayu1.jpg';
import Aayu2 from '../assets/Accommodations/Resorts/Aayu Stewart Resort/Ayu2.jpg';
import Aayu3 from '../assets/Accommodations/Resorts/Aayu Stewart Resort/Ayu3.jpg';
import Aayu4 from '../assets/Accommodations/Resorts/Aayu Stewart Resort/Ayu4.jpg';
import Aayu5 from '../assets/Accommodations/Resorts/Aayu Stewart Resort/Ayu5.jpg';
// Bayview Beach Resort
import Bayview1 from '../assets/Accommodations/Resorts/Bayview Beach Resort/Bayview1.Webp';
import Bayview2 from '../assets/Accommodations/Resorts/Bayview Beach Resort/Bayview2.Webp';
import Bayview3 from '../assets/Accommodations/Resorts/Bayview Beach Resort/Bayview3.Webp';
import Bayview4 from '../assets/Accommodations/Resorts/Bayview Beach Resort/Bayview4.webp';
import Bayview5 from '../assets/Accommodations/Resorts/Bayview Beach Resort/Bayview5.jpg';
//DoubleTree Resort by Hilton Hotel Penang
import Dou1 from '../assets/Accommodations/Resorts/DoubleTree Resort by Hilton Penang/Dou1.webp';
import Dou2 from '../assets/Accommodations/Resorts/DoubleTree Resort by Hilton Penang/Dou2.webp';
import Dou3 from '../assets/Accommodations/Resorts/DoubleTree Resort by Hilton Penang/Dou3.webp';
import Dou4 from '../assets/Accommodations/Resorts/DoubleTree Resort by Hilton Penang/Dou4.webp';
import Dou5 from '../assets/Accommodations/Resorts/DoubleTree Resort by Hilton Penang/Dou5.jpg';
//J Beach Suites At Paradise Resort
import JBe1 from '../assets/Accommodations/Resorts/J Beach Suites At Paradise Rainbow Beach Resort/JBe1.jpg';
import JBe2 from '../assets/Accommodations/Resorts/J Beach Suites At Paradise Rainbow Beach Resort/JBe2.jpg';
import JBe3 from '../assets/Accommodations/Resorts/J Beach Suites At Paradise Rainbow Beach Resort/JBe3.jpg';
import JBe4 from '../assets/Accommodations/Resorts/J Beach Suites At Paradise Rainbow Beach Resort/JBe4.jpg';
import JBe5 from '../assets/Accommodations/Resorts/J Beach Suites At Paradise Rainbow Beach Resort/JBe5.jpg';
//PARKROYAL Penang Resort
import Park1 from '../assets/Accommodations/Resorts/Parkroyal Penang Resort/Park1.webp';
import Park2 from '../assets/Accommodations/Resorts/Parkroyal Penang Resort/Park2.webp';
import Park3 from '../assets/Accommodations/Resorts/Parkroyal Penang Resort/Park3.jpg';
import Park4 from '../assets/Accommodations/Resorts/Parkroyal Penang Resort/Park4.webp';

//Homestays Images Import
//Surprised Homestay Butterworth
import Sur1 from '../assets/Accommodations/Homestays/Surprised Homestay Butterworth/Sur1.webp';
import Sur2 from '../assets/Accommodations/Homestays/Surprised Homestay Butterworth/Sur2.jpg';
import Sur3 from '../assets/Accommodations/Homestays/Surprised Homestay Butterworth/Sur3.jpg';
import Sur4 from '../assets/Accommodations/Homestays/Surprised Homestay Butterworth/Sur4.jpg';
import Sur5 from '../assets/Accommodations/Homestays/Surprised Homestay Butterworth/Sur5.webp';
//Three Homestay
import TH1 from '../assets/Accommodations/Homestays/Three Homestay/TH1.jpg';
import TH2 from '../assets/Accommodations/Homestays/Three Homestay/TH2.jpg';
import TH3 from '../assets/Accommodations/Homestays/Three Homestay/TH3.jpg';
import TH4 from '../assets/Accommodations/Homestays/Three Homestay/TH4.jpg';
import TH5 from '../assets/Accommodations/Homestays/Three Homestay/TH5.jpg';

//Value Inn Homestay
import Val1 from '../assets/Accommodations/Homestays/Value Inn Homestay/Val1.webp';
import Val2 from '../assets/Accommodations/Homestays/Value Inn Homestay/Val2.jpg';
import Val3 from '../assets/Accommodations/Homestays/Value Inn Homestay/Val3.jpg';
import Val4 from '../assets/Accommodations/Homestays/Value Inn Homestay/Val4.jpg';
import Val5 from '../assets/Accommodations/Homestays/Value Inn Homestay/Val5.webp';

//Apartments Images Import
//Penang Straits Garden Condominium Georgetown
import Pen1 from '../assets/Accommodations/Apartments/Penang Straits Garden Condominium Georgetown/SG1.jpg';
import Pen2 from '../assets/Accommodations/Apartments/Penang Straits Garden Condominium Georgetown/SG2.jpg';
import Pen3 from '../assets/Accommodations/Apartments/Penang Straits Garden Condominium Georgetown/SG3.jpg';
import Pen4 from '../assets/Accommodations/Apartments/Penang Straits Garden Condominium Georgetown/SG4.jpg';
import Pen5 from '../assets/Accommodations/Apartments/Penang Straits Garden Condominium Georgetown/SG5.jpg';

//THE VIEW
import THE1 from '../assets/Accommodations/Apartments/THE VIEW/TV1.webp';
import THE2 from '../assets/Accommodations/Apartments/THE VIEW/TV2.webp';
import THE3 from '../assets/Accommodations/Apartments/THE VIEW/TV3.webp';
import THE4 from '../assets/Accommodations/Apartments/THE VIEW/TV4.webp';
import THE5 from '../assets/Accommodations/Apartments/THE VIEW/TV5.webp';

//Woodsburry Butterworth Penang
import Woo1 from '../assets/Accommodations/Apartments/Woodsburry Butterworth Penang/Wo1.jpg';
import Woo2 from '../assets/Accommodations/Apartments/Woodsburry Butterworth Penang/Wo2.jpg';
import Woo3 from '../assets/Accommodations/Apartments/Woodsburry Butterworth Penang/Wo3.jpg';
import Woo4 from '../assets/Accommodations/Apartments/Woodsburry Butterworth Penang/Wo4.jpg';
import Woo5 from '../assets/Accommodations/Apartments/Woodsburry Butterworth Penang/Wo5.jpg';

import RoomCard from '../components/RoomCard';

const Accommodations = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [ratingRange, setRatingRange] = useState({ min: '', max: '' });
    const [showPriceRange, setShowPriceRange] = useState(false);
    const [showRatingRange, setShowRatingRange] = useState(false);
    const categories = ['All', 'Apartments', 'Hotels', 'Homestay', 'Resorts'];

    const cards = [

        {
            category: 'Hotels',
            title: 'Eastern And Oriental Hotel',
            description: 'A spacious hotel room with modern decor and comfortable furnishings.',
            images: [Eastern1, Eastern2, Eastern3, Eastern4, Eastern5],
            location: 'George Town',
            priceRange: 'RM1000 - RM1500',
            rating: 5,
        },
        {
            category: 'Hotels',
            title: 'G Hotel Gurney',
            description: 'A cozy hotel room with all the basic amenities for a pleasant stay.',
            images: [G1, G2, G3, G4, G5],
            location: 'George Town',
            priceRange: 'RM500 - RM700',
            rating: 3,
        },
        {
            category: 'Hotels',
            title: 'Jazz Hotel Penang',
            description: 'A modern hotel room with stunning views and excellent facilities.',
            images: [Jaz1, Jaz2, Jaz3, Jaz4, Jaz5],
            location: 'George Town',
            priceRange: 'RM200 - RM500',
            rating: 4,
        },
        {
            category: 'Hotels',
            title: 'Gurney Bay Hotel',
            description: 'An elegant hotel room with premium amenities and stunning views.',
            images: [Gur1, Gur2, Gur3, Gur4, Gur5],
            location: 'Gurney Drive',
            priceRange: 'RM300 - RM600',
            rating: 5,
        },
        {
            category: 'Hotels',
            title: 'Hard Rock Hotel Penang',
            description: 'An affordable hotel room with essential amenities for a comfortable stay.',
            images: [Hard1, Hard2, Hard3, Hard4, Hard5],
            location: 'Batu Ferringhi',
            priceRange: 'RM600 - RM800',
            rating: 3,
        },
        {
            category: 'Resorts',
            title: 'PARKROYAL Penang Resort',
            description: 'A spacious hotel room with multiple rooms, perfect for families.',
            images: [Park1, Park2, Park3, Park4],
            location: 'Batu Ferringhi',
            priceRange: 'RM550 - RM1000',
            rating: 4,
        },
        {
            category: 'Resorts',
            title: 'Shangri-La Golden Resort',
            description: 'A luxurious resort with the amenities you need for a comfortable stay.',
            images: [Shang1, Shang2, Shang3, Shang4, Shang5],
            location: 'Batu Ferringhi',
            priceRange: 'RM550 - RM800',
            rating: 4,
        },
        {
            category: 'Homestay',
            title: 'Surprised Homestay',
            description: 'A spacious Homestay with modern decor and comfortable furnishings.',
            images: [Sur1, Sur2, Sur3, Sur4, Sur5],
            location: 'Butterworth',
            priceRange: 'RM80 - RM150',
            rating: 5,
        },
        {
            category: 'Homestay',
            title: 'Value Inn Homestay',
            description: 'A cozy Homestay with all the basic amenities for a pleasant stay.',
            images: [Val1, Val2, Val3, Val4, Val5],
            location: 'Butterworth',
            priceRange: 'RM100 - RM150',
            rating: 3,
        },
        {
            category: 'Homestay',
            title: 'Three Homestay',
            description: 'A modern Homestay with stunning views and excellent facilities.',
            images: [TH1, TH2, TH3, TH4, TH5],
            location: 'Gelugor',
            priceRange: 'RM100 - RM130',
            rating: 4,
        },
        {
            category: 'Resorts',
            title: 'Bayview Beach Resort',
            description: 'A luxurious apartment with the amenities you need for a comfortable stay.',
            images: [Bayview1, Bayview2, Bayview3, Bayview4, Bayview5],
            location: 'Batu Ferringhi',
            priceRange: 'RM300 - RM500',
            rating: 4,
        },
        {
            category: 'Resorts',
            title: 'Aayu Stewart Resort',
            description: 'A beautiful resort with stunning views and luxurious amenities.',
            images: [Aayu1, Aayu2, Aayu3, Aayu4, Aayu5],
            location: 'George Town',
            priceRange: 'RM160 - RM200',
            rating: 4,
        },
        {
            category: 'Resorts',
            title: 'DoubleTree Resort',
            description: 'A modern resort with excellent facilities and services.',
            images: [Dou1, Dou2, Dou3, Dou4, Dou5],
            location: 'Batu Ferringhi',
            priceRange: 'RM350 - RM500',
            rating: 5,
        },
        {
            category: 'Resorts',
            title: 'J Beach Suites Resort',
            description: 'A cozy resort with all the amenities for a relaxing stay.',
            images: [JBe1, JBe2, JBe3, JBe4, JBe5],
            location: 'Tanjung Bungah',
            priceRange: 'RM90 - RM120',
            rating: 4,
        },
        {
            category: 'Apartments',
            title: 'Straits Garden Apartment ',
            description: 'A luxurious apartment with the amenities you need for a comfortable stay.',
            images: [Pen1, Pen2, Pen3, Pen4, Pen5],
            location: 'George Town',
            priceRange: 'RM60 - RM100',
            rating: 4,
        },
        {
            category: 'Apartments',
            title: 'The View Apartment',
            description: 'A modern apartment with stunning views and excellent facilities.',
            images: [THE1, THE2, THE3, THE4, THE5],
            location: 'Batu Ferringhi',
            priceRange: 'RM250 - RM500',
            rating: 5,
        },
        {
            category: 'Apartments',
            title: 'Woodsburry Apartment',
            description: 'A cozy apartment with all the basic amenities for a pleasant stay.',
            images: [Woo1, Woo2, Woo3, Woo4, Woo5],
            location: 'Butterworth',
            priceRange: 'RM350 - RM700',
            rating: 3,
        },
        
    ];

    const filterCards = (cards) => {
        return cards.filter(card => {
            const cardPriceRange = card.priceRange.match(/\d+/g).map(Number);
            const cardMinPrice = cardPriceRange[0];
            const cardMaxPrice = cardPriceRange[1];

            const minPrice = priceRange.min ? parseInt(priceRange.min) : 0;
            const maxPrice = priceRange.max ? parseInt(priceRange.max) : Infinity;

            const minRating = ratingRange.min ? parseInt(ratingRange.min) : 0;
            const maxRating = ratingRange.max ? parseInt(ratingRange.max) : 5;

            return (selectedCategory === 'All' || card.category === selectedCategory) &&
                (cardMinPrice >= minPrice && cardMaxPrice <= maxPrice) &&
                (card.rating >= minRating && card.rating <= maxRating);
        });
    };

    const hotelCards = filterCards(cards.filter(card => card.title.includes('Hotel') || card.title.includes('Luxury')));
    const resortCards = filterCards(cards.filter(card => card.title.includes('Resort')));
    const homestayCards = filterCards(cards.filter(card => card.title.includes('Homestay')));
    const apartmentCards = filterCards(cards.filter(card => card.title.includes('Apartment')));

return (
    <>
        <div className="bg-white p-6 pt-24">
            <h1 className="text-left text-4xl font-bold mb-4 pl-6 md:pl-24 text-black">Accommodations in Penang</h1>
            <p className="text-justify text-gray-800 mb-6 pl-6 md:pl-24 text-xl md:text-2xl">Discover the best resorts and hotels around Penang for a perfect stay.</p>
            <div className="flex flex-col md:flex-row justify-end mb-4">
                <div className="flex flex-wrap items-center gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`p-2 rounded text-lg md:text-xl transition-colors duration-700 ${selectedCategory === category ? 'text-blue-950' : 'text-yellow-600'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-2 md:mt-0">
                    <button
                        onClick={() => setShowPriceRange(!showPriceRange)}
                        className="p-2 border border-gray-300 rounded bg-blue-950 text-white"
                    >
                        Price Range
                    </button>
                    <div className={`transition-opacity duration-500 ${showPriceRange ? 'opacity-100' : 'opacity-0'}`}>
                        {showPriceRange && (
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    placeholder="Min Price"
                                    value={priceRange.min}
                                    onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                                    className="p-2 border border-gray-300 rounded"
                                />
                                <input
                                    type="number"
                                    placeholder="Max Price"
                                    value={priceRange.max}
                                    onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                                    className="p-2 border border-gray-300 rounded"
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-2 md:mt-0">
                    <button
                        onClick={() => setShowRatingRange(!showRatingRange)}
                        className="p-2 border border-gray-300 rounded bg-blue-950 text-white"
                    >
                        Rating
                    </button>
                    <div className={`transition-opacity duration-500 ${showRatingRange ? 'opacity-100' : 'opacity-0'}`}>
                        {showRatingRange && (
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    placeholder="Min Rating"
                                    value={ratingRange.min}
                                    onChange={(e) => setRatingRange({ ...ratingRange, min: e.target.value })}
                                    className="p-2 border border-gray-300 rounded"
                                />
                                <input
                                    type="number"
                                    placeholder="Max Rating"
                                    value={ratingRange.max}
                                    onChange={(e) => setRatingRange({ ...ratingRange, max: e.target.value })}
                                    className="p-2 border border-gray-300 rounded"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {selectedCategory === 'All' || selectedCategory === 'Hotels' ? (
                <>
                    <div className="flex flex-col items-start pl-6 md:pl-28">
                        <div className="text-left text-xl text-gray-500">Urban</div>
                        <div className="text-left text-4xl md:text-6xl text-blue-950">Hotels</div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 px-6 md:px-24 py-4">
                        {hotelCards.map((card, index) => (
                            <RoomCard
                                key={index}
                                images={card.images}
                                title={card.title}
                                description={card.description}
                                location={card.location}
                                priceRange={card.priceRange}
                                rating={card.rating}
                            />
                        ))}
                    </div>
                </>
            ) : null}
            {selectedCategory === 'All' || selectedCategory === 'Resorts' ? (
                <>
                    <div className="flex flex-col items-start mt-12 pl-6 md:pl-28">
                        <div className="text-left text-xl text-gray-500">Charming</div>
                        <div className="text-left text-4xl md:text-6xl text-blue-950">Resorts</div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 px-6 md:px-24 py-4">
                        {resortCards.map((card, index) => (
                            <RoomCard
                                key={index}
                                images={card.images}
                                title={card.title}
                                description={card.description}
                                location={card.location}
                                priceRange={card.priceRange}
                                rating={card.rating}
                            />
                        ))}
                    </div>
                </>
            ) : null}
            {selectedCategory === 'All' || selectedCategory === 'Homestay' ? (
                <>
                    <div className="flex flex-col items-start mt-12 pl-6 md:pl-28">
                        <div className="text-left text-xl text-gray-500">Cozy</div>
                        <div className="text-left text-4xl md:text-6xl text-blue-950">Homestays</div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 px-6 md:px-24 py-4">
                        {homestayCards.map((card, index) => (
                            <RoomCard
                                key={index}
                                images={card.images}
                                title={card.title}
                                description={card.description}
                                location={card.location}
                                priceRange={card.priceRange}
                                rating={card.rating}
                            />
                        ))}
                    </div>
                </>
            ) : null}
            {selectedCategory === 'All' || selectedCategory === 'Apartments' ? (
                <>
                    <div className="flex flex-col items-start mt-12 pl-6 md:pl-28">
                        <div className="text-left text-xl text-gray-500">Homey</div>
                        <div className="text-left text-4xl md:text-6xl text-blue-950">Apartments</div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 px-6 md:px-24 py-4">
                        {apartmentCards.map((card, index) => (
                            <RoomCard
                                key={index}
                                images={card.images}
                                title={card.title}
                                description={card.description}
                                location={card.location}
                                priceRange={card.priceRange}
                                rating={card.rating}
                            />
                        ))}
                    </div>
                </>
            ) : null}
        </div>
    </>
);

}

export default Accommodations;