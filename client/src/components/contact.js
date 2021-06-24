import React, { Component } from 'react';
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
      <div className="container">
          
          <div className="row">
            <div className="column">
              <div className="contacts">
                  <p>Call Jeremy:</p>
                  <span className="fa fa-phone "> </span>  609-742-1457 <br/>  
                  <br/>       
              </div>
            </div>
            <div className="column email-form">
              <span className="fa fa-envelope "> Send an Email  </span>
              <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                <label for="name"><br/><br/>Name</label>
                <input type="text" required id="name" name="name" placeholder="Your name..."
                  value={this.state.name} onChange={this.onNameChange.bind(this)}
                />
                <label for="email">Email</label>
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

    );
  }

  // handleSubmit(e){
  //   e.preventDefault();
  //   axios({
  //     method: "POST",
  //     headers: { 'Access-Control-Allow-Origin' : "*",
  //                 'Content-Type': 'application/json'},
  //     url:"http://66.228.35.168:4000/api/send",
  //     data:  this.state
  //   }).then((response)=>{
  //     if (response.data.status === 'success') {
  //       console.log("Success: ", response.data);
  //       alert("Message Sent.");
  //       this.resetForm()
  //     } else if (response.data.status === 'fail') {
  //       console.log("Success: ", response.data);
  //       alert("Message failed to send.")
  //     }
  //   })
  // }
  handleSubmit(e){
    e.preventDefault();
    fetch('/api/send', {
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


}//END APP

export default Contact;
