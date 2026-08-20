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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const categoryRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
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
    setIsMobileMenuOpen(false);
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
        
        {/* ================= DESKTOP: Category Dropdown ================= */}
        <div className="d-none d-lg-block category-dropdown-container position-relative" ref={categoryRef}>
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

        {/* ================= MOBILE: Left Hamburger Menu & Right Icons ================= */}
        <div className="d-flex d-lg-none w-100 align-items-center justify-content-between px-3 py-2">
          {/* Left More Options Button */}
          <button
            type="button"
            className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1 fw-bold mobile-menu-toggle-btn"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Toggle navigation menu"
          >
            <i className="bi bi-list fs-5"></i>
            <span className="small text-uppercase">Menu</span>
          </button>

          {/* Right Smaller Action Buttons */}
          <div className="d-flex align-items-center gap-2">
            <button 
              type="button"
              className="btn btn-light rounded-circle p-1 icon-btn-sm" 
              aria-label="Search"
              onClick={() => setIsSearchActive(!isSearchActive)}
              title="Search"
            >
              <i className="bi bi-search small"></i>
            </button>

            <div className="position-relative">
              <button 
                type="button"
                className="btn btn-light rounded-circle p-1 icon-btn-sm" 
                aria-label="Cart"
                onClick={() => setIsCartModalOpen(true)}
                title="View Cart"
              >
                <i className="bi bi-bag small"></i>
              </button>
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger extra-small-badge-sm">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </div>

            <div className="position-relative">
              <button 
                type="button"
                className="btn btn-light rounded-circle p-1 icon-btn-sm" 
                aria-label="Wishlist"
                onClick={() => setIsWishlistModalOpen(true)}
                title="View Favorites"
              >
                <i className="bi bi-heart small"></i>
              </button>
              {wishlist.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger extra-small-badge-sm">
                  {wishlist.length}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ================= MOBILE: Search Input Bar ================= */}
        {isSearchActive && (
          <div className="d-lg-none w-100 px-3 pb-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control border-danger form-control-sm"
                placeholder="Search automotive parts..."
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
        )}

        {/* ================= MOBILE: Left Slide-out Drawer ================= */}
        {isMobileMenuOpen && (
          <div className="mobile-drawer-backdrop d-lg-none">
            <div className="mobile-drawer-content bg-white shadow-lg h-100 p-0" ref={mobileMenuRef}>
              <div className="d-flex justify-content-between align-items-center p-3 bg-black text-white">
                <span className="fw-bold fs-6">Navigation</span>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                ></button>
              </div>

              <ul className="list-group list-group-flush pt-2">
                {navLinks.map((link) => (
                  <li key={link} className="list-group-item border-0 px-0 py-0">
                    <button
                      type="button"
                      className={`btn w-100 text-start px-4 py-3 border-0 d-flex justify-content-between align-items-center rounded-0 ${
                        activeNav === link
                          ? 'bg-danger text-white fw-bold'
                          : 'text-dark bg-transparent'
                      }`}
                      onClick={() => handleNavClick(link)}
                    >
                      <span>{link}</span>
                      <i className={`bi bi-chevron-right extra-small ${activeNav === link ? 'text-white' : 'text-muted'}`}></i>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* ================= DESKTOP: Navbar Links & Icons ================= */}
        <div className="collapse navbar-collapse px-4 d-none d-lg-flex" id="mainNavbar">
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

          {/* Desktop Right Action Icons */}
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