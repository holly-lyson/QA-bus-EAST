import React, { Component } from 'react';
import logo from '../logo.png';
import logo2 from '../surfLogo.png';
import './header.css';
// import './menubar';
import MenuBar from './menubar';
import './menubar.css';


class Header extends Component {
  render() {
    return(
        <div className="blk-background">
        <div className="App">
        <header className="App-header">
          {/* <img style={{marginBottom: "30pt"}} src={logo} className="App-logo" alt="logo"/> */}
          <h1 style={{marginTop: "20pt", marginBottom: "-0pt"}} className='App-title'>Jeremy Lyson</h1>
          <h6 style={{marginTop: "10pt", marginBottom: "-20pt"}} className='App-Subtitle'> of</h6>
          <img style={{marginBottom: "0pt", marginTop: "0pt"}}src={logo2} className="App-logo2" alt="logo2" width="150px" height="auto" />
          {/*<MenuBar/>*/}
        </header>
        </div>
        </div>
        // <div>
        //     <h4>Small header</h4>
        // </div>
    );
  }
}

export default Header;


