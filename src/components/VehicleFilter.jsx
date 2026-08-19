import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import './css/VehicleFilter.css';

const VehicleFilter = () => {
  const { showToast } = useShop();

  const [model, setModel] = useState('Select Model');
  const [body, setBody] = useState('Select Body');
  const [year, setYear] = useState('Select Year');
  const [engine, setEngine] = useState('Select Engine');

  const handleSearch = () => {
    if (model === 'Select Model' && year === 'Select Year') {
      showToast('Please select at least a vehicle model or year.');
    } else {
      showToast(`Showing parts for: ${model} (${year}, ${engine}) 🚗`);
      document.getElementById('featured-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="px-4 py-3 vehicle-filter-container">
      <div className="d-flex align-items-center gap-2 mb-3">
        <h6 className="fw-bold text-dark mb-0">Select Your Vehicle Parts</h6>
        <div className="bg-danger" style={{ width: '30px', height: '2px' }}></div>
      </div>

      <div className="row g-2">
        <div className="col-md">
          <select
            className="form-select form-select-sm bg-light text-secondary border-light-subtle"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            <option>Select Model</option>
            <option>Audi A4 / A6</option>
            <option>BMW 3 / 5 Series</option>
            <option>Mercedes Benz C-Class</option>
            <option>Toyota Camry / RAV4</option>
            <option>Honda Civic / Accord</option>
          </select>
        </div>

        <div className="col-md">
          <select
            className="form-select form-select-sm bg-light text-secondary border-light-subtle"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          >
            <option>Select Body</option>
            <option>Sedan</option>
            <option>Coupe</option>
            <option>SUV / Crossover</option>
            <option>Hatchback</option>
          </select>
        </div>

        <div className="col-md">
          <select
            className="form-select form-select-sm bg-light text-secondary border-light-subtle"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option>Select Year</option>
            <option>2026</option>
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>
        </div>

        <div className="col-md">
          <select
            className="form-select form-select-sm bg-light text-secondary border-light-subtle"
            value={engine}
            onChange={(e) => setEngine(e.target.value)}
          >
            <option>Select Engine</option>
            <option>2.0L Turbo I4</option>
            <option>3.0L Twin-Turbo V6</option>
            <option>Electric EV Motor</option>
            <option>Hybrid 2.5L</option>
          </select>
        </div>

        <div className="col-md">
          <button
            className="btn btn-dark btn-sm w-100 fw-bold text-uppercase tracking-wider"
            onClick={handleSearch}
          >
            Search Parts
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleFilter;