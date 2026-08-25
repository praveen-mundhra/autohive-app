import React, { useState } from 'react';
import './css/Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Signs Your Car Brake Pads Need Immediate Replacement',
    category: 'Maintenance',
    date: 'Aug 18, 2026',
    readTime: '4 min read',
    author: 'Alex Rivera',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787658119/How-Often-Should-You-Replace-Your-Brake-Pads-1024x576_g7tyde.webp',
    summary:
      'High-pitched squealing, vibration through the pedal, and increased stopping distance are critical warnings your braking system needs attention.',
    featured: true,
    relatedCategory: 'Brakes & Suspension'
  },
  {
    id: 2,
    title: 'Choosing the Right Motor Oil: Full Synthetic vs. Synthetic Blend',
    category: 'Engine Care',
    date: 'Aug 12, 2026',
    readTime: '6 min read',
    author: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787658639/AdobeStock_107165213-1-scaled_qgwvjt.jpg',
    summary:
      'Understand viscosity ratings, thermal stability, and engine protection levels to maximize fuel economy and engine longevity.',
    featured: false,
    relatedCategory: 'Engine & Drivetrain'
  },
  {
    id: 3,
    title: 'How to Upgrade to LED Headlights Without Electrical Issues',
    category: 'Guides',
    date: 'Jul 29, 2026',
    readTime: '5 min read',
    author: 'Marcus Vance',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100',
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787658508/images_fttzb8.jpg',
    summary:
      'Step-by-step guide to installing CANbus-compatible LED bulbs, aligning beam patterns, and avoiding dashboard error warnings.',
    featured: false,
    relatedCategory: 'Headlights & Lighting'
  },
  {
    id: 4,
    title: 'Alloy Wheels vs. Steel Rims: Which Is Better for Daily Driving?',
    category: 'Performance',
    date: 'Jul 15, 2026',
    readTime: '7 min read',
    author: 'Alex Rivera',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787658415/images_vteed0.jpg',
    summary:
      'Examine the weight advantages, heat dissipation, and cosmetic durability of forged aluminum versus heavy-duty steel wheels.',
    featured: false,
    relatedCategory: 'Tires & Wheels'
  },
  {
    id: 5,
    title: 'Essential Power Tools Every DIY Mechanic Should Keep in the Garage',
    category: 'Tools & Gear',
    date: 'Jun 28, 2026',
    readTime: '5 min read',
    author: 'David Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    image: 'https://res.cloudinary.com/m51f0hzh/image/upload/v1787658240/10102025-diy-mechanic-blog-jb-tools-hero_hapmxe.jpg',
    summary:
      'From 20V brushless impact wrenches to digital tire inflators, these tools make home vehicle repairs faster, safer, and easier.',
    featured: false,
    relatedCategory: 'Power Tools'
  }
];

const blogCategories = ['All', 'Maintenance', 'Engine Care', 'Guides', 'Performance', 'Tools & Gear'];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchFilter, setSearchFilter] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  return (
    <div className="blog-page-wrapper w-100 py-4 px-3 px-md-4">
      
      {/* 1. Header Banner */}
      <div className="bg-dark text-white p-4 p-md-5 rounded shadow-sm mb-4">
        <div className="row align-items-center g-3">
          <div className="col-lg-8">
            <span className="text-danger fw-bold text-uppercase small tracking-wide">
              AutoHive Knowledge Base
            </span>
            <h2 className="fw-bold mt-1 mb-2">Automotive News, Tips &amp; Tutorials</h2>
            <p className="text-secondary small mb-0">
              Expert insights, maintenance tutorials, and buying guides to keep your vehicle running in peak condition.
            </p>
          </div>

          {/* Search Box */}
          <div className="col-lg-4">
            <div className="input-group">
              <span className="input-group-text bg-secondary border-0 text-white">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control form-control-sm border-0 bg-white"
                placeholder="Search articles..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Category Filter Buttons */}
      <div className="d-flex align-items-center gap-2 overflow-auto pb-3 mb-4 category-pill-scroll">
        {blogCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`btn btn-sm rounded-pill px-3 py-1 text-nowrap fw-semibold ${
              selectedCategory === cat
                ? 'btn-danger text-white shadow-sm'
                : 'btn-light border text-secondary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. Featured Card Section */}
      {selectedCategory === 'All' && !searchFilter && featuredPost && (
        <div className="card border-0 shadow-sm rounded overflow-hidden mb-5 featured-blog-card">
          <div className="row g-0 align-items-stretch">
            <div className="col-lg-7 position-relative featured-img-container">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-100 h-100 featured-post-img"
              />
              <span className="badge bg-danger position-absolute top-0 start-0 m-3 px-3 py-2 text-uppercase">
                Featured Article
              </span>
            </div>

            <div className="col-lg-5 p-4 p-md-5 d-flex flex-column justify-content-between bg-white">
              <div>
                <div className="d-flex align-items-center gap-2 text-secondary small mb-2">
                  <span className="text-danger fw-bold text-uppercase">{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <h4 className="fw-bold text-dark mb-3">{featuredPost.title}</h4>
                <p className="text-secondary small leading-relaxed mb-4">{featuredPost.summary}</p>
              </div>

              <div className="d-flex align-items-center justify-content-between pt-3 border-top">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={featuredPost.avatar}
                    alt={featuredPost.author}
                    className="rounded-circle"
                    style={{ width: '38px', height: '38px', objectFit: 'cover' }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold small text-dark">{featuredPost.author}</h6>
                    <small className="text-muted extra-small">Auto Specialist</small>
                  </div>
                </div>

                <a
                  href="#read"
                  className="btn btn-outline-danger btn-sm px-3 fw-semibold text-decoration-none"
                >
                  Read More <i className="bi bi-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Blog Posts Grid */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
        {filteredPosts.map((post) => (
          <div key={post.id} className="col d-flex">
            <div className="card h-100 w-100 border-0 shadow-sm rounded overflow-hidden blog-grid-card">
              <div className="position-relative grid-img-container">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-100 h-100 grid-post-img"
                />
                <span className="badge bg-dark bg-opacity-75 position-absolute top-0 start-0 m-2 extra-small">
                  {post.category}
                </span>
              </div>

              <div className="card-body p-3 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center gap-2 text-secondary extra-small mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h6 className="fw-bold text-dark mb-2 text-truncate-2">{post.title}</h6>
                  <p className="text-secondary extra-small text-truncate-3 mb-3">{post.summary}</p>
                </div>

                <div className="d-flex align-items-center justify-content-between pt-2 border-top mt-auto">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="rounded-circle"
                      style={{ width: '28px', height: '28px', objectFit: 'cover' }}
                    />
                    <span className="extra-small fw-semibold text-dark">{post.author}</span>
                  </div>

                  <a
                    href="#details"
                    className="text-danger fw-bold extra-small text-decoration-none d-flex align-items-center gap-1"
                  >
                    Read Article <i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 5. Empty State Fallback */}
      {filteredPosts.length === 0 && (
        <div className="text-center bg-white p-5 rounded shadow-sm my-4">
          <i className="bi bi-journal-x display-4 text-secondary mb-3 d-block"></i>
          <h5 className="fw-bold text-dark">No Articles Found</h5>
          <p className="text-secondary small mb-3">Try adjusting your search terms or select another category filter.</p>
          <button
            className="btn btn-danger btn-sm px-4 fw-semibold"
            onClick={() => {
              setSelectedCategory('All');
              setSearchFilter('');
            }}
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  );
};

export default Blog;