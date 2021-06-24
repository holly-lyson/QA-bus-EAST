import React, { Component } from 'react';
import axios, {AxiosInstance} from 'axios';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import logo from '../logo.png';
import logo2 from '../surfLogo.png';
import img1 from "../images/1.png"
import cors from 'cors';
// import clients from "./clients"
import './testimonials.css';

class Testimonials extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          images: []
        }
      }

    componentDidMount(){
        this.callAPI()
        .then(res => this.setState({images: res.express}))
        .catch(err => console.log(err));
        
        
    }
    async callAPI() {
    const resp = await fetch('http://66.228.35.168:4000/api/clients', {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Content-Type' : 'application/json'
        },
        
    });
    const body = await resp.json();
    if (resp.status !== 200){
        throw Error(body.message)
    }

    return body;
        // #1. First of all you have to fetch the images.
    // fetch('/api/clients')
    // .then(res => res.json()) // If it's a JSON response, you have to parse it firstly
    // .then(images => this.setState({ images }, () => console.log("Customers fetched: ", images))) // #2. After that you have to keep the images in the component's state.

    }

  render() {
    this.callAPI()
    .then(res => this.setState({images: res.express}))
    .catch(err => console.log(err));
    const { images } = this.state
    if(!images) return <div>Images not loaded yet!</div>
    
    // const imgs = clients.map(({id, lastName, photoURL}) => <img src={photoURL} key={id} alt={lastName}/>)
    // const imgs2 = [clients]

    return(
        <div className="blk-background">
            <div className="App">
                <div>
                    <div className="form-container">
                        <h1> Testimonial form </h1>
                        <div className="form-inputs">
                            <label className="form-label">Name</label>
                            <input type="text" name="name" className="form-input" placeholder="Your Name..." />
                        </div>
                        <div className="form-inputs">
                            <label className="form-label">email</label>
                            <input type="email" name="email" className="form-input" placeholder="Your email..." />
                        </div>
                        <div className="form-inputs">
                            <label className="form-label">Testimonial</label>
                            <textarea rows="5" rows="3" name="testimonial" className="form-input" placeholder="Your testimonial text..."></textarea>
                        </div>
                        <input type="submit" value="Submit" />
                    </div>
                </div>
            <Carousel autoPlay={true} infiniteLoop={true} showArrows={true} >
                <div>
                    {
                        images.map( image => {
                            <div>
                                <img src={ image.photoURL } alt="img1"/>
                                <p className="legend">{ image.firstName }</p>
                            </div>
                        })

                    }
                </div>

            </Carousel>
            </div>
        </div>

    );
  }
}
// ReactDOM.render(<Testimonials />, document.querySelector('.demo-carousel'));

export default Testimonials;




// <div>
// {/* {clients.map(({id, lastName, photoURL}) => <img key={id} alt={lastName} src={photoURL}/>)} */}
// </div>
// <Carousel autoPlay={true} infiniteLoop={true} showArrows={true} >
//     <div>
//     {/* {imgs} */}
        
//         <img src={img1} alt="img1"/>
//         <p className="legend">1</p>
//     </div>
//     {/* {imgs2.forEach(e => {
//         <div>
//             <image src={e}/>
//         </div> */}
//     {/* })} */}
    
// </Carousel>