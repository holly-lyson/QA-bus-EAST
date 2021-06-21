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


class App extends Component{
  render(){
    return(
      <div className="App">
      {/*  <Header /> */}
      <Router>
          <MenuBar />
          
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about"  component={About} /> 
            <Route path="/faq"  component={Faq} />  
            <Route path="/testimonials"  component={Testimonials} /> 
            <Route path="/referrals"  component={Referrals} />
            <Route path="/contact"  component={Contact} />
          </Switch>
      </Router>

      {/* <Customers/> */}
      
      <div>
      {/* <Contact/> */}
      {/* <Testimonials/> */}
      </div>
    </div>
    );
  }
}


export default App;

