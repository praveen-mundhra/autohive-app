import React, { useState } from 'react';
import Navbar from './navbar';
import HeroDisplay from './HeroDisplay';
import './css/HeaderSection.css';

const HeaderSection = () => {
  // State shared between Navbar and HeroDisplay
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);

  const toggleCategory = () => {
    setIsCategoryOpen((prev) => !prev);
  };

  return (
    <div className="header-section-wrapper">
      {/* Navbar with Category Toggle Handler passed as props */}
      <Navbar 
        isCategoryOpen={isCategoryOpen} 
        onToggleCategory={toggleCategory} 
      />

      {/* Main Body Layout */}
      <div className="container-fluid px-4 mt-3">
        <div className="d-flex flex-column flex-lg-row gap-3 align-items-start">
        

          {/* Right Hero Display - Takes Remaining Width Dynamically */}
          <div className="hero-content-col flex-grow-1 w-100">
            <HeroDisplay />
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeaderSection;