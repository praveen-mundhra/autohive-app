import React from 'react';
import { useShop } from '../context/ShopContext';
import './css/Products.css';

const vehiclePartCategories = [
  {
    id: 1,
    title: 'Aluminium Wheels & Rims',
    categoryFilter: 'Tires & Wheels',
    tagline: 'Precision Grip & High-Performance Alloys',
    description:
      'Engineered for maximum road traction, stability, and fuel economy. Includes forged aluminum rims, all-weather performance tires, wheel balancing hubs, and TPMS sensors.',
    specs: ['Alloy & Forged Options', 'All-Season Tread Compound', 'TPMS Compatible', '5-Year Warranty'],
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786530587/image-removebg-preview_29_nmw3za.png',
    startingPrice: '$480.00'
  },
  {
    id: 9,
    title: 'Ceramic Disc Brake Pads',
    categoryFilter: 'Brakes & Suspension',
    tagline: 'Reliable Stopping Power & Dynamic Handling',
    description:
      'Maintain vehicle control and passenger safety with ceramic brake pads, slotted disc rotors, shock absorbers, coilover kits, and stabilizer links.',
    specs: ['Low-Dust Ceramic Formula', 'Heat-Treated Steel Rotors', 'OEM Precision Fit', 'Anti-Rattle Clips Included'],
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786532876/image-removebg-preview_38_pdx5xu.png',
    startingPrice: '$95.00'
  },
  {
    id: 4,
    title: 'Iridium Spark Plug Kit',
    categoryFilter: 'Engine & Drivetrain',
    tagline: 'Core Power, Ignition & Transmission',
    description:
      'Maximize horsepower and combustion efficiency. Explore iridium spark plug kits, heavy-duty alternators, timing belts, synthetic lubricants, and pistons.',
    specs: ['Iridium & Platinum Cores', 'High Output Ignition', 'Full Synthetic Formulations', 'ISO 9001 Certified'],
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786531355/image-removebg-preview_33_djspg2.png',
    startingPrice: '$70.00'
  },
  {
    id: 11,
    title: 'LED Front Headlight Kit',
    categoryFilter: 'Headlights & Lighting',
    tagline: 'Ultra-Bright LED Projectors & Fog Lights',
    description:
      'Improve nighttime visibility and styling with plug-and-play LED conversions, xenon projector assemblies, daytime running lights (DRL), and tail lamps.',
    specs: ['6000K Cool White Output', 'IP68 Waterproof Housing', '50,000+ Hour Lifespan', 'CANbus Error-Free'],
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787658896/71pVVMK46zL._AC_UF1000_1000_QL80__nva0jb.jpg',
    startingPrice: '$140.00'
  },
  {
    id: 7,
    title: 'All-Weather Floor Mats',
    categoryFilter: 'Interior Parts',
    tagline: 'Cabin Luxury, Protection & Ergonomics',
    description:
      'Upgrade passenger comfort and interior longevity with laser-measured all-weather floor mats, breathable leather seat covers, steering grips, and cabin air filtration.',
    specs: ['Custom-Fit 3D Contours', 'Odorless All-Weather TPE', 'Waterproof & Stain Resistant', 'Easy Clean Surfaces'],
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786531247/image-removebg-preview_32_qkdax8.png',
    startingPrice: '$160.00'
  },
  {
    id: 3,
    title: '20V Cordless Impact Wrench',
    categoryFilter: 'Power Tools',
    tagline: 'Professional Garage Equipment & Diagnostics',
    description:
      'Essential repair tools including cordless 20V brushless impact wrenches, torque ratchets, digital tire inflators, OBD2 diagnostic scanners, and mechanics toolkits.',
    specs: ['Brushless High-Torque Motors', 'Long-Life Lithium-Ion Packs', 'Ergonomic Non-Slip Grips', 'Heavy-Duty Carry Case'],
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786531759/image-removebg-preview_34_zb4vfv.png',
    startingPrice: '$160.00'
  }
];

const Products = () => {
  const { setActiveCategory, setActiveNav, showToast } = useShop();

  const handleNavigateToShop = (categoryFilter) => {
    setActiveCategory(categoryFilter);
    setActiveNav('Shop');
    showToast(`Showing ${categoryFilter} in Shop...`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="products-page-wrapper w-100 py-4 px-3 px-md-4">
      {/* Header Banner */}
      <div className="bg-dark text-white p-4 p-md-5 rounded shadow-sm mb-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <div>
            <span className="text-danger fw-bold text-uppercase small tracking-wide">
              AutoHive Catalog
            </span>
            <h2 className="fw-bold mt-1 mb-1">Vehicle Parts &amp; Technical Specifications</h2>
            <p className="text-secondary small mb-0">
              Home / <span className="text-danger fw-semibold">Products Overview</span>
            </p>
          </div>
          <span className="badge bg-danger px-3 py-2 text-uppercase align-self-start align-self-md-center">
            OEM &amp; Aftermarket Guide
          </span>
        </div>
      </div>

      {/* Product Information Cards Grid */}
      <div className="row g-4 mb-5">
        {vehiclePartCategories.map((part) => (
          <div key={part.id} className="col-12 col-lg-6 d-flex">
            <div className="card product-spec-card w-100 border-0 shadow-sm rounded p-4 bg-white d-flex flex-column justify-content-between">
              <div className="row g-3 align-items-center mb-3">
                {/* Product Image Column */}
                <div className="col-12 col-sm-5 text-center">
                  <div className="product-spec-img-box rounded d-flex align-items-center justify-content-center p-3">
                    <img
                      src={part.image}
                      alt={part.title}
                      className="img-fluid product-spec-img"
                    />
                  </div>
                  <span className="badge bg-dark mt-2 extra-small text-uppercase">
                    Starting at {part.startingPrice}
                  </span>
                </div>

                {/* Product Details Column */}
                <div className="col-12 col-sm-7">
                  <span className="text-danger fw-bold extra-small text-uppercase d-block mb-1">
                    {part.tagline}
                  </span>
                  <h5 className="fw-bold text-dark mb-2">{part.title}</h5>
                  <p className="text-secondary extra-small leading-relaxed mb-3">
                    {part.description}
                  </p>

                  {/* Bulleted Specifications */}
                  <div className="specs-box p-2 rounded mb-1">
                    {part.specs.map((spec, i) => (
                      <div key={i} className="d-flex align-items-center gap-2 extra-small text-dark mb-1">
                        <i className="bi bi-check-circle-fill text-danger extra-small"></i>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Shop CTA */}
              <div className="pt-3 border-top mt-auto">
                <button
                  type="button"
                  className="btn btn-danger btn-sm w-100 fw-bold py-2 d-flex align-items-center justify-content-center gap-2 shadow-sm"
                  onClick={() => handleNavigateToShop(part.categoryFilter)}
                >
                  <span>Find {part.title} in Shop</span>
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;