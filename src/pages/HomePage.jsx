import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import video1 from '../assets/Home/video1.mp4';
import '../styles/styles.css';
import foodicon from '../assets/Home/foodicon.svg';
import touristicon from '../assets/Home/touristspot.svg';
import accomodationicon from '../assets/Home/accomodation.svg';
import FnBPage from './FnBPage';
import AccommodationsPage from './AccommodationsPage';
import TouristSpotsPage from './TouristPage';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { useInView } from 'react-intersection-observer';

function HomePage() {
    const { ref: foodRef, inView: foodInView } = useInView({ triggerOnce: true });
    const { ref: accommodationsRef, inView: accommodationsInView } = useInView({ triggerOnce: true });
    const { ref: touristRef, inView: touristInView } = useInView({ triggerOnce: true });

    return (
        <div className="min-h-screen flex flex-col items-center justify-center" id="home">
            <div className="relative w-full h-screen overflow-hidden">
                <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
                    <Fade bottom>
                        <h1 className="text-4xl mt-32 font-extrabold mb-4 text-center White">Welcome to Penang</h1>
                    </Fade>
                    <Fade bottom delay={500}>
                        <p className="text-l mb-12 text-center White">Discover the best places to visit, eat, and stay in Penang.</p>
                    </Fade>
                    <div className="p-7 rounded-3xl mx-4">
                        <Fade bottom delay={1000}>
                            <h2 className="text-2xl font-bold mb-2 mt-24 text-white text-center">Top Categories</h2>
                        </Fade>
                        <div className="flex justify-center gap-8 mt-8">
                            <Slide bottom delay={1500}>
                                <ScrollLink to="food-and-beverages" smooth={true} duration={500}>
                                    <img src={foodicon} alt="f&b" className="w-16 h-16 rounded-3xl icon" />
                                </ScrollLink>
                            </Slide>
                            <Slide bottom delay={2000}>
                                <ScrollLink to="accommodations" smooth={true} duration={500}>
                                    <img src={accomodationicon} alt="accomodationicon" className="w-16 h-16 rounded-full icon" />
                                </ScrollLink>
                            </Slide>
                            <Slide bottom delay={2500}>
                                <ScrollLink to="tourist-spots" smooth={true} duration={500}>
                                    <img src={touristicon} alt="tourist" className="w-16 h-16 rounded-full icon" />
                                </ScrollLink>
                            </Slide>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-yellow-100 to-transparent"></div>
            </div>

            <div className="page-container bg-FBFAF5">
                <section id="food-and-beverages" ref={foodRef}>
                    <Fade bottom when={foodInView}>
                        <FnBPage />
                    </Fade>
                </section>
            </div>
            <div className="page-container bg-FBFAF5">
                <section id="accommodations" ref={accommodationsRef}>
                    <Fade bottom when={accommodationsInView}>
                        <AccommodationsPage />
                    </Fade>
                </section>
            </div>
            <div className="page-container bg-FBFAF5">
                <section id="tourist-spots" ref={touristRef}>
                    <Fade bottom when={touristInView}>
                        <TouristSpotsPage />
                    </Fade>
                </section>
            </div>
        </div>
    );
}

export default HomePage;