import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="container">
      <div className="row border-bottom mt-5 p-4 p-md-5 text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted fs-5 mt-3">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>

      <div className="row mt-5 text-center">
        <div className="col-12 col-md-4 p-4">
          <img src="media/images/pricing0.svg" className="img-fluid mb-3" alt="Free equity delivery" />
          <h1 className="fs-4">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free - 0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4 p-4">
          <img src="media/images/intradayTrades.svg" className="img-fluid mb-3" alt="Intraday and F&O" />
          <h1 className="fs-4">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across
            equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-12 col-md-4 p-4">
          <img src="media/images/pricing0.svg" className="img-fluid mb-3" alt="Free equity delivery" />
          <h1 className="fs-4">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free - 0 brokerage.
          </p>
        </div>
      </div>

      <div className="row text-center mt-5">
        <h1>Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
        <div className="col-12">
          <Link to="/signup">
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "200px" }}
          >
            Sign up now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
