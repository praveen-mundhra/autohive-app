import React, { useEffect, useRef } from 'react';

import Slider from 'react-slick';

// Import Slick CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './css/HeroDisplay.css';
// Import your hero image or pass as URL
// import clutchImage from '../assets/clutch-parts.png'; 

const HeroDisplay = ({ isCategoryOpen }) => {
  const sliderRef = useRef(null);

  // Recalculate slider width when sidebar expands/collapses
  useEffect(() => {
    if (sliderRef.current) {
      setTimeout(() => {
        sliderRef.current.slickGoTo(0);
      }, 300);
    }
  }, [isCategoryOpen]);

  // Slick Carousel Settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
  };

  // Slides data using your exact content structure
  const slides = [
    {
      id: 1,
      tagline: "Online Parts Marketplace ———",
      title: <>Original Equipment <br /> Manufacturer</>,
      subtitle: "Continually leverage other's adaptive synergy without visionary customer service.",
      buttonText: "Discover More",
      image: "https://res.cloudinary.com/m51f0hzh/image/upload/v1786528770/image-removebg-preview_27_cpr1ib.png", // replace with clutchImage
    },
    {
      id: 2,
      tagline: "High Performance Gear ———",
      title: <>Premium Brake & <br /> Suspension Sets</>,
      subtitle: "Upgrade your driving experience with certified performance auto components.",
      buttonText: "Shop Collection",
      image: "https://res.cloudinary.com/m51f0hzh/image/upload/v1786528346/automativebrake_txb2fg.png",
    },
    {
      id: 3,
      tagline: "Special Discount Deals ———",
      title: <>Save Up To 40% On <br /> Engine Maintenance</>,
      subtitle: "Keep your vehicle running smoothly with original maintenance parts.",
      buttonText: "Explore Deals",
      image: "https://res.cloudinary.com/m51f0hzh/image/upload/v1786528884/image-removebg-preview_28_e3myx4.png",
    }
  ];

  return (
    <div className="hero-display-container w-100 h-100 overflow-hidden">
      {/* --- React Slick Hero Carousel --- */}
      <Slider ref={sliderRef} {...sliderSettings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div className="hero-banner position-relative rounded-0 overflow-hidden p-4 p-lg-5 d-flex align-items-center">
              <div className="row w-100 align-items-center position-relative z-2 mx-0">
                
                {/* Banner Text Content */}
                <div className="col-lg-6 mb-6 mb-lg-0">
                  <span className="text-danger fw-semibold small tracking-wide d-block mb-2">
                    {slide.tagline}
                  </span>
                  <h1 className="hero-title fw-bold display-5 mb-3">
                    {slide.title}
                  </h1>
                  <p className="hero-subtitle mb-4">
                    {slide.subtitle}
                  </p>
                  <a 
                    href="#shop" 
                    className="btn btn-danger btn-lg px-5 py-3 fs-6 fw-bold rounded-1 border-0" 
                    style={{ backgroundColor: '#ff002b' }}
                  >
                    {slide.buttonText}
                  </a>
                </div>

                {/* Banner Image */}
                <div className="col-lg-6 text-center">
                  <img 
                    src={slide.image} 
                    alt="Auto Part Assembly" 
                    className="img-fluid hero-image" 
                  />
                </div>

              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroDisplay;