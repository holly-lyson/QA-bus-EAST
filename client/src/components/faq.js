import React, { Component } from 'react';
import logo from '../logo.png';
import logo2 from '../surfLogo.png';
import './header.css';
// import './menubar';
import MenuBar from './menubar';
import './menubar.css';


class Faq extends Component {
  render() {
    return(
        <div className="blk-background">
        <div className="faq-page">
          <div className="question-tag">
             What is the best type of roof?
          </div>
          <div className="answer-tag">
             Best type of a roof is one you only have to do once!
          </div>
          <div className="question-tag">
             If my roof leaks do I need a whole new roof?...
          </div>
          <div className="answer-tag">
             Every case is unique. A leak does not necessarily mean you need a whole new roof!
          </div>
          <div className="question-tag">
             How long do roofs last?...
          </div>
          <div className="answer-tag">
             A roof's life is largely dependent on the quality of materials and the trained installers.
          </div>
          <div className="question-tag">
             How long does it take to replace a roof?...
          </div>
          <div className="answer-tag">
             Roof are very different. There is no set time length on replacing a roof. 
             Typically one to two days would be average.
          </div>
        </div>
        </div>
        // <div>
        //     <h4>Small header</h4>
        // </div>
    );
  }
}

export default Faq;
