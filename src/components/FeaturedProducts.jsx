import React, { useState } from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import { useShop } from '../context/ShopContext';
import './css/FeaturedProducts.css';

const NextArrow = ({ onClick }) => (
  <button className="slick-arrow-custom next-arrow" onClick={onClick}>
    <i className="bi bi-chevron-right"></i>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="slick-arrow-custom prev-arrow" onClick={onClick}>
    <i className="bi bi-chevron-left"></i>
  </button>
);

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
    category: 'Hand Tool',
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786531247/image-removebg-preview_32_qkdax8.png'
  }
];

const categoryOptions = ['All Parts', 'Power Tools', 'Hand Tool'];

const FeaturedProducts = () => {
  const { searchQuery } = useShop();
  const [activeCategory, setActiveCategory] = useState('All Parts');

  const filteredProducts = allFeaturedProducts.filter((product) => {
    const matchesCategory =
      activeCategory === 'All Parts' || product.category === activeCategory;
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sliderSettings = {
    dots: false,
    infinite: filteredProducts.length > 4,
    speed: 500,
    slidesToShow: Math.min(4, Math.max(1, filteredProducts.length)),
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(4, Math.max(1, filteredProducts.length)),
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="p-4 w-100 position-relative" id="featured-section">
      <div className="d-flex justify-content-between align-items-center mb-4 gap-2">
        <div>
          <span className="text-danger fw-bold small text-uppercase">
            Featured Products ———
          </span>
          <h5 className="fw-bold text-dark mt-1 mb-0">Auto Parts For All Model</h5>
        </div>

        {/* --- Mobile View: Small Dropdown on the Right of Heading --- */}
        <div className="d-block d-md-none ms-auto">
          <select
            className="form-select form-select-sm border-danger fw-semibold text-dark shadow-sm py-1 px-2"
            style={{ width: 'auto', minWidth: '110px', fontSize: '0.78rem' }}
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
          >
            {categoryOptions.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* --- Desktop View: Button Group --- */}
        <div className="btn-group gap-2 d-none d-md-flex">
          {categoryOptions.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`btn btn-sm rounded transition ${
                activeCategory === category
                  ? 'btn-danger'
                  : 'btn-light text-secondary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="px-3">
        {filteredProducts.length > 0 ? (
          <Slider key={activeCategory + searchQuery} {...sliderSettings}>
            {filteredProducts.map((item) => (
              <div key={item.id} className="px-2 py-1">
                <ProductCard product={item} />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="text-center text-muted py-5">
            <i className="bi bi-search fs-3 text-secondary d-block mb-2"></i>
            No parts found matching "{searchQuery}".
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;