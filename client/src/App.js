import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import Header from './components/header';
import MenuBar from './components/menubar';
import Testimonials from './components/testimonials';


class App extends Component{
  render(){
    return(
      <div className="App">
        <Header />

      <Customers/>
      

      <div>
      <Testimonials/>
      </div>
    </div>
    );
  }
}


export default App;

