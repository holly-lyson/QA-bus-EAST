import React, { Component } from 'react';
import Header from './header'
import Footer from './footer'

class Home extends Component {
    render() {
      return(
          <div className="Home">
              <Header />
              <Footer />
          </div>
      );
    }
  }

  export default Home;