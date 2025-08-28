import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row mt-5 text-center">
        <div className="col-12 col-md-4 p-3">
          <img src="media/images/smallcaseLogo.png" className="img-fluid w-50 w-md-75" alt="Smallcase" />
          <p className="small text-muted mt-2">Themetic investment platform</p>
        </div>
        <div className="col-12 col-md-4 p-3">
          <img src="media/images/streakLogo.png" className="img-fluid w-50" alt="Streak" />
          <p className="small text-muted mt-2">Algo & strategy platform</p>
        </div>
        <div className="col-12 col-md-4 p-3">
          <img src="media/images/sensibullLogo.svg" className="img-fluid w-50" alt="Sensibull" />
          <p className="small text-muted mt-2">Options trading platform</p>
        </div>
      </div>

      <div className="row mt-5 text-center">
        <div className="col-12 col-md-4 p-3">
          <img src="media/images/zerodhaFundhouse.png" className="img-fluid w-50 w-md-75" alt="Fundhouse" />
          <p className="small text-muted mt-2">Asset management</p>
        </div>
        <div className="col-12 col-md-4 p-3">
          <img src="media/images/goldenpiLogo.png" className="img-fluid w-50" alt="GoldenPi" />
          <p className="small text-muted mt-2">Bonds trading platform</p>
        </div>
        <div className="col-12 col-md-4 p-3">
          <img src="media/images/dittoLogo.png" className="img-fluid w-25" alt="Ditto" />
          <p className="small text-muted mt-2">Insurance</p>
        </div>
      </div>

      <div className="row text-center mt-5">
        <div className="col-12">
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "200px" }}
          >
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
