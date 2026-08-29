import React from 'react';
import { useShop } from '../context/ShopContext';
import './css/ProductCard.css';

const ProductCard = ({ product, compact = false }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  if (!product) return null;
  const isFavorite = isInWishlist(product.id);

  return (
    <div
      className={`card w-100 h-100 border p-4 position-relative product-card custom-fixed-card ${
        compact ? 'compact-card' : ''
      }`}
    >
      {product?.discount && (
        <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2 extra-small">
          {product.discount}
        </span>
      )}

      <button
        className={`btn rounded-circle p-0 position-absolute top-0 end-0 m-2 wishlist-btn ${
          isFavorite ? 'bg-danger text-white' : 'btn-light text-danger'
        }`}
        onClick={() => toggleWishlist(product)}
        title={isFavorite ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <i className={`bi ${isFavorite ? 'bi-heart-fill' : 'bi-heart'}`}></i>
      </button>

      <div className="product-img-box d-flex align-items-center justify-content-center position-relative my-2">
        <img
          src={product?.image}
          alt={product?.title || 'Product'}
          className="fixed-product-img"
        />
      </div>

      <div className="product-card-body d-flex flex-column gap-4 flex-grow-1">
        <div>
          <div className="d-flex flex-row align-items-center gap-1 text-warning extra-small mb-1">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`bi bi-star-fill ${
                  i < (product?.rating || 0) ? 'text-warning' : 'text-secondary opacity-25'
                }`}
              ></i>
            ))}
          </div>

          <h6
            className="card-title text-truncate-2 small fw-semibold text-dark mb-2 hover-danger pointer"
            title={product?.title}
          >
            {product?.title}
          </h6>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-auto">
          <div className="d-flex align-items-center gap-2 small">
            {product?.oldPrice && (
              <span className="text-muted text-decoration-line-through extra-small">
                ${product.oldPrice}
              </span>
            )}
            <span className="text-danger fw-bold">${product?.price}</span>
          </div>

          <button
            className="btn btn-sm btn-outline-danger extra-small py-1 px-2 rounded"
            onClick={() => addToCart(product)}
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;