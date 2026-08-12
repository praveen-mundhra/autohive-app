import React from 'react';
import ProductCard from './ProductCard';

const flashProducts = [
  {
    id: 8,
    title: 'Fuel- D556 Coupler 1pc Black with Machine',
    price: '95.00',
    oldPrice: '120.00',
    discount: '-30%',
    rating: 4,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786532852/image-removebg-preview_37_an7xgh.png'
  },
  {
    id: 9,
    title: 'Car Disc brake Automobile repair Shop Brake Pad',
    price: '18.00',
    oldPrice: '18.00',
    discount: '-30%',
    rating: 4,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786532876/image-removebg-preview_38_pdx5xu.png'
  },
  {
    id: 10,
    title: 'Car Suspension Vehicle graphy Automotive Engine Parts',
    price: '18.00',
    oldPrice: '29.00',
    discount: '-30%',
    rating: 4,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786536514/image-removebg-preview_40_ppm05s.png'
  },
  {
    id: 11,
    title: 'Car Vehicle Spare Automotive Engine Parts',
    price: '20.00',
    oldPrice: '58.00',
    discount: '-30%',
    rating: 4,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786537138/Untitled_design-removebg-preview_fvez6y.png'
  }
];

const FlashSales = () => {
  return (
    <section id="flash-sales">
    <div className="bg-dark text-white p-4 position-relative mt-4">
      <div className="text-center mb-4">
        <h4 className="fw-black mb-0">
          Attention! <span className="text-danger">Flash Sales</span>
        </h4>
        <p className="text-secondary small">Hurry up! Discounts up to 70%</p>

        <div className="d-flex justify-content-center gap-2 mt-3">
          {['03 Day', '03 Day', '03 Day', '03 Day'].map((timer, idx) => (
            <span key={idx} className="badge bg-danger px-3 py-2">
              {timer}
            </span>
          ))}
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        {flashProducts.map((item) => (
          <div key={item.id} className="col">
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default FlashSales;