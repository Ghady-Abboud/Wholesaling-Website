import React from 'react';
import './fourth.css';

const FourthSection = () =>{
    return(
        <>
        <section className="fourth">
            <h2 className= "main-heading">Get A Cash Offer Today </h2>
            <div className="sub-heading-container">
                <p className="sub-heading-text">
                    No Repairs | No commissions | No Cleaning | No Showings | No Hassle 
                </p>

                <p className="sub-sub-heading-text">
                    Get a Free, No-Obligation Estimate in 90 Seconds or Less
                </p>
            </div>

            <form className="contact-form">
                <label id ="full-name-label" for="full-name">Full Name*</label>
                <input type="text" id="full-name" placeholder="Full Name" />

                <label id="property-address-label" for="property-address">Property Address*</label>
                <input type="text" id="property-address" placeholder="Property Address" />

                <label id="phone-number-label" for="phone-number">Phone Number</label>
                <input type="text" id="phone-number" placeholder="Phone Number" />


                <label id ="email-label" for="email">E-mail</label>
                <input type="text" id="email" placeholder="E-mail" />

                <input type="submit" id="contact-form-submit" value="Get Offer Today" />

            </form>
            
        </section>
        </>
    )
};

export default FourthSection;