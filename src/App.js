import React from 'react';
import TopHeader from './components/Top-Header';
import Header from './components/Header-section';
import VehicleFilter from './components/VehicleFilter';
import ProductCard from './components/ProductCard';
import FeaturedProducts from './components/FeaturedProducts';
import FlashSales from './components/FlashSales';
import Offer from './components/Offer';
import BestSelling from './components/BestSelling';
import BrandNewsletter from './components/BrandNewsletter';
import WeeklyCategories from './components/WeeklyCategories';
import './App.css';

function App() {
  return (
    <div className="bg-light min-vh-100 pb-5">
      <div className="container-xl bg-white shadow-sm p-0 my-0 my-md-3">
        <TopHeader />
        <Header />
        <VehicleFilter />
        <ProductCard />
        <FeaturedProducts />
        <FlashSales /> 
        <Offer />
        <BestSelling />
        <BrandNewsletter />
        {/* <WeeklyCategories /> */}
      </div>
    </div>
  );
}

export default App;