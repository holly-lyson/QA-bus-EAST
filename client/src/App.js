import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import Header from './components/header';
import MenuBar from './components/menubar';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Faq from './components/faq';
import About from './components/about';
import Referrals from './components/referrals';


class App extends Component{
  render(){
    return(
      <div className="App">
        <Header />

      <Customers/>
      

      <div>
      <Contact/>
      <Testimonials/>
      </div>
    </div>
    );
  }
}


export default App;

