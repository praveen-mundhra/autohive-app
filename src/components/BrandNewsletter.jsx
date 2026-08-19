import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import './css/BrandNewsletter.css';

const BrandNewsletter = () => {
  const { showToast } = useShop();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please provide a valid email address.');
      return;
    }
    showToast(`Subscribed successfully! Confirmation sent to ${email} 🎁`);
    setEmail('');
  };

  return (
    <section className="brand-newsletter-section my-5">
      <div className="row g-0">
        <div className="col-md-6 bg-dark text-white p-5 d-flex flex-column justify-content-between">
          <div>
            <h4 className="fw-bold mb-2">Brand We Trust</h4>
            <p className="text-secondary extra-small mb-3">
              We carry over 250 of the world's highest quality automotive parts
            </p>
            <a
              href="#brands"
              className="text-danger extra-small text-decoration-none fw-semibold pointer"
              onClick={(e) => {
                e.preventDefault();
                showToast('Browsing all 250+ Certified Brands');
              }}
            >
              <i className="bi bi-tag-fill me-1"></i> Browse All Brands
            </a>
          </div>

          <div className="d-flex flex-wrap align-items-center justify-content-between mt-4 brand-logos opacity-75">
            <span className="fw-extrabold tracking-wider fs-6 pointer" onClick={() => showToast('Filtered Nissan Parts')}>NISSAN</span>
            <span className="fw-bold fs-6 pointer" onClick={() => showToast('Filtered Acura Parts')}>ACURA</span>
            <span className="fw-bold fst-italic fs-6 pointer" onClick={() => showToast('Filtered Ferrari Parts')}>Ferrari</span>
            <span className="fw-bold fs-6 pointer" onClick={() => showToast('Filtered Hyundai Parts')}>HYUNDAI</span>
          </div>
        </div>

        <div className="col-md-6 bg-danger text-white p-5 d-flex flex-column justify-content-center">
          <span className="extra-small text-uppercase fw-semibold mb-1">
            Subscribe To Our Newsletter!
          </span>
          <h3 className="fw-bold mb-4">Get The Latest News &amp; Amazing Offers</h3>

          <form onSubmit={handleSubscribe}>
            <div className="input-group mb-2 newsletter-input">
              <input
                type="email"
                className="form-control border-0 px-3 py-2 text-dark"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="btn btn-dark fw-bold px-4 text-uppercase extra-small"
              >
                Subscribe
              </button>
            </div>
          </form>
          <span className="extra-small opacity-75">We don't send spam message</span>
        </div>
      </div>
    </section>
  );
};

export default BrandNewsletter;