import React from "react";
function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row align-items-center">

        <div className="col-12 col-md-6 mt-4 mt-md-5 text-center text-md-start">
          <img src={imageUrl} className="img-fluid w-75 w-md-100" alt={productName} />
        </div>


        <div className="col-12 col-md-6 p-3 p-md-5 mt-4 mt-md-5 text-center text-md-start">
          <h1 className="fs-3 fs-md-1">{productName}</h1>
          <p className="text-muted">{productDescription}</p>

          <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3 mt-3">
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore}>Learn More</a>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3 mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" className="img-fluid" alt="Google Play" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" className="img-fluid" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
