import React, { Component } from 'react';
import logo from '../logo.png';
import logo2 from '../surfLogo.png';
import './header.css';
// import './menubar';
import MenuBar from './menubar';
import './menubar.css';
import axios, {AxiosInstance} from 'axios';


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
        <div className="blk-background">
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
        </div>

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
