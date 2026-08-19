import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { useShop } from '../context/ShopContext';
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
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786625599/image-removebg-preview_47_mx9cng.pnghttps://images.unsplash.com/photo-1486006920555-c77dce18193b?w=300'
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
  },
];

const BestSelling = () => {
  const { searchQuery } = useShop();
  const [activeTab, setActiveTab] = useState('New Arrivals');

  const filteredProducts = bestSellingData.filter((product) => {
    const matchesTab = product.tab === activeTab;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section className="bestselling-section p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <span className="text-danger fw-bold small text-uppercase">Product ———</span>
          <h4 className="fw-bold text-dark mt-1 mb-0">Best Selling Products</h4>
        </div>

        <div className="btn-group gap-2">
          {['New Arrivals', 'Featured', 'Bestsellers', 'Popular'].map((tab) => (
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

export default BestSelling;