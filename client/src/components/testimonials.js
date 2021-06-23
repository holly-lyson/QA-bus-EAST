import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import logo from '../logo.png';
import logo2 from '../surfLogo.png';
import img1 from "../images/1.png"
// import clients from "./clients"
import './testimonials.css';
import axios, {AxiosInstance} from 'axios';


class Testimonials extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          images: []
        }
      }

    componentDidMount(){
           // #1. First of all you have to fetch the images.
    // fetch('/api/clients')
    //     .then(res => res.json()) // If it's a JSON response, you have to parse it firstly
    //     .then(images => this.setState({ images }, () => console.log("Customers fetched: ", images))) // #2. After that you have to keep the images in the component's state.
        this.handleSubmit();
        
    }

  render() {
    const { images } = this.state
    if(!images) return <div>Images not loaded yet!</div>
    
    // const imgs = clients.map(({id, lastName, photoURL}) => <img src={photoURL} key={id} alt={lastName}/>)
    // const imgs2 = [clients]

    return(
        <div className="blk-background">
        <div className="App">
<<<<<<< HEAD
        <div>
=======
        
            <div>
            {/* {clients.map(({id, lastName, photoURL}) => <img key={id} alt={lastName} src={photoURL}/>)} */}
>>>>>>> branch_Petro
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

  handleSubmit(){
    // e.preventDefault();
    axios({
      method: "POST",
      url:"http://localhost:4000/api/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
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