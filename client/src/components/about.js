import React, { Component } from 'react';
import logo from '../logo.png';
import logo2 from '../surfLogo.png';
import jeremy from '../jeremy.png';
import './header.css';
// import './menubar';
import MenuBar from './menubar';
import './menubar.css';
import './about.css';


class About extends Component {
  render() {
    return(
        <div className="blk-background">
          <div className="About-header">
            <img style={{border: '2px solid black', marginBottom: "5pt", marginTop: "20pt"}}src={jeremy} className="jeremy" alt="jeremy" width="250px" height="auto" />
              <p> Jeremy Lyson hails from a family of professional roofers involved in the roofing trade in the Rapid City, South Dakota and Anchorage, Alaska for over 20 years.
                This uniquely provides him the knowledge of how the job gets done enabling him to tailor any service to the customer's needs. Now, he is looking to break into the South Jersey shore market, aiming to expand into the surrounding areas of Central Jersey and Philadelphia. 
                <br></br>
                <br></br>
                With the goal of becoming New Jersey's #1 roof expert, Jeremy has served over 100 clients in the tri-state area as a sales representative for Surf and Turf roofing; his customer service skills are backed by countless satisfied customer testimonials. 
                <br></br>
                <br></br>
                  <h2>
                  Call Jeremy today for a free consultation and quote today!
                  </h2> 
              </p>
          </div>
        </div>
        // <div>
        //     <h4>Small header</h4>
        // </div>
    );
  }
}

export default About;
