import React, { Component } from 'react';
import Header from './header'
import Roof from '../roof.png'
import Footer from './footer'

class Home extends Component {
    render() {
      return(
          <div className="Home">
              <Header />

              <img style={{border: '2px solid black', marginBottom: "5pt", marginTop: "20pt"}}src={Roof} className="Roof" alt="Roof" width="700px" height="auto" />
              <h1>Services we offer</h1>
              <h6> Repairs and Full Replacements!</h6>
                <p>&bull; Shingle Roofing </p>
                <p>&bull; Flat Roofing </p>
                <p>&bull; Skylights </p>
                <p>&bull; Gutters </p>
                <p>&bull; Tile Roofing </p>
              <h3> Financing Available! </h3>

              {/* <Footer /> */}

          </div>
      );
    }
  }

  export default Home;