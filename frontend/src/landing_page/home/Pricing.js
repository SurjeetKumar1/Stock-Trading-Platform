import React from 'react';
function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-4 mb-4'>
                    <h1 className='mb-3 fs-3 fs-md-2'>Unbeatable pricing</h1>
                    <p className="fs-6 fs-md-5">
                        We pioneered the concept of discount broking and price transparency in India. 
                        Flat fees and no hidden charges.
                    </p>
                    <a href='/#' style={{textDecoration:"none"}}>
                        See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>

                <div className='col-12 col-md-2 d-none d-md-block'></div>

                <div className='col-12 col-md-6 mb-5'>
                    <div className='row text-center'>
                        <div className='col-12 col-sm border p-3 mb-3 mb-sm-0'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>
                                Free equity delivery and <br/> direct mutual funds
                            </p>
                        </div>
                        <div className='col-12 col-sm border p-3'>
                            <h2>₹20</h2>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;
