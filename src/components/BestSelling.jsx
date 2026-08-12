import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './css/BestSelling.css';

const bestSellingData = [
  {
    id: 101,
    title: 'Car Alternator Vehicle Spare part Automotive Engine Parts',
    price: '780.00',
    oldPrice: '793.00',
    discount: '-30%',
    rating: 4,
    tab: 'New Arrivals',
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786543478/image-removebg-preview_42_cjqi9o.png'
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
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786531026/image-removebg-preview_31_jeziv0.png'
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
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=300'
  },
  {
    id: 106,
    title: 'Car Exhaust system Spark plug Motor vehicle Engine',
    price: '780.00',
    oldPrice: '793.00',
    discount: '-30%',
    rating: 4,
    tab: 'Bestsellers',
    image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=300'
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
  }
];

const BestSellingProducts = () => {
  const [activeTab, setActiveTab] = useState('New Arrivals');

  const filteredProducts = bestSellingData.filter((product) => product.tab === activeTab);

  return (
    <section className="bestselling-section p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <span className="text-danger fw-bold small text-uppercase">Product ———</span>
          <h4 className="fw-bold text-dark mt-1 mb-0">Best Selling Products</h4>
        </div>

        {/* Functional Top-Right Filter Buttons */}
        <div className="btn-group gap-2">
          {['New Arrivals', 'Featured', 'Bestsellers', 'Popular'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`btn btn-sm rounded transition ${
                activeTab === tab ? 'btn-dark font-weight-bold' : 'btn-light text-secondary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col">
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center text-muted py-5">
            No products available in this section.
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSellingProducts;