import React, { Component } from 'react';
import logo from '../logo.png';
import logo2 from '../surfLogo.png';
import './header.css';
// import './menubar';
import MenuBar from './menubar';
import './faq.css';


class Faq extends Component {
  state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

  render() {
    return(
        <div className="blk-background">
        <div className="faq-page">
        <ul className="questions-list">
        <li>
          <div className="question-tag" onClick={this.handleClick}>
             What is the best type of roof?
          </div>
          <div className="answer-tag" style={this.state.clicked ? {display:'inline-flex'} : {display:'none'}}>
             Best type of a roof is one you only have to do once!
          </div>
        </li>
        
          <div className="question-tag" onClick={this.handleClick}>
             If my roof leaks do I need a whole new roof?...
          </div>
          <div className="answer-tag" style={this.state.clicked ? {display:'inline-flex'} : {display:'none'}}>
             Every case is unique. A leak does not necessarily mean you need a whole new roof!
          </div>
          <div className="question-tag" onClick={this.handleClick}>
             How long do roofs last?...
          </div>
          <div className="answer-tag" style={this.state.clicked ? {display:'inline-flex'} : {display:'none'}}>
             A roof's life is largely dependent on the quality of materials and the trained installers.
          </div>
          <div className="question-tag" onClick={this.handleClick}>
             How long does it take to replace a roof?...
          </div>
          <div className="answer-tag" style={this.state.clicked ? {display:'inline-flex'} : {display:'none'}}>
             Roof are very different. There is no set time length on replacing a roof. 
             Typically one to two days would be average.
          </div>
        </ul>
          
        </div>
        </div>
        // <div>
        //     <h4>Small header</h4>
        // </div>
    );
  }
}

export default Faq;
