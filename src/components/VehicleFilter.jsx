import React, { useState } from 'react';

export default function VehicleFilter() {
   const [filter, setFilter] = useState({
    model: '',
    body: '',
    year: '',
    engine: '',
  });

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching with filters:', filter);
  };
   return (
      <div className="vehicle-filter-bar bg-white p-3 p-lg-4 shadow-sm border mt-3">
        <h6 className="fw-bold mb-3 d-flex align-items-center gap-2">
          Select Your Vehicle Parts <span className="title-line"></span>
        </h6>

        <form onSubmit={handleSearch} className="row g-2 align-items-center">
          <div className="col-12 col-sm-6 col-md-3">
            <select 
              name="model" 
              className="form-select form-select-sm text-secondary"
              value={filter.model} 
              onChange={handleFilterChange}
            >
              <option value="">Select Model</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
            </select>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <select 
              name="body" 
              className="form-select form-select-sm text-secondary"
              value={filter.body} 
              onChange={handleFilterChange}
            >
              <option value="">Select Body</option>
              <option value="hatchback">Hatchback</option>
              <option value="coupe">Coupe</option>
            </select>
          </div>

          <div className="col-12 col-sm-6 col-md-2">
            <select 
              name="year" 
              className="form-select form-select-sm text-secondary"
              value={filter.year} 
              onChange={handleFilterChange}
            >
              <option value="">Select Year</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
            </select>
          </div>

          <div className="col-12 col-sm-6 col-md-2">
            <select 
              name="engine" 
              className="form-select form-select-sm text-secondary"
              value={filter.engine} 
              onChange={handleFilterChange}
            >
              <option value="">Select Engine</option>
              <option value="v6">V6 Turbo</option>
              <option value="v8">V8 Diesel</option>
            </select>
          </div>

          <div className="col-12 col-md-2">
            <button type="submit" className="btn btn-dark btn-sm w-100 fw-bold py-2 rounded-1">
              Search Parts
            </button>
          </div>
        </form>
      </div>
  )
}

