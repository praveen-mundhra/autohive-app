import React, { useState, useMemo, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from './ProductCard';
// import './css/Shop.css';

const initialProducts = [
  {
    id: 1,
    title: 'Aluminium Wheel AR-19 Tire Parts',
    price: 480.0,
    oldPrice: 780.0,
    discount: '-38%',
    rating: 3.8,
    category: 'Tires & Wheels',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786530587/image-removebg-preview_29_nmw3za.png'
  },
  {
    id: 2,
    title: 'Glossy Gray 19" Aluminium Wheel AR-19',
    price: 380.0,
    oldPrice: 580.0,
    discount: '-30%',
    rating: 4.7,
    category: 'Tires & Wheels',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786531026/image-removebg-preview_31_jeziv0.png'
  },
  {
    id: 3,
    title: 'Electric Impact Wrench 20V Power Tool',
    price: 160.0,
    oldPrice: 250.0,
    discount: '-30%',
    rating: 3,
    category: 'Power Tools',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786531759/image-removebg-preview_34_zb4vfv.png'
  },
  {
    id: 4,
    title: 'Brandix Spark Plug Kit ASR-400',
    price: 70.0,
    oldPrice: 100.0,
    discount: '-30%',
    rating: 4,
    category: 'Engine & Drivetrain',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786531355/image-removebg-preview_33_djspg2.png'
  },
  {
    id: 5,
    title: 'Professional Ratchet Wrench Set',
    price: 45.0,
    oldPrice: 60.0,
    discount: '-25%',
    rating: 4,
    category: 'Hand Tool',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786532069/image-removebg-preview_36_swlhkp.png'
  },
  {
    id: 6,
    title: 'Cordless Rotary Drill Machine 18V',
    price: 210.0,
    oldPrice: 290.0,
    discount: '-27%',
    rating: 5,
    category: 'Power Tools',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786531901/image-removebg-preview_35_yxtznh.png'
  },
  {
    id: 7,
    title: 'Set of Car Floor Mats Brandix Z4',
    price: 160.0,
    oldPrice: 250.0,
    discount: '-30%',
    rating: 4.4,
    category: 'Interior Parts',
    inStock: false,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786531247/image-removebg-preview_32_qkdax8.png'
  },
  {
    id: 8,
    title: 'Car Alternator Vehicle Spare Part Automotive Engine',
    price: 780.0,
    oldPrice: 793.0,
    discount: '-30%',
    rating: 4,
    category: 'Engine & Drivetrain',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786543478/image-removebg-preview_42_cjqi9o.png'
  },
  {
    id: 9,
    title: 'High Performance Ceramic Disc Brake Pads',
    price: 95.0,
    oldPrice: 130.0,
    discount: '-27%',
    rating: 5,
    category: 'Brakes & Suspension',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=300'
  },
  {
    id: 10,
    title: 'Digital Tyre Inflator, Portable Air Compressor',
    price: 75.0,
    oldPrice: 110.0,
    discount: '-32%',
    rating: 4,
    category: 'Power Tools',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1786630099/71Nz0gpUXeL_xbwy8i.jpg'
  },
  {
    id: 11,
    title: 'Universal LED Front Headlight Projector Kit',
    price: 140.0,
    oldPrice: 200.0,
    discount: '-30%',
    rating: 5,
    category: 'Headlights & Lighting',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=300'
  },
  {
    id: 12,
    title: 'Full Synthetic Engine Motor Oil 5W-30 (5L)',
    price: 480.0,
    oldPrice: 650.0,
    discount: '-26%',
    rating: 4,
    category: 'Engine & Drivetrain',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787143636/61ZZtx5SzAL_l2mhyd.jpg'
  },
  {
    id: 13,
    title: 'Fuel D643 Contra Gloss Black Red Tinted Clear',
    price: 480.0,
    oldPrice: 780.0,
    discount: '-38%',
    rating: 4,
    category: 'Tires & Wheels',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787140982/shopping_m91cm4.webp'
  },
  {
    id: 14,
    title: 'Onyx 02 16 inch 5 Hole Gunmetal',
    price: 280.0,
    oldPrice: 580.0,
    discount: '-30%',
    rating: 4,
    category: 'Tires & Wheels',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/t_Onyx0216inch5HoleGunmetal/IMG_7416copy_i3rehr.jpg'
  },
  {
    id: 15,
    title: 'Pirelli P Zero 205/55R16 91V',
    price: 450.0,
    oldPrice: 780.0,
    discount: '-38%',
    rating: 4,
    category: 'Tires & Wheels',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787141488/shopping_xnyonb.webp'
  },
  {
    id: 16,
    title: 'Continental CONTI PREMIUM CONTACT',
    price: 300.0,
    oldPrice: 580.0,
    discount: '-30%',
    rating: 4,
    category: 'Tires & Wheels',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787141551/shopping_riczck.webp'
  },
  {
    id: 17,
    title: 'Maxxis Roxxzilla 32x10-r14 (Competition Compound) 8ply Rock Crawler ATV/UTV Tires',
    price: 480.0,
    oldPrice: 780.0,
    discount: '-38%',
    rating: 4,
    category: 'Tires & Wheels',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787141777/shopping_tp5y1e.webp'
  },
  {
    id: 18,
    title: 'AMERICAN RACING AR172 BAJA',
    price: 280.0,
    oldPrice: 580.0,
    discount: '-30%',
    rating: 4,
    category: 'Tires & Wheels',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787141838/shopping_wpt34x.webp'
  },
  {
    id: 19,
    title: 'Pirelli P ZERO',
    price: 850.0,
    oldPrice: 1280.0,
    discount: '-38%',
    rating: 4,
    category: 'Tires & Wheels',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787141899/shopping_uimdi8.webp'
  },
  {
    id: 20,
    title: '15 Aluminum Wheel Tire Set Light Auto InfinityInfiniti F10 GLRP 15-4.5 Gold Rim Poly 16555R15 Tire Set',
    price: 57.0,
    oldPrice: 980.0,
    discount: '-30%',
    rating: 4,
    category: 'Tires & Wheels',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787142047/shopping_qje8vv.webp'
  },
  {
    id: 21,
    title: 'DeWalt DCF922P2T-XE Impact Wrench Detent Pin Kit 18V XR Compact 1/2" DCF922P2T-XE',
    price: 160.0,
    oldPrice: 250.0,
    discount: '-30%',
    rating: 5,
    category: 'Power Tools',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787142456/710sfFkuMvL._SX522_b0ff840b-b5d3-4119-90c6-68180bda16c3_zcbdco.jpg'
  },
  {
    id: 22,
    title: 'BLACK+Decker KC4815 Cordless Screwdriver Set',
    price: 160.0,
    oldPrice: 250.0,
    discount: '-30%',
    rating: 5,
    category: 'Power Tools',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787142510/shopping_pkjife.webp'
  },
  {
    id: 23,
    title: 'Bosch GWS 600 Professional Angle Grinder',
    price: 110.0,
    oldPrice: 25.0,
    discount: '-30%',
    rating: 5,
    category: 'Power Tools',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787142585/shopping_ro1l1t.webp'
  },
  {
    id: 24,
    title: '46 in 1 Pcs Combination Wrench Set/Socket, Car&Bike Repairing Hand Tool Long Handle Kit 46pcs Combo Tools Repair Box for Spanner Force Kit, Tools Set',
    price: 35.0,
    oldPrice: 60.0,
    discount: '-25%',
    rating: 4,
    category: 'Hand Tool',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787142743/shopping_wxmyna.webp'
  },
  {
    id: 25,
    title: 'Total 10PCS 1/2" Socket Set THTL121101',
    price: 15.0,
    oldPrice: 60.0,
    discount: '-25%',
    rating: 3.5,
    category: 'Hand Tool',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787142817/shopping_d3ht1k.webp'
  },
  {
    id: 26,
    title: 'VOLTZ Tool Kit 216 Pcs Dr Socket Repair Tool kit Set Professional Ratchet Socket tool Set 1/2 1/4 3/8 Tools Toolbox With Heat Treatment & Chrome',
    price: 50.0,
    oldPrice: 60.0,
    discount: '-25%',
    rating: 4.3,
    category: 'Hand Tool',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787142879/shopping_zqsh2l.webp'
  },
  {
    id: 27,
    title: 'JPT 12-In-1 1/2" Ratchet Spanner Socket Set',
    price: 11.0,
    oldPrice: 40.0,
    discount: '-25%',
    rating: 3.6,
    category: 'Hand Tool',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787143004/shopping_pflgv6.webp'
  },
  {
    id: 28,
    title: '320-Piece Mechanics Tool Set, 1/4” 3/8” 1/2” Drive SAE & Metric Socket Set with 72-Tooth Ratchet,',
    price: 50.0,
    oldPrice: 60.0,
    discount: '-25%',
    rating: 4,
    category: 'Hand Tool',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787143076/81KsXNsp6sL_xocc9p.jpg'
  },
  {
    id: 29,
    title: '271860 High Speed Energy Saving Petrol Engine Assembly Compatible with Mercedes',
    price: 4800.0,
    oldPrice: 6500.0,
    discount: '-26%',
    rating: 4,
    category: 'Engine & Drivetrain',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787143295/shopping_efxk8f.webp'
  },
  {
    id: 30,
    title: 'BluePrint Engines SBC 350 Crate Engine 390 HP bp3505ctcd',
    price: 4500.0,
    oldPrice: 6000.0,
    discount: '-26%',
    rating: 3.1,
    category: 'Engine & Drivetrain',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787143397/shopping_tu8zwv.webp'
  },
  {
    id: 31,
    title: 'BMW Engine & Transmission For BMW 520I 2013-2015 N20B20B Complete',
    price: 2800.0,
    oldPrice: 7500.0,
    discount: '-26%',
    rating: 5,
    category: 'Engine & Drivetrain',
    inStock: true,
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787143496/shopping_ow1dun.webp'
  },
];

const categoryList = [
  'All',
  'Tires & Wheels',
  'Power Tools',
  'Hand Tool',
  'Engine & Drivetrain',
  'Interior Parts',
  'Brakes & Suspension',
  'Headlights & Lighting'
];

const Shop = () => {
  const { searchQuery, setSearchQuery, activeCategory, setActiveCategory } = useShop();

  const [maxPrice, setMaxPrice] = useState(10000);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Sync if category changed via navbar
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const filteredProducts = useMemo(() => {
    return initialProducts
      .filter((product) => {
        const matchesSearch = product.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesCategory =
          activeCategory === 'All' || product.category === activeCategory;
        const matchesPrice = product.price <= maxPrice;
        const matchesStock = inStockOnly ? product.inStock : true;
        const matchesRating = product.rating >= minRating;

        return (
          matchesSearch &&
          matchesCategory &&
          matchesPrice &&
          matchesStock &&
          matchesRating
        );
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return a.id - b.id;
      });
  }, [searchQuery, activeCategory, maxPrice, inStockOnly, minRating, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleResetFilters = () => {
    setActiveCategory('All');
    setMaxPrice(10000);
    setInStockOnly(false);
    setMinRating(0);
    setSortBy('default');
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <div className="shop-content-area w-100 py-3">
      {/* Banner */}
      <div className="bg-dark text-white py-4 px-4 mb-4 rounded">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h3 className="fw-bold mb-1">Shop Parts &amp; Accessories</h3>
            <span className="text-secondary small">
              Home / <span className="text-danger">Shop</span>
            </span>
          </div>
          <span className="badge bg-danger px-3 py-2">
            {filteredProducts.length} Items Found
          </span>
        </div>
      </div>

      <div className="row g-4">
        {/* Filter Sidebar */}
        <aside className="col-lg-3">
          <div className="shop-sidebar bg-white p-4 border rounded shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold text-dark mb-0">Filters</h5>
              <button
                className="btn btn-link text-danger p-0 text-decoration-none extra-small fw-bold"
                onClick={handleResetFilters}
              >
                Reset All
              </button>
            </div>

            {/* Keyword Search */}
            <div className="mb-4">
              <label className="form-label small fw-semibold text-dark">Keyword Search</label>
              <div className="input-group input-group-sm">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search product..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                />
                {searchQuery && (
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => setSearchQuery('')}
                  >
                    <i className="bi bi-x"></i>
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-4">
              <label className="form-label small fw-semibold text-dark mb-2">Category</label>
              <div className="d-flex flex-column gap-1">
                {categoryList.map((cat) => (
                  <button
                    key={cat}
                    className={`btn btn-sm text-start py-1.5 px-2 rounded ${
                      activeCategory === cat
                        ? 'btn-danger text-white fw-bold'
                        : 'btn-light text-secondary'
                    }`}
                    onClick={() => {
                      setActiveCategory(cat);
                      setCurrentPage(1);
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Max Price Slider */}
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <label className="form-label small fw-semibold text-dark mb-0">Max Price</label>
                <span className="text-danger fw-bold small">${maxPrice}</span>
              </div>
              <input
                type="range"
                className="form-range"
                min="20"
                max="1000"
                step="10"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(Number(e.target.value));
                  setCurrentPage(1);
                }}
              />
              <div className="d-flex justify-content-between extra-small text-muted">
                <span>$20</span>
                <span>$1000</span>
              </div>
            </div>

            {/* In-Stock Switch */}
            <div className="form-check form-switch mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="stockFilter"
                checked={inStockOnly}
                onChange={(e) => {
                  setInStockOnly(e.target.checked);
                  setCurrentPage(1);
                }}
              />
              <label className="form-check-label small text-dark" htmlFor="stockFilter">
                In-Stock Only
              </label>
            </div>

            {/* Minimum Rating */}
            <div className="mb-2">
              <label className="form-label small fw-semibold text-dark mb-2">Rating</label>
              <div className="d-flex flex-column gap-1">
                {[4, 3, 0].map((star) => (
                  <div key={star} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ratingFilter"
                      id={`star-${star}`}
                      checked={minRating === star}
                      onChange={() => {
                        setMinRating(star);
                        setCurrentPage(1);
                      }}
                    />
                    <label className="form-check-label extra-small text-secondary" htmlFor={`star-${star}`}>
                      {star === 0 ? 'All Ratings' : `${star} Stars & Above`}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="col-lg-9">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center bg-white p-3 border rounded shadow-sm mb-4 gap-2">
            <span className="small text-secondary">
              Showing{' '}
              <strong className="text-dark">
                {filteredProducts.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}-
                {Math.min(currentPage * itemsPerPage, filteredProducts.length)}
              </strong>{' '}
              of <strong className="text-dark">{filteredProducts.length}</strong> results
            </span>

            <div className="d-flex align-items-center gap-2">
              <span className="extra-small text-secondary text-nowrap">Sort By:</span>
              <select
                className="form-select form-select-sm"
                style={{ width: '180px' }}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {paginatedProducts.length > 0 ? (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
              {paginatedProducts.map((product) => (
                <div key={product.id} className="col">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center bg-white p-5 border rounded shadow-sm">
              <i className="bi bi-search display-5 text-muted mb-3 d-block"></i>
              <h5 className="fw-bold">No Products Found</h5>
              <p className="text-secondary small mb-3">
                Try adjusting your search query, price limit, or category filter.
              </p>
              <button className="btn btn-danger btn-sm px-4 fw-semibold" onClick={handleResetFilters}>
                Clear Filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-center mt-5">
              <nav>
                <ul className="pagination pagination-sm gap-1">
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                      className="page-link text-dark"
                      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    >
                      &laquo; Prev
                    </button>
                  </li>
                  {[...Array(totalPages)].map((_, i) => (
                    <li
                      key={i + 1}
                      className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                    >
                      <button
                        className={`page-link ${
                          currentPage === i + 1 ? 'bg-danger border-danger text-white' : 'text-dark'
                        }`}
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}
                  <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                      className="page-link text-dark"
                      onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    >
                      Next &raquo;
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;