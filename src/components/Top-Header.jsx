import React from 'react';
import logo from '../assets/logo.png';
import { useShop } from '../context/ShopContext';
import './css/Top-Header.css';

const Header = () => {
  const { user, setIsAuthModalOpen } = useShop();

  return (
    <header className="w-100 top-header-bar">
      {/* Top Bar */}
      <div className="bg-black text-white px-4 py-2 d-flex justify-content-between align-items-center border-bottom border-dark">
        {/* Logo / Brand */}
        <div 
          className="fw-bold fs-4 tracking-wider pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="AutoHive Home"
        >
          <img src={logo} alt="AUTOHIVE" style={{ height: '45px', objectFit: 'contain' }} />
        </div>

        {/* Header Details */}
        <div className="detail">
          <div className="d-flex align-items-center gap-4 text-secondary small">
            {/* Head Office Info */}
            <div className="d-none d-md-flex align-items-center gap-3">
              <i className="bi bi-telephone-fill text-danger fs-5"></i>
              <div>
                <p className="fw-semibold text-white mb-0 small">Head Office</p>
                <p className="text-secondary mb-0 extra-small">96 Queen Park, New York</p>
              </div>
            </div>

            {/* Open Hours Info */}
            <div className="d-none d-md-flex align-items-center gap-3">
              <i className="bi bi-clock-fill text-danger fs-5"></i>
              <div>
                <p className="fw-semibold text-white mb-0 small">Open Hours</p>
                <p className="text-secondary mb-0 extra-small">Mon - Sat: 9.30 to 16.00</p>
              </div>
            </div>

            {/* Dynamic Auth Button / User Profile */}
            {user ? (
              <div
                className="d-flex align-items-center gap-2 pointer text-white bg-dark px-3 py-1.5 rounded border border-secondary"
                onClick={() => setIsAuthModalOpen(true)}
                title="View Profile / Logout"
              >
                <i className="bi bi-person-check-fill text-danger fs-6"></i>
                <span className="fw-semibold small">{user.name}</span>
              </div>
            ) : (
              <button 
                type="button"
                className="btn btn-danger btn-sm fw-semibold text-white px-3 py-1.5 shadow-sm"
                onClick={() => setIsAuthModalOpen(true)}
              >
                Register Now
              </button>
            )}
          </div>
        </div> 
      </div>
    </header>
  );
};

export default Header;