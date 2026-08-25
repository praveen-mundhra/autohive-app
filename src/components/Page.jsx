import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import './css/Page.css';

const faqs = [
  {
    q: 'How do I confirm if a part fits my specific vehicle make and model?',
    a: 'You can use our vehicle search filter on the Home page or check the technical specifications tab on each product. All items list direct OEM compatibility numbers.'
  },
  {
    q: 'What is your standard return and replacement policy?',
    a: 'We provide a 30-day hassle-free return window for all uninstalled, boxed auto parts. If an item arrives damaged or incorrect, we provide a prepaid return label.'
  },
  {
    q: 'Do you provide warranties on performance and electrical components?',
    a: 'Yes, all our OEM and certified aftermarket parts come standard with a 1-year to 5-year manufacturer-backed replacement warranty.'
  },
  {
    q: 'How long does express global shipping take?',
    a: 'Domestic US orders arrive within 2–4 business days. International standard shipping takes 5–9 business days with door-to-door tracking.'
  }
];

const Page = () => {
  const { showToast, setActiveNav } = useShop();

  const [activeFaq, setActiveFaq] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill out all required fields.');
      return;
    }
    showToast(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="custom-page-wrapper w-100 py-4 px-3 px-md-4">
      {/* 1. Header Banner */}
      <div className="bg-dark text-white p-4 p-md-5 rounded shadow-sm mb-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <div>
            <span className="text-danger fw-bold text-uppercase small tracking-wide">
              AutoHive Hub
            </span>
            <h2 className="fw-bold mt-1 mb-1">Company Services &amp; Support</h2>
            <p className="text-secondary small mb-0">
              Home / <span className="text-danger fw-semibold">Services &amp; Help Center</span>
            </p>
          </div>
          <button
            className="btn btn-danger btn-sm px-4 fw-bold align-self-start align-self-md-center shadow-sm"
            onClick={() => {
              setActiveNav('Shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Explore Catalog <i className="bi bi-arrow-right ms-1"></i>
          </button>
        </div>
      </div>

      {/* 2. Core Highlights / Feature Badges */}
      <div className="row g-3 mb-5">
        {[
          { icon: 'bi-shield-check', title: '100% OEM Certified', desc: 'Tested and verified genuine automotive components.' },
          { icon: 'bi-truck', title: 'Fast Global Delivery', desc: 'Real-time tracking and expedited regional dispatch.' },
          { icon: 'bi-headset', title: '24/7 Expert Support', desc: 'Live certified master technicians ready to assist.' },
          { icon: 'bi-arrow-counterclockwise', title: '30-Day Money Back', desc: 'Hassle-free returns on uninstalled components.' }
        ].map((item, idx) => (
          <div key={idx} className="col-12 col-sm-6 col-lg-3">
            <div className="card service-feature-card h-100 border-0 p-3 shadow-sm rounded bg-white text-center">
              <div className="feature-icon-box mx-auto mb-2 text-danger bg-danger bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center">
                <i className={`bi ${item.icon} fs-4`}></i>
              </div>
              <h6 className="fw-bold text-dark mb-1">{item.title}</h6>
              <p className="text-secondary extra-small mb-0 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. About & Statistics Section */}
      <div className="card border-0 shadow-sm rounded p-4 p-md-5 bg-white mb-5">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <span className="text-danger fw-bold extra-small text-uppercase tracking-wide">
              Who We Are
            </span>
            <h3 className="fw-bold text-dark mt-1 mb-3">
              Powering Drivers &amp; Garages with Premium Quality Parts
            </h3>
            <p className="text-secondary small leading-relaxed mb-3">
              Founded by engineering enthusiasts, AutoHive has grown into an international automotive distributor. We partner directly with Tier-1 manufacturers to supply original equipment manufacturer (OEM) replacements and racing-grade performance enhancements.
            </p>
            <p className="text-secondary small leading-relaxed mb-4">
              Every item stored in our facilities undergoes stringent quality and tolerance checks, ensuring complete peace of mind on the open road.
            </p>

            {/* Quick Stat Counters */}
            <div className="row text-center g-2 pt-2 border-top">
              <div className="col-4">
                <h4 className="fw-bold text-dark mb-0">50K+</h4>
                <span className="extra-small text-secondary">Parts In Stock</span>
              </div>
              <div className="col-4">
                <h4 className="fw-bold text-danger mb-0">99.4%</h4>
                <span className="extra-small text-secondary">Fitment Accuracy</span>
              </div>
              <div className="col-4">
                <h4 className="fw-bold text-dark mb-0">120+</h4>
                <span className="extra-small text-secondary">Global Brands</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-img-box rounded overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=700"
                alt="AutoHive Workshop"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4. FAQ & Contact Us Section */}
      <div className="row g-4 mb-5">
        {/* FAQ Accordion */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm rounded p-4 bg-white h-100">
            <span className="text-danger fw-bold extra-small text-uppercase mb-1">
              Have Questions?
            </span>
            <h4 className="fw-bold text-dark mb-4">Frequently Asked Questions</h4>

            <div className="d-flex flex-column gap-2">
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item border rounded p-3">
                  <div
                    className="d-flex justify-content-between align-items-center pointer"
                    onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
                  >
                    <span className="fw-semibold text-dark small pe-2">{faq.q}</span>
                    <i
                      className={`bi bi-chevron-down text-danger transition-icon ${
                        activeFaq === i ? 'rotate-180' : ''
                      }`}
                    ></i>
                  </div>
                  {activeFaq === i && (
                    <div className="mt-2 pt-2 border-top text-secondary extra-small leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Inquiry Form */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm rounded p-4 bg-white h-100">
            <span className="text-danger fw-bold extra-small text-uppercase mb-1">
              Need Direct Assistance?
            </span>
            <h4 className="fw-bold text-dark mb-4">Send Us a Message</h4>

            <form onSubmit={handleFormSubmit} className="d-flex flex-column gap-3">
              <div className="row g-2">
                <div className="col-md-6">
                  <label className="form-label extra-small fw-semibold text-dark mb-1">Your Name *</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label extra-small fw-semibold text-dark mb-1">Email Address *</label>
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="form-label extra-small fw-semibold text-dark mb-1">Subject / Vehicle Model</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="e.g. 2022 Ford Mustang Brake Calipers"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div>
                <label className="form-label extra-small fw-semibold text-dark mb-1">Message *</label>
                <textarea
                  className="form-control form-control-sm"
                  rows="3"
                  placeholder="How can our technical support team help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-danger btn-sm fw-bold py-2 shadow-sm mt-1">
                Submit Inquiry <i className="bi bi-send ms-1"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;