import React, { Component } from 'react';
import './referrals.css';


class Referrals extends Component {
  render() {
    return(
        <div className="blk-background">
          <div className="referrals-container">
            <div className="introduction">
              <p className="intro-title">Refer and Earn</p>
              <p className="money">$100 cash </p> 
              <p style={{fontSize:'1.8rem'}}>per referral</p>
              <p>as long as the referred customer has a completed service</p>
            </div>
            <div className="ref-form">
              <div className="form-inputs">
                <label className="form-label">Your Name</label>
                <input type="text" name="name" className="form-input" placeholder="Your Name..." />
              </div>
              <div className="form-inputs">
                <label className="form-label">Name of referred person </label>
                <input type="text" name="name" className="form-input" placeholder="Referred person's name..." />
              </div>
              <div className="form-inputs">
                <label className="form-label">Phone number of referred person</label>
                <input type="text" name="name" className="form-input" placeholder="Phone number..." />
              </div>
              <input type="submit" value="Submit" />
            </div>
            
          </div>
        </div>
        // <div>
        //     <h4>Small header</h4>
        // </div>
    );
  }
}

export default Referrals;
