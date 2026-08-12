import React, { useState } from 'react';
import './css/Navbar.css';

const Navbar = () => {
  // 1. State to toggle Product Category open/closed
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // 2. State to track the active Nav Link
  const [activeNav, setActiveNav] = useState('Home');

  // Toggle Category Menu
  const toggleCategory = () => {
    setIsCategoryOpen((prev) => !prev);
  };

  // Handle Nav Link Click
  const handleNavClick = (navName) => {
    setActiveNav(navName);
  };

  const categories = [
    'Headlights & Lighting',
    'Interior Parts',
    'Switches & Relays',
    'Tires & Wheels',
    'Fuel Systems',
    'Steering',
    'Body Parts',
    'Air Filters',
    'Wipers & Washers',
  ];

  const navLinks = ['Home', 'Shop', 'Products', 'Blog', 'Page'];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-0">
      <div className="container-fluid px-0">
        
        {/* --- Product Category Toggle Section --- */}
        <div className="category-dropdown-container position-relative">
          <button 
            type="button"
            className={`btn btn-danger text-white fw-bold d-flex align-items-center justify-content-between px-4 py-4 rounded-0 border-0 w-100 ${isCategoryOpen ? 'category-btn-active' : ''}`}
            onClick={toggleCategory}
            style={{ backgroundColor: '#ff002b' }}
          >
            <div className="d-flex align-items-center gap-3">
              <i className="bi bi-list fs-5"></i>
              <span className="tracking-wide">Product Category</span>
            </div>
            {/* Arrow icon that rotates on toggle */}
            <i className={`bi bi-chevron-down transition-icon ${isCategoryOpen ? 'rotate-180' : ''}`}></i>
          </button>

          {/* Toggleable Category Menu */}
          {isCategoryOpen && (
            <ul className="category-menu list-group position-absolute top-100 start-0 w-100 rounded-0 shadow border-0 m-0 py-0 z-3">
              {categories.map((item, index) => (
                <li key={index} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 py-2.5 px-3">
                  <span>{item}</span>
                  <i className="bi bi-chevron-right text-muted extra-small"></i>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* --- Navigation Links with Active State --- */}
        <div className="collapse navbar-collapse px-4" id="mainNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-2">
            {navLinks.map((link) => (
              <li key={link} className="nav-item">
                <button
                  type="button"
                  className={`nav-link btn btn-link text-decoration-none fw-medium ${
                    activeNav === link ? 'active-nav-link' : 'text-dark'
                  }`}
                  onClick={() => handleNavClick(link)}
                >
                 {link}  {/*  <i className="bi bi-chevron-down extra-small ms-1"></i> */}
                </button>
              </li>
            ))}
          </ul>

          {/* --- Right Side: Action Icons --- */}
          <div className="d-flex align-items-center gap-3 pe-4">
            <button className="btn btn-light rounded-circle p-2 icon-btn" aria-label="Search">
              <i className="bi bi-search"></i>
            </button>

            <div className="position-relative">
              <button className="btn btn-light rounded-circle p-2 icon-btn" aria-label="Cart">
                <i className="bi bi-bag"></i>
              </button>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger extra-small-badge">
                0
              </span>
            </div>

            <button className="btn btn-light rounded-circle p-2 icon-btn" aria-label="Wishlist">
              <i className="bi bi-heart"></i>
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;