import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'//
import logo from '../logo.png';
import logo2 from '../surfLogo.png';
import './header.css';
// import './menubar';
import MenuBar from './menubar';
import './menubar.css';
import axios, {AxiosInstance} from 'axios';
import './contact.css';


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
      <div class="container">
          
          <div class="row">
            <div class="column">
              <div class="contacts">
                  <p>Call Jeremy:</p>
                  <span class="fa fa-phone "> </span>  609-742-1457 <br/>  
                  <br/>       
              </div>
            </div>
            <div class="column">
              <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                <span class="fa fa-envelope "> Send an Email  </span> <br/><br/>
                <label for="fname">Name</label>
                <input type="text" required id="name" name="name" placeholder="Your name..."
                  value={this.state.name} onChange={this.onNameChange.bind(this)}
                />
                <label for="lname">Email</label>
                <input type="email" id="lname" name="lastname" placeholder="Your email address..."
                  aria-describedby="emailHelp" 
                  value={this.state.email} onChange={this.onEmailChange.bind(this)}
                />
                <label for="message">Message</label>
                <textarea rows="5" id="message" name="subject" placeholder="Write your message here..." 
                  value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
                <input type="submit" value="Submit"/>
              </form>
            </div>
          </div>
      </div>
      
        /*<div className="blk-background">
        <div className="App">
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" />
                  <input type="text" className="form-control" id="name" value={this.state.name} 
                  onChange={this.onNameChange.bind(this)} />
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" aria-describedby="emailHelp" />
                  <input type="email" className="form-control" id="email" 
                  aria-describedby="emailHelp" 
                  value={this.state.email} onChange={this.onEmailChange.bind(this)} />
              </div>
              <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" rows="5"></textarea>
                  <textarea className="form-control" rows="5" id="message" 
                  value={this.state.message} onChange={this.onMessageChange.bind(this)} />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

        </div>

    </div>*/

    );
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      headers: { 'Access-Control-Allow-Origin' : "*",
                  'Content-Type': 'application/json'},
      url:"http://66.228.35.168:4000/api/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        console.log("Success: ", response.data);
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        console.log("Success: ", response.data);
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
