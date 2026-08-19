import React from 'react';
import TopHeader from './Top-Header';
import Navbar from './navbar';

const HeaderSection = () => {
  return (
    <header className="w-100">
      <TopHeader />
      <Navbar />
    </header>
  );
};

export default HeaderSection;