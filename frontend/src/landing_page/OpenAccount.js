import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5 fs-3 fs-md-2'>Open a Zerodha account</h1>
                <p className="fs-6 fs-md-5">
                    Modern platforms and apps, 20 investments, and flat ₹20 intraday and F&O trades.
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

export default OpenAccount;
