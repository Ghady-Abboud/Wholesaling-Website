import React from 'react';
import './third.css'

const ThirdSection = ()=>{
    return(
        <>
        <section className="third">
            <div className="how-it-works">
                How It Works
            </div>

            <div className="how-steps">
                <div className="condition">
                    <div className="house-img">
                        <img src="./public/yellow-home.png" style={{width:"90px"}}/>
                    </div>
                    <h4 className = "how-description">Sell in as-is Condition</h4>
                    <p>We buy houses in as-is condition which means we buy it in its current condition</p>
                </div>

                <div className="commission">
                    <div className="money-img">
                        <img src="./public/money-bag.png" style={{width:"90px"}} />
                    </div>
                    <h4 className = "how-description">No Realtor or Commission Fees</h4>
                    <p>When selling your home to us there is no real estate agent involved. Meaning there wont be any realtor commissions or fees!</p>
                </div>
                <div className="closing">
                    <div className="date-image">
                        <img src= "./public/calendar.png" style={{width:"87px"}} />
                    </div>
                    <h4 className="how-description">Fast Closing</h4>
                    <p>We close on your time or sooner (2-3 Week Closings)</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default ThirdSection;