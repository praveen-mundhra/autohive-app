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
import Products from './components/Products';
import Blog from './components/Blog';
import Page from './components/Page';
import './App.css';

function App() {
  const { activeNav } = useShop();

  const renderContent = () => {
    switch (activeNav) {
      case 'Shop':
        return <Shop />;
      case 'Products':
        return <Products />;
      case 'Blog':
        return <Blog />;
      case 'Page':
        return <Page />;
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

        {/* Dynamic Page Section */}
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