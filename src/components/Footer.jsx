import React from 'react';
import { useShop } from '../context/ShopContext';
import './css/Footer.css';

const Footer = () => {
  const { showToast } = useShop();

  const handleLinkClick = (e, name) => {
    e.preventDefault();
    showToast(`Navigating to ${name}`);
  };

  return (
    <footer className="footer-container bg-black text-white pt-5 pb-3">
      <div className="container-xl px-4">
        <div className="row g-4 pb-5 border-bottom border-dark">
          {/* Column 1: Brand Info */}
          <div className="col-lg-4 col-md-6">
            <div className="fw-bold fs-4 tracking-wider mb-3">
              <span>AUTO</span>
              <span className="text-danger">HIVE</span>
            </div>
            <p className="text-secondary extra-small leading-relaxed mb-4 col-md-10">
              Continually leverage other's adaptive synergy without visionary customer service. High-quality vehicle replacement parts and accessories.
            </p>
            
            <div className="d-flex flex-column gap-2 text-secondary extra-small">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-geo-alt-fill text-danger"></i>
                <span>96 Queen Park, New York, NY 10001</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-telephone-fill text-danger"></i>
                <span>+1 800 123 4567</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-envelope-fill text-danger"></i>
                <span>support@autohive.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Information */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold text-white mb-3 text-uppercase small">Information</h6>
            <ul className="list-unstyled footer-links extra-small d-flex flex-column gap-2 mb-0">
              <li><a href="#about" onClick={(e) => handleLinkClick(e, 'About Us')}>About Us</a></li>
              <li><a href="#delivery" onClick={(e) => handleLinkClick(e, 'Delivery Info')}>Delivery Information</a></li>
              <li><a href="#privacy" onClick={(e) => handleLinkClick(e, 'Privacy Policy')}>Privacy Policy</a></li>
              <li><a href="#terms" onClick={(e) => handleLinkClick(e, 'Terms & Conditions')}>Terms &amp; Conditions</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'Contact Us')}>Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold text-white mb-3 text-uppercase small">Quick Links</h6>
            <ul className="list-unstyled footer-links extra-small d-flex flex-column gap-2 mb-0">
              <li><a href="#account" onClick={(e) => handleLinkClick(e, 'My Account')}>My Account</a></li>
              <li><a href="#orders" onClick={(e) => handleLinkClick(e, 'Order History')}>Order History</a></li>
              <li><a href="#wishlist" onClick={(e) => handleLinkClick(e, 'Wishlist')}>Wish List</a></li>
              <li><a href="#newsletter" onClick={(e) => handleLinkClick(e, 'Newsletter')}>Newsletter</a></li>
              <li><a href="#returns" onClick={(e) => handleLinkClick(e, 'Returns & Exchanges')}>Returns &amp; Exchanges</a></li>
            </ul>
          </div>

          {/* Column 4: Top Categories */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold text-white mb-3 text-uppercase small">Categories</h6>
            <ul className="list-unstyled footer-links extra-small d-flex flex-column gap-2 mb-0">
              <li><a href="#lighting" onClick={(e) => handleLinkClick(e, 'Lighting')}>Headlights &amp; Lighting</a></li>
              <li><a href="#tires" onClick={(e) => handleLinkClick(e, 'Tires & Wheels')}>Tires &amp; Wheels</a></li>
              <li><a href="#engine" onClick={(e) => handleLinkClick(e, 'Engine')}>Engine &amp; Drivetrain</a></li>
              <li><a href="#brakes" onClick={(e) => handleLinkClick(e, 'Brakes')}>Brakes &amp; Suspension</a></li>
              <li><a href="#interior" onClick={(e) => handleLinkClick(e, 'Interior')}>Interior Accessories</a></li>
            </ul>
          </div>

          {/* Column 5: Social Icons */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold text-white mb-3 text-uppercase small">Follow Us</h6>
            <div className="d-flex gap-2 mb-4">
              <a href="#fb" className="social-icon-btn" onClick={(e) => handleLinkClick(e, 'Facebook')}><i className="bi bi-facebook"></i></a>
              <a href="#tw" className="social-icon-btn" onClick={(e) => handleLinkClick(e, 'Twitter')}><i className="bi bi-twitter-x"></i></a>
              <a href="#ig" className="social-icon-btn" onClick={(e) => handleLinkClick(e, 'Instagram')}><i className="bi bi-instagram"></i></a>
              <a href="#yt" className="social-icon-btn" onClick={(e) => handleLinkClick(e, 'YouTube')}><i className="bi bi-youtube"></i></a>
            </div>

            <h6 className="fw-bold text-white mb-2 text-uppercase extra-small">Customer Service</h6>
            <p className="text-secondary extra-small mb-0">Mon - Sat: 9.30 to 16.00</p>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-4 extra-small text-secondary">
          <p className="mb-2 mb-md-0">
            &copy; 2026  <span className="text-white fw-bold">AUTOHIVE</span>.  All Rights Reserved.
          </p>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;