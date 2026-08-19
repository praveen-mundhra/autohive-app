import React, { useState, useRef, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import './css/Navbar.css';

const Navbar = () => {
  const {
    cartCount,
    wishlist,
    searchQuery,
    setSearchQuery,
    setIsCartModalOpen,
    setIsWishlistModalOpen,
    setActiveCategory,
    activeNav,
    setActiveNav,
    showToast
  } = useShop();

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const categoryRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleCategory = () => {
    setIsCategoryOpen((prev) => !prev);
  };

  const handleCategorySelect = (categoryName) => {
    setActiveCategory(categoryName);
    setIsCategoryOpen(false);
    setActiveNav('Shop');
    showToast(`Filtering parts for: ${categoryName}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (navName) => {
    setActiveNav(navName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-0 position-relative">
      <div className="container-fluid px-0">
        
        {/* Category Dropdown */}
        <div className="category-dropdown-container position-relative" ref={categoryRef}>
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
            <i className={`bi bi-chevron-down transition-icon ${isCategoryOpen ? 'rotate-180' : ''}`}></i>
          </button>

          {isCategoryOpen && (
            <ul className="category-menu list-group position-absolute top-100 start-0 w-100 rounded-0 shadow border-0 m-0 py-0 z-3">
              {categories.map((item, index) => (
                <li 
                  key={index} 
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 py-2.5 px-3 pointer"
                  onClick={() => handleCategorySelect(item)}
                >
                  <span>{item}</span>
                  <i className="bi bi-chevron-right text-muted extra-small"></i>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Links or Search Bar */}
        <div className="collapse navbar-collapse px-4" id="mainNavbar">
          {isSearchActive ? (
            <div className="d-flex align-items-center flex-grow-1 me-4 my-2 my-lg-0">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-danger form-control-sm"
                  placeholder="Search parts by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button
                  className="btn btn-danger btn-sm px-3"
                  type="button"
                  onClick={() => {
                    setIsSearchActive(false);
                    setSearchQuery('');
                  }}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            </div>
          ) : (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-2">
              {navLinks.map((link) => (
                <li key={link} className="nav-item">
                  <button
                    type="button"
                    className={`nav-link btn btn-link text-decoration-none fw-medium ${
                      activeNav === link ? 'active-nav-link text-danger' : 'text-dark'
                    }`}
                    onClick={() => handleNavClick(link)}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Action Icons */}
          <div className="d-flex align-items-center gap-3 pe-4 ms-auto">
            <button 
              type="button"
              className="btn btn-light rounded-circle p-2 icon-btn" 
              aria-label="Search"
              onClick={() => setIsSearchActive(!isSearchActive)}
            >
              <i className="bi bi-search"></i>
            </button>

            <div className="position-relative">
              <button 
                type="button"
                className="btn btn-light rounded-circle p-2 icon-btn" 
                aria-label="Cart"
                onClick={() => setIsCartModalOpen(true)}
              >
                <i className="bi bi-bag"></i>
              </button>
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger extra-small-badge">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </div>

            <div className="position-relative">
              <button 
                type="button"
                className="btn btn-light rounded-circle p-2 icon-btn" 
                aria-label="Wishlist"
                onClick={() => setIsWishlistModalOpen(true)}
              >
                <i className="bi bi-heart"></i>
              </button>
              {wishlist.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger extra-small-badge">
                  {wishlist.length}
                </span>
              )}
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;