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
          clients: [],
          name: '',
          email: '',
          message: ''
        }
      }

    componentDidMount(){

        fetch('/api/clients')
            .then(res => res.json()) 
            .then(clients => this.setState({ clients }, () => console.log("Customers fetched: ", clients))) 

    }


  render() {

    const { clients } = this.state
    if(!clients) return <div>Images not loaded yet!</div>
    // const imgs = images.map(({id, lastName, photoURL}) => <img src={photoURL} key={id} alt={lastName}/>)
    // const imgs2 = [clients]
    for (var i in clients){
        var o = clients[i];
        console.log(o.lastName);
    }

    return(
        <div className="blk-background">
            <div className="App">
                <div>
                    <div className="form-container">
                        <h1> Testimonial form </h1>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-inputs">
                            <label for="name" className="form-label">Name</label>
                            <input type="text" id="name" name="name" className="form-input" placeholder="Your Name..." value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                        </div>
                        <div className="form-inputs">
                            <label for="email" className="form-label">email</label>
                            <input id="email" type="email" name="name" className="form-input" placeholder="Your email..." value={this.state.referer} onChange={this.onRefererChange.bind(this)}/>
                        </div>
                        <div className="form-inputs">
                            <label for="message" className="form-label">Testimonial</label>
                            <textarea id="message" type="message" rows="5" rows="3" name="message" className="form-input" placeholder="Your testimonial text..." value={this.state.phone} onChange={this.onPhoneChange.bind(this)}></textarea>
                        </div>
                        <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
                <div style={{paddingTop : "25pt"}}>
                <Carousel  autoPlay={true} infiniteLoop={true} showArrows={true} >
                    <div>
                        {
                            clients.map( c => {
                                <div>
                                    <img src={ c.photoURL } alt="img1"/>
                                    <p className="legend">{ c.firstName }</p>
                                </div>
                            })

                        }
                    </div>

                </Carousel>
            </div>
            </div>
        </div>

    );
  }


  handleSubmit(e){
    e.preventDefault();
    fetch('/api/apply', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      // body: JSON.stringify(this.state)
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(resp => {
      console.log(resp);
    })
    .catch((err) => {
      console.error(err);
    });
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }

    onNameChange(event) {
    this.setState({name: event.target.value})
    }

onEmailChange(event) {
    this.setState({email: event.target.value})
    }

onMessageChange(event) {
    this.setState({message: event.target.value})
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