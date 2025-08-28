import React from 'react';

function Eduction() {
    return (  
        <div className='container mt-5'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-6 text-center text-md-start mb-4 mb-md-0'>
                    <img 
                        src='/media/images/education.svg' 
                        alt='education' 
                        className="img-fluid" 
                        style={{maxWidth:"70%"}} 
                    />
                </div>
                <div className='col-12 col-md-6'>
                    <h1 className='mb-3 fs-3 fs-md-2'>Free and open market education</h1>
                    <p className="fs-6 fs-md-5">
                        Varsity, the largest online stock market education book in the world covering 
                        everything from the basics to advanced trading.
                    </p>
                    <a href='/#' style={{textDecoration:"none"}}>Varsity →</a>

                    <p className="mt-4 fs-6 fs-md-5">
                        TradingQ&A, the most active trading and investment community in India 
                        for all your market related queries.
                    </p>
                    <a href='/#' style={{textDecoration:"none"}}>TradingQ&A →</a>
                </div>
            </div>
        </div>
    );
}

export default Eduction;
