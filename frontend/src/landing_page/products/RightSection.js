import React from 'react';

function RightSection({ imageUrl, productName, description, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        
        <div className="col-12 col-md-6 p-3 p-md-5 mt-4 mt-md-5 text-center text-md-start">
          <h1 className="fs-3 fs-md-1">{productName}</h1>
          <p className="text-muted">{description}</p>
          <a href={learnMore} className="text-decoration-none">
            Learn more{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="col-12 col-md-6 mt-4 mt-md-0 text-center">
          <img src={imageUrl} className="img-fluid w-75 w-md-100" alt={productName} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
