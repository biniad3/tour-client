import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Import Link for smooth scrolling
import { FaBars, FaTimes } from "react-icons/fa";
import logo1 from "../assets/logo1.png";

const BackgroundSlider = () => {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1619266465172-02a857c3556d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZvbGNhbm98ZW58MHx8MHx8fDA%3D",
      text: "WELCOME TO OUR SITE",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
      text: "Explore Amazing Features",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523225918988-00624e6d8fee?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsaW5nfGVufDB8fDB8fHww",
      text: "Build Your Future Here",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494783367193-149034c05e8f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzZXJ0JTIwcm9hZHxlbnwwfHwwfHx8MA%3D%3D",
      text: "New Adventure",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleClickOutsideSidebar = (e) => {
    // Close sidebar only when clicking outside of the sidebar or the menu button
    if (
      sidebarOpen &&
      !e.target.closest("#sidebar") &&
      !e.target.closest("#sidebarButton")
    ) {
      closeSidebar();
    }
  };

  return (
    <div id="Home" onClick={handleClickOutsideSidebar}>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full p-3 z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 ml-5 cursor-pointer hover:scale-105 duration-500">
            <Link to="Home" smooth={true} duration={500}>
              <img className="rounded-full" src={logo1} width={50} alt="Logo" />
            </Link>
            <Link to="Home" smooth={true} duration={500}>
              <p className="text-white font-bold">ERTA ALE</p>
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              id="sidebarButton"
              className="text-white text-2xl"
              onClick={toggleSidebar}
              aria-label="Toggle menu"
            >
              {sidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <ul className="hidden lg:flex text-white font-bold gap-10 cursor-pointer">
            <li className="hover:text-orange-600 duration-300 active:opacity-30">
              <Link to="Home" smooth={true} duration={500}>
                HOME
              </Link>
            </li>
            <li className="hover:text-orange-600 duration-300 active:opacity-30">
              <Link to="About" smooth={true} duration={500}>
                ABOUT
              </Link>
            </li>
            <li className="hover:text-orange-600 duration-300 active:opacity-30">
              <Link to="Service" smooth={true} duration={500}>
                SERVICE
              </Link>
            </li>
            <li className="hover:text-orange-600 duration-300 active:opacity-30">
              <Link to="Gallery" smooth={true} duration={500}>
                GALLERY
              </Link>
            </li>
            <li className="hover:text-orange-600 duration-300 active:opacity-30">
              <Link to="Faq" smooth={true} duration={500}>
                FAQ
              </Link>
            </li>
            <li className="hover:text-orange-600 duration-300 active:opacity-30">
              <Link to="Contact" smooth={true} duration={500}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        id="sidebar"
        className={`fixed top-0 right-0 w-64 h-full bg-gray-900 text-white z-50 transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 lg:hidden`}
      >
        <ul className="flex flex-col items-start p-5 gap-5">
          <li>
            <Link to="Home" smooth={true} duration={500} onClick={closeSidebar}>
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="About"
              smooth={true}
              duration={500}
              onClick={closeSidebar}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="Service"
              smooth={true}
              duration={500}
              onClick={closeSidebar}
            >
              SERVICE
            </Link>
          </li>
          <li>
            <Link
              to="Gallery"
              smooth={true}
              duration={500}
              onClick={closeSidebar}
            >
              GALLERY
            </Link>
          </li>
          <li>
            <Link to="Faq" smooth={true} duration={500} onClick={closeSidebar}>
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="Contact"
              smooth={true}
              duration={500}
              onClick={closeSidebar}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

      {/* Background Slider */}
      <div
        id="sliderBackground"
        className={`w-full h-screen flex items-center justify-center transition-all duration-1000 ${
          sidebarOpen && "pointer-events-none"
        }`}
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <h3 className="font-bold text-white text-lg">
            ERTA ALE TOUR AND TRAVEL
          </h3>
          <h1 className="text-4xl md:text-6xl text-white font-bold drop-shadow-lg">
            {slides[currentIndex].text}
          </h1>
          <button className="font-bold text-gray-700 p-2 bg-white rounded-2xl w-48 mt-5 border-2 border-white hover:bg-transparent hover:text-white duration-500">
            DISCOVER NOW
          </button>
        </div>
      </div>
    </div>
  );  
};

export default BackgroundSlider;
