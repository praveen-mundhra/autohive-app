import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import './css/FlashSales.css';

const NextArrow = ({ onClick }) => (
  <button className="slick-arrow-custom next-arrow" onClick={onClick} aria-label="Next">
    <i className="bi bi-chevron-right"></i>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="slick-arrow-custom prev-arrow" onClick={onClick} aria-label="Previous">
    <i className="bi bi-chevron-left"></i>
  </button>
);

const flashProducts = [
  {
    id: 501,
    title: 'Fuel- D556 Coupler 1pc Black with Machine',
    price: '95.00',
    oldPrice: '120.00',
    discount: '-30%',
    rating: 4,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786532852/image-removebg-preview_37_an7xgh.png'
  },
  {
    id: 502,
    title: 'Car Disc brake Automobile repair Shop Brake Pad',
    price: '18.00',
    oldPrice: '18.00',
    discount: '-30%',
    rating: 4,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786532876/image-removebg-preview_38_pdx5xu.png'
  },
  {
    id: 503,
    title: 'Car Suspension Vehicle graphy Automotive Engine Parts',
    price: '18.00',
    oldPrice: '29.00',
    discount: '-30%',
    rating: 4,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786536514/image-removebg-preview_40_ppm05s.png'
  },
  {
    id: 504,
    title: 'Car Vehicle Spare Automotive Engine Parts',
    price: '20.00',
    oldPrice: '58.00',
    discount: '-30%',
    rating: 4,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786536816/image-removebg-preview_41_dlqqsh.png'
  }
];

const FlashSales = () => {
  const initialSeconds = 3 * 86400 + 8 * 3600 + 45 * 60 + 12;
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = String(Math.floor(timeLeft / 86400)).padStart(2, '0');
  const hours = String(Math.floor((timeLeft % 86400) / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true
        }
      }
    ]
  };

  return (
    <div className="bg-dark text-white p-4 position-relative mt-4 flash-sales-container rounded">
      {/* Header & Live Pulse Icon */}
      <div className="text-center mb-4 flash-header-animation">
        <div className="d-inline-flex align-items-center gap-2 mb-1">
          <span className="live-flash-dot"></span>
          <h4 className="fw-black mb-0 flash-title">
            Attention! <span className="text-danger flash-glow">Flash Sales</span>
          </h4>
        </div>
        <p className="text-secondary small mb-3">Hurry up! Discounts up to 70%</p>

        {/* Dynamic Countdown Timer */}
        <div className="d-flex justify-content-center gap-2 mt-2">
          {[
            { val: days, label: 'Day' },
            { val: hours, label: 'Hour' },
            { val: minutes, label: 'Min' },
            { val: seconds, label: 'Sec' }
          ].map((item, idx) => (
            <div key={idx} className="timer-badge-box bg-danger px-3 py-1.5 rounded text-white shadow-sm">
              <span className="fw-bold fs-6 timer-digit">{item.val}</span>{' '}
              <span className="extra-small text-uppercase opacity-75">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Grid */}
      <div className="flash-slider-wrapper position-relative">
        <Slider {...sliderSettings}>
          {flashProducts.map((item) => (
            <div key={item.id} className="px-2 py-1 flash-card-item">
              <ProductCard product={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FlashSales;