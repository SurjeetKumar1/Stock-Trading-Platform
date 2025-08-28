import React from "react";

function Hero() {
  return (
    <section id="supportHero">
      <div className="container" id="supportWrapper">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h4>Support Portal</h4>
          <a href="#" className="text-decoration-underline">
            Track Tickets
          </a>
        </div>

        <div className="row">
          <div className="col-md-7 mb-4">
            <h2 className="fs-4 mb-4">
              Search for an answer or browse help topics to create a ticket
            </h2>
            <input
              type="text"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected.."
              className="mb-3"
            />
            <div className="d-flex flex-wrap gap-3 mb-5">
              <a href="#">Track account opening</a>
              <a href="#">Track segment activation</a>
              <a href="#">Intraday margins</a>
              <a href="#">Kite user manual</a>
            </div>
          </div>

          <div className="col-md-5">
            <h2 className="fs-4 mb-3">Featured</h2>
            <ol className="ps-3">
              <li className="mb-3">
                <a href="#">
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>
              <li>
                <a href="#">Latest Intraday leverages - MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
