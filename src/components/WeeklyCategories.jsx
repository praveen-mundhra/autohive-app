import React from 'react';
import ProductCard from './ProductCard';
import './css/WeeklyCategories.css';

const miniProducts = [
  { id: 201, title: 'Wheel Designs Rim Alloy Black car wheels', price: '780.00', oldPrice: '793.00', rating: 4, image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=200' },
  { id: 202, title: 'Aluminium Wheel AR-19 Tire Parts', price: '780.00', oldPrice: '793.00', rating: 4, image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=200' },
  { id: 203, title: 'Car wheel Chrome plating Vehicle, truck', price: '780.00', oldPrice: '793.00', rating: 4, image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=200' },
];

const WeeklyCategories = () => {
  return (
    <section className="weekly-categories-section p-4">
      <div className="text-center mb-5">
        <h3 className="fw-bold text-dark">Weekly Top Categories</h3>
        <p className="text-secondary small max-w-500 mx-auto">
          Progressively evisculate technically sound models rather than an expanded array of testing procedures rather than high-quality communities.
        </p>
      </div>

      {/* Category Box 1: Wheels & Tires */}
      <div className="bg-light p-4 rounded mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold mb-0">Wheels &amp; Tires</h5>
          <button className="btn btn-danger btn-sm extra-small fw-bold">View All &rarr;</button>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-3">
          {miniProducts.map((p) => (
            <div key={p.id} className="col">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>

      {/* Category Box 2: Engine & Drivetrain */}
      <div className="bg-light p-4 rounded mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold mb-0">Engine &amp; Drivetrain</h5>
          <button className="btn btn-outline-dark btn-sm extra-small fw-bold">View All &rarr;</button>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-3">
          {miniProducts.map((p) => (
            <div key={`eng-${p.id}`} className="col">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>

      {/* Category Box 3: Car Interior Parts */}
      <div className="bg-light p-4 rounded">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold mb-0">Car Interior Parts</h5>
          <button className="btn btn-outline-dark btn-sm extra-small fw-bold">View All &rarr;</button>
        </div>

        <div className="row row-cols-1 row-cols-md-4 g-3">
          {[...miniProducts, miniProducts[0]].map((p, idx) => (
            <div key={`int-${idx}`} className="col">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklyCategories;