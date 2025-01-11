import React from "react";
import "../styles/styles.css";
import "../styles/foodcard.css"; // Import the FoodCard CSS
import { useInView } from 'react-intersection-observer';
import bannerVideo from "../assets/Fnb/banner.mp4"; // Import the banner video
import FoodCard from "../components/FoodCard";
import foodImage1 from "../assets/Fnb/food1.jpg";
import foodImage2 from "../assets/Fnb/food2.jpg";
import foodImage3 from "../assets/Fnb/food3.jpg";
import foodImage4 from "../assets/Fnb/food4.jpg";
import foodImage5 from "../assets/Fnb/food5.jpg";
import foodImage6 from "../assets/Fnb/food6.jpg";
import drinkImage3 from "../assets/Fnb/drink3.jpg";
import drinkImage4 from "../assets/Fnb/drink4.jpg";
import drinkImage5 from "../assets/Fnb/drink5.jpg";
import drinkImage6 from "../assets/Fnb/drink6.jpg";
import dessertImage1 from "../assets/Fnb/dessert1.jpg";
import dessertImage2 from "../assets/Fnb/dessert2.jpg";
import dessertImage3 from "../assets/Fnb/dessert3.jpg";
import dessertImage4 from "../assets/Fnb/dessert4.jpg";
import dessertImage5 from "../assets/Fnb/dessert5.jpg";
import dessertImage6 from "../assets/Fnb/dessert6.jpg";
import hawkerImage1 from "../assets/Fnb/hawker1.jpg";
import hawkerImage2 from "../assets/Fnb/hawker2.jpg";
import hawkerImage3 from "../assets/Fnb/hawker3.jpg";

const foodData = [
  {
    image: foodImage1,
    title: "Curry Noodle",
    rating: 4,
    description:
      "Penang curry noodles are a spicy, coconut-based noodle soup topped with prawns, cockles, tofu puffs, and sambal, offering a rich and flavorful taste.",
  },
  {
    image: foodImage2,
    title: "Char Kuey Teow",
    rating: 5,
    description:
      "Char Kuey Teow is a smoky, stir-fried flat rice noodle dish from Penang, cooked with prawns, cockles, egg, bean sprouts, and Chinese chives in a savory soy sauce.",
  },
  {
    image: foodImage3,
    title: "Nasi Kandar",
    rating: 4,
    description:
      "Steamed rice served with a variety of flavorful curries, meats, and vegetables. A signature Malaysian-Indian fusion meal.",
  },
  {
    image: foodImage4,
    title: "Hokkien Mee",
    rating: 5,
    description:
      "A prawn noodle soup with a rich broth made from prawns and pork ribs, served with egg noodles, seafood, and sambal.",
  },
  {
    image: foodImage5,
    title: "Oyster Omelette",
    rating: 4,
    description:
      "Also known as Orh Jian, it is a crispy and savory omelet cooked with plump oysters, eggs, and starch for a chewy texture.",
  },
  {
    image: foodImage6,
    title: "Asam Laksa",
    rating: 5,
    description:
      "A tangy and spicy noodle soup, it features thick rice noodles in a flavorful tamarind-based broth. The bold, sour, and slightly spicy taste makes it a beloved dish in Penang.",
  },
];

const dessertData = [
  {
    image: dessertImage1,
    title: "Cendol",
    rating: 4,
    description:
      "Cendol is a refreshing Malaysian dessert drink made of shaved ice, pandan-flavored green jelly, coconut milk, and gula melaka.",
  },
  {
    image: dessertImage2,
    title: "Ais Kacang",
    rating: 5,
    description:
      "A colorful mix of shaved ice, jelly, red beans, sweet corn, and syrup, often topped with ice cream or peanuts.",
  },
  {
    image: dessertImage3,
    title: "Bubur Cha Cha",
    rating: 4,
    description:
      "A popular Malaysian dessert made with coconut milk, sweet potato, yam, and sago pearls. It's a warm, comforting treat with a mix of textures and natural sweetness.",
  },
  {
    image: dessertImage4,
    title: "Tong Sui",
    rating: 5,
    description:
      "A traditional Chinese dessert often served warm or chilled. It consists of a variety of sweet ingredients like black sesame, red beans, lotus seeds, or mung beans, flavored with rock sugar.",
  },
  {
    image: dessertImage5,
    title: "Tau Hua",
    rating: 4,
    description:
      "A silky smooth tofu pudding served with sweet syrup, often flavored with gula melaka or simple sugar syrup. This dessert is popular in Penang and can be served warm or cold.",
  },
  {
    image: dessertImage6,
    title: "Rojak",
    rating: 5,
    description:
      "A sweet and tangy fruit and vegetable salad with a sticky shrimp paste dressing, topped with crushed peanuts.",
  },
];

const drinkData = [
  {
    image: drinkImage3,
    title: "Penang Black Coffee",
    rating: 4,
    description:
      "A strong and aromatic local coffee brewed using traditional methods. It is typically served black, with a rich, bold flavor and a smooth finish.",
  },
  {
    image: drinkImage4,
    title: "Penang White Coffee",
    rating: 5,
    description:
      "A smooth and creamy coffee made from beans roasted at a lower temperature, giving it a milder and less bitter taste compared to traditional black coffee typically served with condensed milk.",
  },
  {
    image: drinkImage5,
    title: "Sugar Cane Juice",
    rating: 4,
    description:
      "A refreshing, naturally sweet drink made by extracting juice from fresh sugar cane stalks. Often served chilled with a splash of lime or lemon.",
  },
  {
    image: drinkImage6,
    title: "Coconut Shake",
    rating: 5,
    description:
      "Blended coconut water, flesh, and ice, served with a scoop of ice cream for a tropical treat.",
  },
];

function scrollLeft(ref) {
  ref.current.scrollBy({ left: -1100, behavior: "smooth" });
}

function scrollRight(ref) {
  ref.current.scrollBy({ left: 1100, behavior: "smooth" });
}

function FnBPage() {
  const flowpaneRef1 = React.useRef(null);
  const flowpaneRef2 = React.useRef(null);
  const flowpaneRef3 = React.useRef(null);

  return (
    <div className="min-h-screen bg-FBFAF5 flex flex-col items-center justify-center p-6">
      <div className="w-full bg-FBF4E2 shadow-2xl rounded-lg p-8">
        <h1 className="text-4xl font-extrabold mb-6 text-left text-gray-900">
          Food and Beverages
        </h1>
        <p className="text-2xl text-gray-700 mb-8 text-justify font-mountainsChristmas">
          Indulge in the diverse and delicious food scene in Penang. From street
          food to fine dining, there's something for everyone. Penang is a food
          lover’s paradise, offering a rich blend of flavors from its diverse
          cultures. The island’s culinary scene is a vibrant mix of unique
          dishes that reflect its Malay, Chinese, and Indian influences, making
          it a must-visit destination for food enthusiasts.
        </p>
        <video
          className="w-full h-72 object-cover mb-6 mt-0 rounded-lg shadow-2xl"
          autoPlay
          loop
          muted
        >
          <source src={bannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="section p-4 rounded-lg shadow-2xl text-left">
          <h2 className="text-3xl font-bold mb-2 pt-6 pl-6 text-gray-900">
            Foods
          </h2>
          <p className="text-gray-700 pl-6 text-xl">
            Indulge in the diverse and delicious food scene, from street food to
            fine dining.
          </p>
          <div className="relative">
            <button
              className="scroll-button left"
              onClick={() => scrollLeft(flowpaneRef1)}
            >
              &lt;
            </button>
            <div className="flowpane" ref={flowpaneRef1}>
              {foodData.map((food, index) => (
                <FoodCard
                  key={index}
                  image={food.image}
                  title={food.title}
                  rating={food.rating}
                  description={food.description}
                />
              ))}
            </div>
            <button
              className="scroll-button right"
              onClick={() => scrollRight(flowpaneRef1)}
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="section bg-D8F0FA p-4 rounded-lg shadow-2xl text-left">
          <h2 className="text-3xl font-bold mb-2 pt-6 pl-6 text-gray-900">
            Desserts
          </h2>
          <p className="text-gray-700 pl-6 text-xl">
            Explore more delicious dessert options in Penang.
          </p>
          <div className="relative">
            <button
              className="scroll-button left"
              onClick={() => scrollLeft(flowpaneRef2)}
            >
              &lt;
            </button>
            <div className="flowpane" ref={flowpaneRef2}>
              {dessertData.map((dessert, index) => (
                <FoodCard
                  key={index}
                  image={dessert.image}
                  title={dessert.title}
                  rating={dessert.rating}
                  description={dessert.description}
                />
              ))}
            </div>
            <button
              className="scroll-button right"
              onClick={() => scrollRight(flowpaneRef2)}
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="section bg-FBF4E2 p-4 rounded-lg shadow-2xl text-left">
          <h2 className="text-3xl font-bold mb-2 pt-6 pl-6 text-gray-900">
            Drinks
          </h2>
          <p className="text-gray-700 pl-6 text-xl">
            Explore a variety of refreshing drinks in Penang.
          </p>
          <div className="relative">
            <button
              className="scroll-button left"
              onClick={() => scrollLeft(flowpaneRef3)}
            >
              &lt;
            </button>
            <div className="flowpane p-6" ref={flowpaneRef3}>
              {drinkData.map((drink, index) => (
                <FoodCard
                  key={index}
                  image={drink.image}
                  title={drink.title}
                  rating={drink.rating}
                  description={drink.description}
                />
              ))}
            </div>
            <button
              className="scroll-button right"
              onClick={() => scrollRight(flowpaneRef3)}
            >
              &gt;
            </button>
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-2 pt-6 pl-6 text-gray-900">
          Penang Special
        </h2>
        <p className="text-xl text-gray-700 mb-8 text-center font-mountainsChristmas">
          Discover the unique and special dishes that Penang has to offer. These
          are the must-try foods that you can't miss!
        </p>
        <div className="flex flex-col items-center gap-6 p-4 rounded-2xl shadow-2xl bg-fbf4e2">
          <div className="relative bg-white text-white p-8 rounded-2xl shadow-lg">
            {/* Image Section */}
            <div className="mt-6 sm:mt-0 md:mt-0 lg:absolute lg:top-[-40px] lg:right-[-20px] lg:w-1/2">
              <img
                src={hawkerImage1}
                alt="New Lane Hawker Centre"
                className="rounded-lg shadow-2xl max-w-full h-96"
              />
            </div>
            {/* Text Section */}
            <div className="relative z-10 bg-white p-6 w-full lg:w-1/2 rounded-lg text-center lg:text-left">
              <h1 className="text-4xl text-black font-semibold mb-4">
                New Lane Hawker Centre
              </h1>
              <p className="text-lg text-black leading-relaxed">
                At 4 pm, Georgetown’s Lorong Baru becomes New Lane Hawker Centre, serving street food like char kway teow, chee cheong fun, and congee—a hearty Chinese rice porridge with toppings like crab or pork. Diners enjoy their meals at colorful roadside tables.
              </p>
            </div>
          </div>
          {/* Gurney Drive Hawker Centre Section */}
          <div className="relative mt-14 bg-white text-black p-8 rounded-2xl shadow-lg">
            {/* Image Section */}
            <div className="mt-6 sm:mt-0 md:mt-0 lg:absolute lg:top-[-40px] lg:left-[-20px] lg:w-1/2">
              <img
                src={hawkerImage2}
                alt="Gurney Drive Hawker Centre"
                className="sm:ml-0 md:ml-0 lg:ml-20 rounded-lg shadow-2xl max-w-full h-96"
              />
            </div>
            {/* Text Section */}
            <div className="relative z-10 bg-white p-6 w-full lg:w-1/2 rounded-lg text-center lg:text-left lg:ml-auto">
              <h1 className="text-4xl font-semibold mb-4">
                Gurney Drive Hawker Centre
              </h1>
              <p className="text-lg leading-relaxed">
                Gurney Drive Hawker Centre, next to Gurney Plaza Mall, offers a wide variety of Penang street food. Don’t miss the delicious char koay kak (stir-fried radish with bean sprouts, chili, egg, and pork lard) or the barbecue station, especially the beef meatballs. Seating is tight, so secure a spot before ordering by waiting for diners to finish.
              </p>
            </div>
          </div>
          {/* Other sections remain unchanged */}
          <div className="relative mt-14 bg-white text-black p-8 rounded-2xl shadow-lg">
            {/* Image Section */}
            <div className="mt-6 sm:mt-0 md:mt-0 lg:absolute lg:top-[-40px] lg:right-[-20px] lg:w-1/2">
              <img
                src={hawkerImage3}
                alt="New World Park Hawker Centre"
                className="rounded-lg shadow-2xl sm:w-full md:w-full lg:w-10/12 h-96"
              />
            </div>
            {/* Text Section */}
            <div className="relative z-10 bg-white p-6 w-full lg:w-1/2 rounded-lg text-center lg:text-left">
              <h1 className="text-4xl font-semibold mb-4">
                New World Park Hawker Centre
              </h1>
              <p className="text-lg leading-relaxed">
                New World Park, one of Penang’s largest hawker centres, is centrally located in Georgetown and offers a wide range of local and international cuisine. Parking is available for a few ringgits. Prices are affordable, and dishes include laksa, char koay teow, Indian food, Chinese food, and traditional Malaysian fare. Unique options like dim sum are also available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FnBPage;