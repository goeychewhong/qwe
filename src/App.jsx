import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import HomePage from './pages/HomePage';
import './styles/styles.css';

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal nav-link"
      >
        <a href="#home" className="flex items-center text-black">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal nav-link"
      >
        <a href="#food-and-beverages" className="flex items-center text-black">
          Food and Beverages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal nav-link"
      >
        <a href="#accommodations" className="flex items-center text-black">
          Accommodations
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal nav-link"
      >
        <a href="#tourist-spots" className="flex items-center text-black">
          Tourist
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="fixed top-0 z-20 w-full bg-transparent backdrop-blur-md">
      <div className="flex items-center justify-between text-blue-gray-900 w-full">
        <Typography
          as="a"
          href="#"
          className="ml-4 cursor-pointer py-1.5 font-black text-black flex items-center"
          style={{ fontFamily: 'Aclonica, sans-serif', fontSize: '2rem' }}
        >
          Visit Penang
        </Typography>
        <div className="flex items-center gap-4 ml-auto">
          <IconButton
            variant="text"
            className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden mr-4"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="black"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
          <div className="mr-4 hidden lg:block">{navList}</div>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
      </MobileNav>
    </Navbar>
  );
}

function App() {
  return (
    <div>
      <StickyNavbar />
      <HomePage />
    </div>
  );
}

export default App;