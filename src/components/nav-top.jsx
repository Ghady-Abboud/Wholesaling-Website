import React from 'react';
import './nav-top.css';

const NavTop = () => {
      return (
        <>
          <section className = "nav-wrapper">
            <div className = "nav-logo">
              <img className="img-responsive" alt="Storm Capital Investments LLC" src="https://static1.s123-cdn-static-a.com/uploads/7927255/400_filter_nobg_6451970d47bdf.png" />
            </div>
            <div className= "nav-content">
              <ul>
                <div className="nav-items">Home</div> 
                <div className="nav-items">About Us</div>
                <div className="nav-items">How It Works</div>
                <div className="nav-items">Get An Offer!</div>
                <div className="nav-items">Give Us A Call Now | (609) 365-1593 </div>
              </ul>
            </div>
          </section> 
        </>
      )
    
};

export default NavTop;