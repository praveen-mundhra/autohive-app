import React, { useState } from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import './css/FeaturedProducts.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import '../index.css';

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => (
  <button className="slick-arrow-custom next-arrow" onClick={onClick}>
    <i className="bi bi-chevron-right"></i>
  </button>
);

// Custom Prev Arrow Component
const PrevArrow = ({ onClick }) => (
  <button className="slick-arrow-custom prev-arrow" onClick={onClick}>
    <i className="bi bi-chevron-left"></i>
  </button>
);

// Dummy dataset with Cloudinary images & category tags
const allFeaturedProducts = [
  {
    id: 1,
    title: 'Aluminium Wheel AR-19 Tire Parts',
    price: '480.00',
    oldPrice: '780.00',
    discount: '-38%',
    rating: 4,
    category: 'All Parts',
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786530587/image-removebg-preview_29_nmw3za.png'
  },
  {
    id: 2,
    title: 'Glossy Gray 19" Aluminium Wheel AR-19',
    price: '380.00',
    oldPrice: '580.00',
    discount: '-30%',
    rating: 4,
    category: 'All Parts',
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786531026/image-removebg-preview_31_jeziv0.png'
  },
  {
    id: 3,
    title: 'Electric Impact Wrench 20V Power Tool',
    price: '160.00',
    oldPrice: '250.00',
    discount: '-30%',
    rating: 5,
    category: 'Power Tools',
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786531759/image-removebg-preview_34_zb4vfv.png'
  },
  {
    id: 4,
    title: 'Brandix Spark Plug Kit ASR-400',
    price: '70.00',
    oldPrice: '100.00',
    discount: '-30%',
    rating: 4,
    category: 'Hand Tool',
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786531355/image-removebg-preview_33_djspg2.png'
  },
  {
    id: 5,
    title: 'Professional Ratchet Wrench Set',
    price: '45.00',
    oldPrice: '60.00',
    discount: '-25%',
    rating: 4,
    category: 'Hand Tool',
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786532069/image-removebg-preview_36_swlhkp.png'
  },
  {
    id: 6,
    title: 'Cordless Rotary Drill Machine 18V',
    price: '210.00',
    oldPrice: '290.00',
    discount: '-27%',
    rating: 5,
    category: 'Power Tools',
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786531901/image-removebg-preview_35_yxtznh.png'
  },
  {
    id: 7,
    title: 'Set of Car Floor Mats Brandix Z4',
    price: '160.00',
    oldPrice: '250.00',
    discount: '-30%',
    rating: 4,
    category: 'Hand Tool', // Standardized to match button label
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786531247/image-removebg-preview_32_qkdax8.png'
  }
];

const FeaturedProducts = () => {
  // Active Category State
  const [activeCategory, setActiveCategory] = useState('All Parts');

  // Filter products based on selected active category button
  const filteredProducts = activeCategory === 'All Parts'
    ? allFeaturedProducts
    : allFeaturedProducts.filter((product) => product.category === activeCategory);

  // Slick Carousel Configuration
  const sliderSettings = {
    dots: false,
    infinite: filteredProducts.length > 4, // Loop only if items > 4
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section id="featured-products">
    <div className="p-4 position-relative">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <span className="text-danger fw-bold small text-uppercase">Featured Products ———</span>
          <h5 className="fw-bold text-dark mt-1 mb-0">Auto Parts For All Model</h5>
        </div>

        {/* Filter Buttons */}
        <div className="btn-group gap-2">
          {['All Parts', 'Power Tools', 'Hand Tool'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`btn btn-sm rounded transition ${
                activeCategory === category ? 'btn-danger' : 'btn-light text-secondary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* React Slick Carousel */}
      <div className="px-3">
        {filteredProducts.length > 0 ? (
          <Slider key={activeCategory} {...sliderSettings}>
            {filteredProducts.map((item) => (
              <div key={item.id} className="px-2 py-1">
                <ProductCard product={item} />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="text-center text-muted py-4">
            No products available in this category.
          </div>
        )}
      </div>
    </div>
    </section>
  );
};

export default FeaturedProducts;