import React, { Component } from 'react';
import logo from '../logo.png';
import logo2 from '../surfLogo.png';
import './header.css';
// import './menubar';
import MenuBar from './menubar';
import './faq.css';

// class Faq extends Component {
//    render() {
//       return(
//          <div id="app"></div>
//       );
//    }
// }

class Accordion extends Component {
   render() {
      const { title, answer, expand, onClick } = this.props;
    
      return(
         <div>
            <dt className={expand ? 'title is-expanded' : 'title'} onClick={onClick}>
               {title}
            </dt>
            <dd className={expand ? 'content is-expanded' : 'content'} onClick={onClick}>
               <p>{answer}</p>
            </dd>
         </div>
      );
   }
}

class Faq extends Component {
   constructor (props) {
      super(props);
      this.state = {
         block1: false,
         block2: false,
         block3: false,
         block4: false
      };
   }

   toggle = (index) => () => {
      this.setState({ [`block${index}`]: !this.state[`block${index}`]});
   }

   toggleExpand = (expand = false) => () => {
      this.setState({
        block1: expand,
        block2: expand,
        block3: expand,
        block4: expand
      });
    }

    render() {
      const accordionList = [
         { title: 'What is the best type of roof?', 
            answer: 'Best type of a roof is one you only have to do once!' }, 

         { title: 'If my roof leaks do I need a whole new roof?...', 
            answer: 'Every case is unique. A leak does not necessarily mean you need a whole new roof!' }, 

         { title: 'How long do roofs last?...', 
            answer: 'A roof\'s life is largely dependent on the quality of materials and the trained installers.' },

         { title: 'How long does it take to replace a roof?', 
            answer: 'Roofs are very different. There is no set time length on replacing a roof. Typically one to two days would be average.' }
      ];
      
      return <div className="container">
        <h1>Frequently Asked Questions</h1>
        <button type="button" className="btn" onClick={this.toggleExpand(true)}>Expand All</button>
        <button type="button" className="btn" onClick={this.toggleExpand()}>Collapse All</button>
        <dl className="accordion">
          {
            accordionList.map((item, index) => (
              <Accordion title={item.title} answer={item.answer} expand={this.state[`block${index+1}`]} onClick={this.toggle(index + 1)} />
            ))
          }
        </dl>
      </div>;
    }
}
  
//React.render(<Application />, document.getElementById('app'));

                {/* <ul className="questions-list">
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
             Roofs are very different. There is no set time length on replacing a roof. 
             Typically one to two days would be average.
          </div>
        </ul>*/}
          
        // <div>
        //     <h4>Small header</h4>
        // </div>

export default Faq;

