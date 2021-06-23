import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import Home from './components/home';
import MenuBar from './components/menubar';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Faq from './components/faq';
import About from './components/about';
import Referrals from './components/referrals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Roof from './roof.png'
import Footer from './components/footer';

class App extends Component{



  toRender(){
    if (document.location.pathname === "/"){
    return(
        <div className>
        <Header />
        {/* <MenuBar/> */}
        <img style={{border: '2px solid black',  paddingBottom: "50pt", marginTop: "20pt"}}src={Roof} className="Roof" alt="Roof" width="700px" height="auto" />
        <h1>Services we offer</h1>
        <h6> Repairs and Full Replacements!</h6>
          <p>&bull; Shingle Roofing </p>
          <p>&bull; Flat Roofing </p>
          <p>&bull; Skylights </p>
          <p>&bull; Gutters </p>
          <p>&bull; Tile Roofing </p>
        <h3> Financing Available! </h3>

          <Footer/>

        </div>

      );
    } else {
      return(          
      <div>
        {/* <MenuBar /> */}
        {/* <Header/> */}
        <img style={{border: '2px solid black',  paddingBottom: "50pt", marginTop: "20pt"}}src={Roof} className="Roof" alt="Roof" width="700px" height="auto" />
        <h1>Services we offer</h1>
        <h6> Repairs and Full Replacements!</h6>
          <p>&bull; Shingle Roofing </p>
          <p>&bull; Flat Roofing </p>
          <p>&bull; Skylights </p>
          <p>&bull; Gutters </p>
          <p>&bull; Tile Roofing </p>
        <h3> Financing Available! </h3>

          <Footer/>

        </div>
      );
    }
  }
  render(){

    return(
      <div className="App">
        <div style={{marginTop: "0pt"}}>
          {/* {this.toRender()} */}
          
        </div>
        {/* <div> */}
          <MenuBar/>
        {/* </div> */}
        <div>
      <Router>
         
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about"  component={About} /> 
            <Route path="/faq"  component={Faq} />  
            <Route path="/testimonials"  component={Testimonials} /> 
            <Route path="/referrals"  component={Referrals} />
            <Route path="/contact"  component={Contact} />
          </Switch>
      </Router>
      </div>
      <Footer/>

    </div>

    );
  }

}


export default App;

