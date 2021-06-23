import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'//
import logo from '../logo.png';
import logo2 from '../surfLogo.png';
import './header.css';
// import './menubar';
import MenuBar from './menubar';
import './menubar.css';
import './contact.css';
import axios from 'axios';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
      }
  render() {
    return(
      <Container fluid="md">
        <Row>
            <h2>Contact Us</h2>
        </Row>
        <Row xs="auto">
            <Col>
              <div class="contacts">
                <span class="fa fa-phone "></span>  001 1023 567  
                <br/>
                <span class="fa fa-envelope "></span> contact@company.com         
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm>Hello            </Col>
            <Col sm>Hello            </Col>
        </Row>
        
        <div class="row input-container">
            <div class="col-xs-6">
              <div class="styled-input wide">
                <input type="text" required />
                <label>Name</label> 
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="styled-input left">
                <input type="text" required />
                <label>Email</label> 
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="styled-input right"> 
                <input type="text" required />
                <label>Phone Number</label> 
              </div>
            </div>
            <div class="col-xs-6">
              <div class="styled-input wide">
                <textarea required></textarea>
                <label>Message</label>
              </div>
            </div>
            <div class="col-xs-6">
              <div class="btn-lrg submit-btn">Send Message</div>
            </div>
        </div>
      </Container>
      
        /*<div className="blk-background">
        <div className="App">
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" aria-describedby="emailHelp" />
              </div>
              <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>*/
        // <div>
        //     <h4>Small header</h4>
        // </div>
    );
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      url:"http://localhost:3002/send",
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


}//END APP

export default Contact;
