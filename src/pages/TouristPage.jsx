import React, { useState, useEffect } from 'react';
import image1 from '../assets/Tourist/tourist1.jpg';
import image2 from '../assets/Tourist/tourist2.jpg';
import image3 from '../assets/Tourist/tourist3.jpg';
import image4 from '../assets/Tourist/tourist4.jpg';
import image5 from '../assets/Tourist/tourist5.jpg';
import image6 from '../assets/Tourist/tourist6.jpg';
import image7 from '../assets/Tourist/tourist7.jpg';
import image8 from '../assets/Tourist/tourist8.jpg';
import image9 from '../assets/Tourist/tourist9.jpg';
import image10 from '../assets/Tourist/tourist10.jpg';
import image11 from '../assets/Tourist/tourist11.jpg';
import image12 from '../assets/Tourist/tourist12.jpg';
import image13 from '../assets/Tourist/tourist13.jpg';
import image14 from '../assets/Tourist/tourist14.jpg';
import image15 from '../assets/Tourist/tourist15.jpg';
import image16 from '../assets/Tourist/tourist16.jpg';
import image17 from '../assets/Tourist/tourist17.jpg';
import image18 from '../assets/Tourist/tourist18.jpg';
import image19 from '../assets/Tourist/tourist19.jpg';
import image22 from '../assets/Tourist/tourist22.jpg';
import image23 from '../assets/Tourist/tourist23.jpg';
import image24 from '../assets/Tourist/tourist24.jpg';
import image25 from '../assets/Tourist/tourist25.jpg';
import TouristCard from '../components/TouristCard';
import '../styles/styles.css';

function TouristSpotPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [image1, image2, image3, image4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <>
      <div className="bg-white">
        <h1 className="page-title pt-20">TOP VACATION DESTINATION</h1>
        <div className="carousel w-full h-96 overflow-hidden relative">
          {images.map((image, index) => (
            <div
              key={index}
              id={`slide${index + 1}`}
              className={`carousel-item absolute w-full h-full transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={image} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <h1 className="text-4xl pt-12 text-black">Exploring Scenic Wonders</h1>
        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <TouristCard
            image={image8}
            title="Kek Lok Si Temple"
            description="Built in 1891, Kek Lok Si Temple in Penang, Malaysia, is one of Southeast Asia's largest temple complexes. It features countless Buddha images, intricate carvings, and stunning murals, blending Mahayana Buddhism with traditional Chinese rituals in its architecture and worship practices."
            link="https://kekloksitemple.com/"
            carouselImages={[image5, image6, image7]}
          />
          <TouristCard
            image={image11}
            title="Penang Wall Art"
            description="Georgetown's historical center is known for its street art, with pieces found in its streets and alleyways. Some artworks are officially sanctioned, others promote local shops, and many reflect the city's growing reputation as a street art hub. While the most famous works are central, lesser-known pieces can be found further out, easily explored in a couple of days on foot. For unique finds, visit Balik Pulau, Penang's emerging street art hotspot, just a short bus ride from Georgetown."
            link="https://differentville.com/penang-street-art-penang-wall-art/"
            carouselImages={[image2, image9, image10]}
          />
          <TouristCard
            image={image12}
            title="Batu Ferringhi Beach"
            description="Batu Ferringhi, located 11 km northwest of George Town, is Penang's premier beach destination. Its 4 km coastline is lined with resorts offering water sports like parasailing and stunning views of the Andaman Sea and Mount Jerai. The area is also famous for its vibrant night market, featuring street food and a variety of goods. Once a quiet village, it transformed into a tourist hotspot in the 1970s, though its history traces back to 1592 with the arrival of Sir James Lancaster."
            link="https://www.google.com.my/maps/@5.4728546,100.2445728,2a,75y,126.96h,83.83t/data=!3m7!1e1!3m5!1sy3B0pYEbSE7yu3Y72bqkEw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D6.170181143246026%26panoid%3Dy3B0pYEbSE7yu3Y72bqkEw%26yaw%3D126.96044284316048!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
            carouselImages={[image13, image14, image15, image16, image17]}
          />
          <TouristCard
            image={image18}
            title="George Town"
            description="George Town, the capital of Penang, is Malaysia’s second-largest metro area and a major commercial hub. Founded in 1786 as the first British settlement in Southeast Asia, it became Malaysia’s first city in 1957. Renowned for its cultural heritage, it gained UNESCO World Heritage status in 2008 and is celebrated as Malaysia’s gastronomical capital."
            link="https://www.thecrazytourist.com/25-best-things-to-do-in-george-town-malaysia/"
            carouselImages={[image19, image23, image24, image22, image25]}
          />
        </div>
      </div>
    </>
  );
}

export default TouristSpotPage;