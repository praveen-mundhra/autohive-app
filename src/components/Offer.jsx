import React from "react";
import "./css/Offer.css";

export default function Offer() {

  const goToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="offer-card">

      {/* LEFT BIG CARD */}
      <div className="card-box-1">
        <div className="card sparePart">

          <div className="offer-content">

            <h4 className="subtitle">
              30% Big Offer <span></span>
            </h4>

            <h2 className="title">
              Modern Auto Wheel
              <br />
              Up To 25% Offer
            </h2>

            <button
              className="shop-btn"
              onClick={() => goToSection("featured-products")}
            >
              Shop Now
            </button>

          </div>

        </div>
      </div>


      {/* RIGHT TWO CARDS */}
      <div className="card-box-2">

        {/* NEW ARRIVAL */}
        <div className="card newArrival">

          <div className="offer-content">

            <h4 className="subtitle">
              New Arrival <span></span>
            </h4>

            <h2 className="title">
              Moteri racing Rally
              <br />
              Gold Custom
            </h2>

            <button
              className="shop-btn"
              onClick={() => goToSection("new-arrivals")}
            >
              Shop Now
            </button>

          </div>

        </div>


        {/* FLASH SALES */}
        <div className="card car">

          <div className="offer-content">

            <h4 className="subtitle">
              Flash Sales (15%) <span></span>
            </h4>

            <h2 className="title">
              Auto Repair System
              <br />
              Accessories
            </h2>

            <button
              className="shop-btn"
              onClick={() => goToSection("flash-sales")}
            >
              Shop Now
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}