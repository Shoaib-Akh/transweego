import React from 'react';

const MainHeading = ({heading,subHeading}) => {
  return (
    <div className="container h-75 d-flex align-items-lg-center main-heading">
      <div className="row mt-md-4">
        <div className="col-lg-7 col-md-7 col-12">
          <h1>{heading}</h1>
          <p>{subHeading}</p>
          <div className=' gap-sm-3 gap-1 mt-3 row'>
            <div className='col-md-5'> 


            <button className="btn orange">Send</button>
            </div>
          <div className='col-md-5'> 


            <button className="btn yellow">Transparent</button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeading;
