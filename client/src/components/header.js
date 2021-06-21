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
          <img style={{marginBottom: "30pt"}} src={logo} className="App-logo" alt="logo"/>
          <h1 style={{marginTop: "-40pt", marginBottom: "-40pt", paddingBottom: "5pt", float: "left" }} className='App-title'>Jeremy Lyson</h1>
          <h6 className='App-Subtitle'> of</h6>
          <img style={{paddingBottom: "20pt", marginBottom: "-40pt", marginTop: "-70pt", paddingTop: "5pt"}}src={logo2} className="App-logo2" alt="logo2" width="150px" height="auto" />
          <MenuBar/>
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


