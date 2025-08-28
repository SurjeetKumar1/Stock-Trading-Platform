import React from "react";
function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250 250 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5 text-center text-md-start">
          <div className="col-12 col-md mb-4 mb-md-0">
            <img src="/media/images/logo.svg" className="img-fluid mb-3" style={{ maxWidth: "150px" }} alt="logo"/>
            <p className="small text-muted">
              &copy;2010-2025, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col-12 col-sm-6 col-md mb-4 mb-md-0">
            <p className="fw-bold">Company</p>
            <a className="d-block text-muted text-decoration-none mb-2" href="/">About</a>
            <a className="d-block text-muted text-decoration-none mb-2" href="/">Products</a>
            <a className="d-block text-muted text-decoration-none mb-2" href="/">Pricing</a>
            <a className="d-block text-muted text-decoration-none mb-2" href="/">Referral programme</a>
            <a className="d-block text-muted text-decoration-none mb-2" href="/">Zerodha.tech</a>
            <a className="d-block text-muted text-decoration-none mb-2" href="/">Press & media</a>
            <a className="d-block text-muted text-decoration-none" href="/">Zerodha cares (CSR)</a>
          </div>

          <div className="col-12 col-sm-6 col-md mb-4 mb-md-0">
            <p className="fw-bold">Support</p>
            <a className="d-block text-muted text-decoration-none mb-2" href="/">Support portal</a>
            <a className="d-block text-muted text-decoration-none mb-2" href="/">Z-Connect blog</a>
            <a className="d-block text-muted text-decoration-none mb-2" href="/">List of charges</a>
            <a className="d-block text-muted text-decoration-none" href="/">Downloads & resources</a>
          </div>

          <div className="col-12 col-sm-6 col-md mb-4 mb-md-0">
            <p className="fw-bold">Account</p>
            <a className="d-block text-muted text-decoration-none mb-2" href="/">Open an account</a>
            <a className="d-block text-muted text-decoration-none mb-2" href="/">Fund transfer</a>
            <a className="d-block text-muted text-decoration-none mb-2" href="/">List of charges</a>
            <a className="d-block text-muted text-decoration-none" href="/">60 day challenge</a>
          </div>
        </div>

        <div className="mt-5 text-muted small" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE - SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. - SEBI Registratic Trading through Zerodha Commodities Pvt.
            Ltd. MCX: 46025-SEBI Registration no.: INZ000038238 Registered
            Address: Zerodha Broking Ltd., #153/154, 4th Cross School, J.P Nagar
            4th Phase, Bengaluru 560078, Karnataka, India. For any complaints
            pertaining to securities broking please write to complaints@zerodha.com,
            ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name, PAN,
            Address, Mobile Number. Communication, Speedy redressal of grievances.
          </p>
          <p>
            Investments in securities market are subject to market risks; read all
            the related documents carefully before investing.
          </p>
          <p>
            Prevent unauthorised transactions in your account. Update your mobile
            numbers/email IDs with your stock brokers. Receive information of your
            Exchange on your mobile/email at the end of the day. Issued in the
            interest of investors. KYC is one time exercise while dealing in
            securities with a SEBI registered intermediary (broker, DP, Mutual Fund
            etc.), you need not undergo the same process again when you approach
            another intermediary. For IPO subscription, no need to issue a cheque.
            Please write the Bank account number and sign the IPO application form
            to authorize allotment. In case of non allotment the funds will remain
            in your bank account. As a business we don't give stock tips, and have
            not authorized anyone. If you find anyone claiming to be part of
            Zerodha and offering such services, please create a ticket here.
          </p>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center justify-content-md-between gap-3 small">
              <a href="/" className="text-muted text-decoration-none">NSE</a>
              <a href="/" className="text-muted text-decoration-none">BSE</a>
              <a href="/" className="text-muted text-decoration-none">MCE</a>
              <a href="/" className="text-muted text-decoration-none">Terms & conditions</a>
              <a href="/" className="text-muted text-decoration-none">Policies & procedures</a>
              <a href="/" className="text-muted text-decoration-none">Privacy policy</a>
              <a href="/" className="text-muted text-decoration-none">Disclosure</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
