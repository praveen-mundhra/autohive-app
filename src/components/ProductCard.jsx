import React from 'react';
import './css/ProductCard.css';

const ProductCard = ({ product }) => {
  // Safe guard: if product is undefined/null, render nothing or a blank state
  if (!product) return null;

  return (
    <div className="card h-100 border p-3 position-relative product-card">
      {/* Optional chaining product?.discount prevents the crash */}
      {product?.discount && (
        <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2 extra-small">
          {product.discount}
        </span>
      )}

      <button className="btn btn-light rounded-circle p-0 position-absolute top-0 end-0 m-2 wishlist-btn">
        <i className="bi bi-heart text-danger"></i>
      </button>

      <div className="product-img-box d-flex align-items-center justify-content-center position-relative my-3">
        <img src={product?.image} alt={product?.title || 'Product'} className="img-fluid max-h-100" />

        {/* <div className="hover-actions position-absolute bottom-0 d-flex gap-2">
          <button className="btn btn-danger btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center">
            <i className="bi bi-cart"></i>
          </button>
          <button className="btn btn-light btn-sm rounded-circle p-2 shadow-sm d-flex align-items-center justify-content-center">
            <i className="bi bi-eye"></i>
          </button>
        </div> */}
      </div>

      <div className="d-flex flex-row align-items-center gap-1 text-warning extra-small mb-1">
        {[...Array(5)].map((_, i) => (
          <i key={i} className={`bi bi-star-fill ${i < (product?.rating || 0) ? 'text-warning' : 'text-secondary opacity-25'}`}></i>
        ))}
      </div>

      <h6 className="card-title text-truncate-2 small fw-semibold text-dark mb-2 hover-danger pointer">
        {product?.title}
      </h6>

      <div className="d-flex align-items-center gap-2 small">
        {product?.oldPrice && <span className="text-muted text-decoration-line-through">${product.oldPrice}</span>}
        <span className="text-danger fw-bold">${product?.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;