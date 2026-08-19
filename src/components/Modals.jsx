import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';

const Modals = () => {
  const {
    cart,
    cartTotal,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    isCartModalOpen,
    setIsCartModalOpen,
    wishlist,
    toggleWishlist,
    addToCart,
    isWishlistModalOpen,
    setIsWishlistModalOpen,
    user,
    login,
    logout,
    isAuthModalOpen,
    setIsAuthModalOpen,
    toastMessage,
    showToast
  } = useShop();

  const [authMode, setAuthMode] = useState('login');
  const [authEmail, setAuthEmail] = useState('');
  const [authName, setAuthName] = useState('');
  const [authPassword, setAuthPassword] = useState('');

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (!authEmail || !authPassword) {
      showToast('Please enter email and password.');
      return;
    }
    login(authEmail, authName);
    setAuthEmail('');
    setAuthPassword('');
    setAuthName('');
  };

  return (
    <>
      {/* Toast Alert */}
      {toastMessage && (
        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11000 }}>
          <div className="toast show bg-dark text-white shadow-lg border-danger p-2 d-flex align-items-center">
            <i className="bi bi-info-circle-fill text-danger fs-5 me-2"></i>
            <div className="toast-body p-0 small">{toastMessage}</div>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {isCartModalOpen && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 10500 }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0 shadow">
              <div className="modal-header bg-black text-white">
                <h5 className="modal-title fw-bold">
                  <i className="bi bi-cart3 text-danger me-2"></i> Shopping Cart ({cart.length} items)
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setIsCartModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body p-4" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                {cart.length === 0 ? (
                  <div className="text-center py-5">
                    <i className="bi bi-cart-x text-muted display-4"></i>
                    <p className="mt-3 text-secondary">Your shopping cart is empty!</p>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="table align-middle">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Subtotal</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <div className="d-flex align-items-center gap-3">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                                />
                                <span className="small fw-semibold text-truncate" style={{ maxWidth: '200px' }}>
                                  {item.title}
                                </span>
                              </div>
                            </td>
                            <td className="small fw-bold text-danger">${item.price}</td>
                            <td>
                              <div className="d-flex align-items-center gap-2">
                                <button
                                  className="btn btn-outline-secondary btn-sm px-2 py-0"
                                  onClick={() => updateCartQuantity(item.id, -1)}
                                >
                                  -
                                </button>
                                <span className="fw-bold px-1 small">{item.quantity}</span>
                                <button
                                  className="btn btn-outline-secondary btn-sm px-2 py-0"
                                  onClick={() => updateCartQuantity(item.id, 1)}
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="small fw-bold">
                              ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                            </td>
                            <td>
                              <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <i className="bi bi-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
              <div className="modal-footer d-flex justify-content-between">
                {cart.length > 0 ? (
                  <>
                    <button className="btn btn-sm btn-outline-secondary" onClick={clearCart}>
                      Clear Cart
                    </button>
                    <div className="d-flex align-items-center gap-3">
                      <h5 className="mb-0 fw-bold">
                        Total: <span className="text-danger">${cartTotal.toFixed(2)}</span>
                      </h5>
                      <button
                        className="btn btn-danger btn-sm px-4 fw-bold"
                        onClick={() => {
                          showToast('Order placed successfully! Thank you for purchasing.');
                          clearCart();
                          setIsCartModalOpen(false);
                        }}
                      >
                        Checkout
                      </button>
                    </div>
                  </>
                ) : (
                  <button className="btn btn-dark btn-sm w-100" onClick={() => setIsCartModalOpen(false)}>
                    Continue Shopping
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Wishlist Modal */}
      {isWishlistModalOpen && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 10500 }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0 shadow">
              <div className="modal-header bg-black text-white">
                <h5 className="modal-title fw-bold">
                  <i className="bi bi-heart-fill text-danger me-2"></i> My Wishlist ({wishlist.length})
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setIsWishlistModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body p-4" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                {wishlist.length === 0 ? (
                  <div className="text-center py-5">
                    <i className="bi bi-heartbreak text-muted display-4"></i>
                    <p className="mt-3 text-secondary">Your wishlist is empty!</p>
                  </div>
                ) : (
                  <div className="row row-cols-1 row-cols-md-2 g-3">
                    {wishlist.map((item) => (
                      <div key={item.id} className="col">
                        <div className="card h-100 p-2 d-flex flex-row align-items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.title}
                            style={{ width: '70px', height: '70px', objectFit: 'contain' }}
                          />
                          <div className="flex-grow-1">
                            <h6 className="small fw-bold mb-1 text-truncate" style={{ maxWidth: '180px' }}>
                              {item.title}
                            </h6>
                            <span className="text-danger fw-bold small">${item.price}</span>
                            <div className="mt-2 d-flex gap-2">
                              <button
                                className="btn btn-danger btn-sm extra-small py-1 px-2"
                                onClick={() => addToCart(item)}
                              >
                                <i className="bi bi-cart-plus me-1"></i> Add to Cart
                              </button>
                              <button
                                className="btn btn-outline-secondary btn-sm extra-small py-1 px-2"
                                onClick={() => toggleWishlist(item)}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      {isAuthModalOpen && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 10500 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow">
              <div className="modal-header bg-black text-white">
                <h5 className="modal-title fw-bold">
                  {user ? 'My Profile' : authMode === 'login' ? 'Login to AutoHive' : 'Create an Account'}
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setIsAuthModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body p-4">
                {user ? (
                  <div className="text-center py-3">
                    <div className="display-4 text-danger mb-2">
                      <i className="bi bi-person-circle"></i>
                    </div>
                    <h5 className="fw-bold">{user.name}</h5>
                    <p className="text-secondary small">{user.email}</p>
                    <button className="btn btn-outline-danger btn-sm px-4 mt-3" onClick={logout}>
                      <i className="bi bi-box-arrow-right me-1"></i> Logout
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleAuthSubmit}>
                    {authMode === 'register' && (
                      <div className="mb-3">
                        <label className="form-label small fw-semibold">Full Name</label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="e.g. John Doe"
                          value={authName}
                          onChange={(e) => setAuthName(e.target.value)}
                          required
                        />
                      </div>
                    )}
                    <div className="mb-3">
                      <label className="form-label small fw-semibold">Email Address</label>
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        placeholder="name@example.com"
                        value={authEmail}
                        onChange={(e) => setAuthEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label small fw-semibold">Password</label>
                      <input
                        type="password"
                        className="form-control form-control-sm"
                        placeholder="••••••••"
                        value={authPassword}
                        onChange={(e) => setAuthPassword(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-danger btn-sm w-100 fw-bold py-2 mt-2">
                      {authMode === 'login' ? 'Sign In' : 'Register Now'}
                    </button>
                    <div className="text-center mt-3 small">
                      {authMode === 'login' ? (
                        <span>
                          Don't have an account?{' '}
                          <a
                            href="#register"
                            className="text-danger fw-bold text-decoration-none"
                            onClick={(e) => {
                              e.preventDefault();
                              setAuthMode('register');
                            }}
                          >
                            Sign Up
                          </a>
                        </span>
                      ) : (
                        <span>
                          Already registered?{' '}
                          <a
                            href="#login"
                            className="text-danger fw-bold text-decoration-none"
                            onClick={(e) => {
                              e.preventDefault();
                              setAuthMode('login');
                            }}
                          >
                            Sign In
                          </a>
                        </span>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modals;