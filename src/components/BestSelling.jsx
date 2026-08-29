import React, { useState } from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import { useShop } from '../context/ShopContext';
import './css/BestSelling.css';

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

const bestSellingData = [
  {
    id: 101,
    title: 'Car Alternator Vehicle Spare part Automotive Engine Parts',
    price: '780.00',
    oldPrice: '793.00',
    discount: '-30%',
    rating: 4,
    tab: 'New Arrivals',
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786536816/image-removebg-preview_41_dlqqsh.png'
  },
  {
    id: 102,
    title: 'Car Automobile repair shop Engine Motor Vehicle Service',
    price: '780.00',
    oldPrice: '793.00',
    discount: '-30%',
    rating: 4,
    tab: 'New Arrivals',
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786543477/image-removebg-preview_43_a7pk1n.png'
  },
  {
    id: 103,
    title: 'Glossy Gray 19" Aluminium Wheel AR-19',
    price: '780.00',
    oldPrice: '793.00',
    discount: '-30%',
    rating: 4,
    tab: 'Featured',
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786630415/images_rkx5up.jpg'
  },
  {
    id: 104,
    title: 'Car Automotive battery Battery recycling Starter',
    price: '780.00',
    oldPrice: '793.00',
    discount: '-30%',
    rating: 4,
    tab: 'Featured',
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786543477/image-removebg-preview_44_uvojbl.png'
  },
  {
    id: 105,
    title: 'Car Air filter Spare part AutoZone Disc brake',
    price: '780.00',
    oldPrice: '793.00',
    discount: '-30%',
    rating: 4,
    tab: 'Bestsellers',
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786625599/image-removebg-preview_47_mx9cng.png'
  },
  {
    id: 106,
    title: 'Car Exhaust system Spark plug Motor vehicle Engine',
    price: '780.00',
    oldPrice: '793.00',
    discount: '-30%',
    rating: 4,
    tab: 'Bestsellers',
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786626132/image-removebg-preview_49_onk2t9.png'
  },
  {
    id: 107,
    title: 'black and brown air filter, Toyota RAV4 Car Oil Filter',
    price: '780.00',
    oldPrice: '793.00',
    discount: '-30%',
    rating: 4,
    tab: 'Popular',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=300'
  },
  {
    id: 108,
    title: 'Piston ring Reciprocating Free engine graphy',
    price: '780.00',
    oldPrice: '793.00',
    discount: '-30%',
    rating: 4,
    tab: 'Popular',
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=300'
  },
  {
    id: 109,
    title: 'Car Air filter Spare part AutoZone Disc brake',
    price: '780.00',
    oldPrice: '793.00',
    discount: '-30%',
    rating: 4,
    tab: 'New Arrivals',
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786976192/image-removebg-preview_53_b6t09i.png'
  },
  {
    id: 110,
    title: 'Car Exhaust system Spark plug Motor vehicle Engine',
    price: '780.00',
    oldPrice: '793.00',
    discount: '-30%',
    rating: 4,
    tab: 'New Arrivals',
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786626132/image-removebg-preview_49_onk2t9.png'
  }
];

const tabOptions = ['New Arrivals', 'Featured', 'Bestsellers', 'Popular'];

const BestSelling = () => {
  const { searchQuery } = useShop();
  const [activeTab, setActiveTab] = useState('New Arrivals');

  const filteredProducts = bestSellingData.filter((product) => {
    const matchesTab = product.tab === activeTab;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
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
          slidesToShow: 1, // 1 Card visible at a time on mobile view
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  };

  return (
    <section className="bestselling-section p-4 w-100 position-relative">
      <div className="d-flex justify-content-between align-items-center mb-4 gap-2">
        <div>
          <span className="text-danger fw-bold small text-uppercase">Product ———</span>
          <h4 className="fw-bold text-dark mt-1 mb-0">Best Selling Products</h4>
        </div>

        {/* --- Mobile View: Small Dropdown on the Right of Heading --- */}
        <div className="d-block d-md-none ms-auto">
          <select
            className="form-select form-select-sm border-danger fw-semibold text-dark shadow-sm py-1 px-2"
            style={{ width: 'auto', minWidth: '120px', fontSize: '0.78rem' }}
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
          >
            {tabOptions.map((tab) => (
              <option key={tab} value={tab}>
                {tab}
              </option>
            ))}
          </select>
        </div>

        {/* --- Desktop View: Button Group --- */}
        <div className="btn-group gap-2 d-none d-md-flex">
          {tabOptions.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`btn btn-sm rounded transition ${
                activeTab === tab ? 'btn-dark fw-bold' : 'btn-light text-secondary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="px-3">
        {filteredProducts.length > 0 ? (
          <Slider key={activeTab + searchQuery} {...sliderSettings}>
            {filteredProducts.map((product) => (
              <div key={product.id} className="px-2 py-1">
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="text-center text-muted py-5">
            No products available in this section.
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSelling;