import React, { useRef } from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import { useShop } from '../context/ShopContext';
import './css/WeeklyCategories.css';

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

const wheelsAndTires = [
  {
    id: 301,
    title: 'Wheel Designs Rim Alloy Black car wheels',
    price: '780.00',
    oldPrice: '793.00',
    rating: 4,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786630475/images_rkx5up-removebg-preview_g8cucv.png'
  },
  {
    id: 302,
    title: 'Aluminium Wheel AR-19 Tire Parts',
    price: '780.00',
    oldPrice: '793.00',
    rating: 5,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786630475/images_rkx5up-removebg-preview_g8cucv.png'
  },
  {
    id: 303,
    title: 'Car wheel Chrome plating Vehicle, truck',
    price: '780.00',
    oldPrice: '898',
    rating: 4,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786628886/image-removebg-preview_51_pwi7mz.png'
  }
];

const engineAndDrivetrain = [
  {
    id: 304,
    title: 'Aluminium Wheel AR-19 Tire Parts',
    price: '780.00',
    oldPrice: '793.00',
    rating: 4,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786543477/image-removebg-preview_43_a7pk1n.png'
  },
  {
    id: 305,
    title: 'Digital Tyre Inflator, Portable Air Compressor',
    price: '780.00',
    oldPrice: '793.00',
    rating: 4,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786630099/71Nz0gpUXeL_xbwy8i.jpg'
  },
  {
    id: 306,
    title: 'Aluminium Wheel AR-19 Tire Parts',
    price: '780.00',
    oldPrice: '793.00',
    rating: 4,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786532852/image-removebg-preview_37_an7xgh.png'
  }
];

const interiorParts = [
  {
    id: 307,
    title: 'Aluminium Wheel AR-19 Tire Parts',
    price: '780.00',
    oldPrice: '793.00',
    discount: '-30%',
    rating: 4,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786531026/image-removebg-preview_31_jeziv0.png'
  },
  {
    id: 308,
    title: 'Aluminium Wheel AR-19 Tire Parts',
    price: '780.00',
    oldPrice: '793.00',
    discount: '-30%',
    rating: 4,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786530587/image-removebg-preview_29_nmw3za.png'
  },
  {
    id: 309,
    title: 'Set of Car Floor Mats Brandix Z4',
    price: '780.00',
    oldPrice: '793.00',
    discount: '-30%',
    rating: 4,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786531247/image-removebg-preview_32_qkdax8.png'
  },
  {
    id: 310,
    title: 'KEYOZA Leather Car Steering Wheel Cover, Anti-Slip, Safety, Sof',
    price: '780.00',
    oldPrice: '793.00',
    discount: '-30%',
    rating: 4,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786976814/image-removebg-preview_54_fernxy.png'
  }
];

const WeeklyCategories = () => {
  const { showToast } = useShop();

  const wheelsSliderRef = useRef(null);
  const engineSliderRef = useRef(null);

  // Settings for the top two 3-card sections
  const halfSectionSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // controlled by custom left/right header buttons
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1, // 1 card visible on mobile
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  // Settings for the bottom 4-card full width section
  const fullWidthSliderSettings = {
    dots: false,
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
          slidesToShow: 1, // 1 card visible on mobile
          slidesToScroll: 1,
          dots: true,
          arrows: true
        }
      }
    ]
  };

  return (
    <section className="weekly-categories-container p-4 w-100">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-dark section-title">Weekly Top Categories</h2>
        <p className="text-secondary small max-w-550 mx-auto leading-relaxed">
          Progressively evisculate technically sound models rather than an expanded array
          of testing procedures rather than high-quality communities.
        </p>
      </div>

      <div className="row g-4 mb-4">
        {/* Wheels & Tires */}
        <div className="col-lg-6">
          <div className="category-card-wrapper bg-white p-4 rounded border shadow-sm h-100 position-relative">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold text-dark mb-0">Wheels &amp; Tires</h5>
              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-danger btn-sm text-white px-3 fw-semibold view-all-red"
                  onClick={() => showToast('Viewing all Wheels & Tires')}
                >
                  View All <i className="bi bi-arrow-right ms-1"></i>
                </button>
              </div>
            </div>

            <div className="position-relative px-2">
              {/* Navigation Arrows */}
              <button
                className="category-nav-btn nav-btn-left"
                onClick={() => wheelsSliderRef.current?.slickPrev()}
                aria-label="Previous Wheels"
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <button
                className="category-nav-btn nav-btn-right"
                onClick={() => wheelsSliderRef.current?.slickNext()}
                aria-label="Next Wheels"
              >
                <i className="bi bi-chevron-right"></i>
              </button>

              <Slider ref={wheelsSliderRef} {...halfSectionSliderSettings}>
                {wheelsAndTires.map((item) => (
                  <div key={item.id} className="px-1 py-1">
                    <ProductCard product={item} compact={true} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/* Engine & Drivetrain */}
        <div className="col-lg-6">
          <div className="category-card-wrapper bg-white p-4 rounded border shadow-sm h-100 position-relative">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold text-dark mb-0">Engine &amp; Drivetrain</h5>
              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-outline-secondary btn-sm px-3 text-dark fw-semibold view-all-gray"
                  onClick={() => showToast('Viewing all Engine & Drivetrain Parts')}
                >
                  View All <i className="bi bi-arrow-right ms-1"></i>
                </button>
              </div>
            </div>

            <div className="position-relative px-2">
              {/* Navigation Arrows */}
              <button
                className="category-nav-btn nav-btn-left"
                onClick={() => engineSliderRef.current?.slickPrev()}
                aria-label="Previous Engine"
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <button
                className="category-nav-btn nav-btn-right"
                onClick={() => engineSliderRef.current?.slickNext()}
                aria-label="Next Engine"
              >
                <i className="bi bi-chevron-right"></i>
              </button>

              <Slider ref={engineSliderRef} {...halfSectionSliderSettings}>
                {engineAndDrivetrain.map((item) => (
                  <div key={item.id} className="px-1 py-1">
                    <ProductCard product={item} compact={true} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Full-Width: Car Interior Parts */}
      <div className="category-card-wrapper bg-white p-4 rounded border shadow-sm position-relative">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold text-dark mb-0">Car Interior Parts</h5>
          <button
            className="btn btn-outline-secondary btn-sm px-3 text-dark fw-semibold view-all-gray"
            onClick={() => showToast('Viewing all Interior Parts')}
          >
            View All <i className="bi bi-arrow-right ms-1"></i>
          </button>
        </div>

        <div className="px-2 position-relative">
          <Slider {...fullWidthSliderSettings}>
            {interiorParts.map((item) => (
              <div key={item.id} className="px-2 py-1">
                <ProductCard product={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default WeeklyCategories;