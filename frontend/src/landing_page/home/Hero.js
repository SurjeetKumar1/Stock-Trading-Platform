import React from 'react';
import {Link} from "react-router-dom"

function Hero() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img 
                    src="media/images/homeHero.png" 
                    alt="Hero" 
                    className="mb-5 img-fluid mx-auto d-block"
                />
                <h1 className="mt-5 fs-2 fs-md-1">Invest in everything</h1>
                <p className="fs-6 fs-md-5">
                    Online platform to invest in stocks, derivatives, mutual funds, and more
                </p>
                <Link to="/signup">
                <button 
                     className="btn btn-primary fs-5 mb-5 px-4 px-md-5 mx-auto d-block"
                     style={{ maxWidth: "250px" }}
                >
                    Sign up now
                </button>
                </Link>
            </div>
        </div>
     );
}

export default Hero;
