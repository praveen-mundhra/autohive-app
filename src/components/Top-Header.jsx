import React from 'react';
import logo from '../assets/logo.png';
import './css/Top-Header.css';

const Header = () => {
  return (
    <header className="w-100">
      {/* Top Bar */}
      <div className="bg-black text-white px-4 py-2 d-flex justify-content-between align-items-center border-bottom border-dark">
        <div className="fw-bold fs-4 tracking-wider">
          <img src={logo} alt="AUTOHIVE" />
          {/* <h3>AUTO<span className="text-danger">HIVE</span></h3> */}
          
        </div>

       <div className="detail">
        <div className="d-flex align-items-center gap-5 text-secondary small">
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-telephone-fill text-danger"></i>
            <div>
              <p className="fw-semibold text-white mb-0 small">Head Office</p>
              <p className="text-secondary mb-0 extra-small">96 Queen Park, New York</p>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-clock-fill text-danger"></i>
            <div>
              <p className="fw-semibold text-white mb-0 small">Open Hours</p>
              <p className="text-secondary mb-0 extra-small">Mon - Sat: 9.30 to 16.00</p>
            </div>
          </div>

          <button className="btn btn-danger btn-sm fw-semibold text-white">
            Register Now
          </button>
        </div>
       </div> 
      </div>
    </header>
  );
};

export default Header;