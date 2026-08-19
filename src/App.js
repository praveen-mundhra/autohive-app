import React from 'react';
import { useShop } from './context/ShopContext';
import HeaderSection from './components/Header-section';
import HeroDisplay from './components/HeroDisplay';
import VehicleFilter from './components/VehicleFilter';
import FeaturedProducts from './components/FeaturedProducts';
import FlashSales from './components/FlashSales';
import BestSelling from './components/BestSelling';
import BrandNewsletter from './components/BrandNewsletter';
import WeeklyCategories from './components/WeeklyCategories';
import Footer from './components/Footer';
import Modals from './components/Modals';
import Shop from './components/Shop';
import './App.css';

function App() {
  const { activeNav, setActiveNav } = useShop();

  // Dynamic View Switcher
  const renderContent = () => {
    switch (activeNav) {
      case 'Shop':
      case 'Products':
        return <Shop />;

      case 'Blog':
        return (
          <div className="p-5 text-center bg-white border rounded shadow-sm my-4">
            <h2 className="fw-bold text-dark">Latest Automotive News &amp; Articles</h2>
            <p className="text-secondary small">Explore car maintenance guides, tuning tutorials, and expert tips.</p>
            <button className="btn btn-danger btn-sm px-4 fw-bold mt-2" onClick={() => setActiveNav('Shop')}>
              Go to Shop
            </button>
          </div>
        );

      case 'Page':
        return (
          <div className="p-5 text-center bg-white border rounded shadow-sm my-4">
            <h2 className="fw-bold text-dark">Custom Pages &amp; Services</h2>
            <p className="text-secondary small">Information regarding warranties, OEM certification, and global shipping.</p>
            <button className="btn btn-dark btn-sm px-4 fw-bold mt-2" onClick={() => setActiveNav('Home')}>
              Back to Home
            </button>
          </div>
        );

      case 'Home':
      default:
        return (
          <>
            <HeroDisplay />
            <VehicleFilter />
            <FeaturedProducts />
            <FlashSales />
            <BestSelling />
            <BrandNewsletter />
            <WeeklyCategories />
          </>
        );
    }
  };

  return (
    <div className="bg-light min-vh-100">
      <div className="container-xl bg-white shadow-sm p-0 my-0 my-md-3">
        {/* Universal Header & Navbar */}
        <HeaderSection />

        {/* Dynamic Page Body */}
        {renderContent()}

        {/* Universal Footer */}
        <Footer />
      </div>

      {/* Cart, Wishlist, Auth & Toast Dialogs */}
      <Modals />
    </div>
  );
}

export default App;