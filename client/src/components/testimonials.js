import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import logo from '../logo.png';
import logo2 from '../surfLogo.png';
import img1 from "../images/1.png"
import clients from "./clients"
import './testimonials.css';

class Testimonials extends Component {
  render() {
      const imgs = clients.map(({id, lastName, photoURL}) => <img src={photoURL} key={id} alt={lastName}/>)
        const imgs2 = [clients]
    return(
        <div className="blk-background">
        <div className="App">
            <div>
            {/* {clients.map(({id, lastName, photoURL}) => <img key={id} alt={lastName} src={photoURL}/>)} */}
            </div>
            <Carousel showArrows={true} >
                <div>
                {/* {imgs} */}
                    
                    <img src={img1} alt="img1"/>
                    <p className="legend">Legend 1</p>
                </div>
                {imgs2.forEach(e => {
                    <div>
                        <image src={e}/>
                    </div>
                })}
                
            </Carousel>
        </div>
        </div>
        // <div>
        //     <h4>Small header</h4>
        // </div>
    );
  }
}
// ReactDOM.render(<Testimonials />, document.querySelector('.demo-carousel'));

export default Testimonials;
