import React from 'react';

function Brokerage() {
  return (
    <div className="container">
      <div className="row mt-5 p-4 p-md-5 border-top">
        <div className="col-12 col-md-8">
          <a href="/" className="text-decoration-none">
            <h3 className="fs-5 text-center text-md-start">Brokerage calculator</h3>
          </a>
          <ul
            style={{ lineHeight: "2", fontSize: "13px" }}
            className="text-muted mt-3"
          >
            <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes, if required, shall be charged 220 per contract note. Courier charges apply.</li>
            <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
            <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged 240 per executed order instead of 220 per executed order.</li>
          </ul>
        </div>

        <div className="col-12 col-md-4 mt-4 mt-md-0">
          <a href="/" className="text-decoration-none">
            <h3 className="fs-5 text-center text-md-start">List of charges</h3>
          </a>
          <ul
            style={{ lineHeight: "2", fontSize: "13px" }}
            className="text-muted mt-3"
          >
            <li>Account opening charges: ₹200 for equity, ₹100 for commodity.</li>
            <li>Annual maintenance charges (AMC): ₹300 per year.</li>
            <li>Equity delivery: ₹0 (free).</li>
            <li>Equity intraday and F&O: Flat ₹20 or 0.03% per executed order.</li>
            <li>Currency & commodity F&O: Flat ₹20 per executed order.</li>
            <li>Dematerialisation: ₹150 per request + courier charges.</li>
            <li>Pledge creation/closure: ₹30 per request.</li>
            <li>DP transaction charge (sell & off-market): ₹15 + GST per scrip.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
