import React, { Component } from 'react';
import './referrals.css';


class Referrals extends Component {

  constructor(props) { 
    super(props);
      this.state = {
        name: '',
        referer: '',
        phone: ''
    }
  }

  render() {
    return(
        <div className="blk-background">
          <div className="referrals-container">
            <div className="introduction">
              <p className="intro-title">Refer and Earn</p>
              <p className="money">$100 cash </p> 
              <p style={{fontSize:'1.8rem'}}>per referral</p>
              <p>as long as the referred customer has a completed service</p>
            </div>
            <form onSubmit={this.handleSubmit.bind(this)}>
            <div >
              {/* <div> */}
              <div className="form-inputs">
                <div>
                <label for="name" className="form-label">Your Name</label>
                </div>
                <input type="name" id="name" name="name" className="form-input" placeholder="Your Name..." value={this.state.name} onChange={this.onNameChange.bind(this)}/>
              </div>
              <div className="form-inputs">
                <label for="referer" className="form-label">Name of referred person </label>
                <input type="referer" id="referer" name="name" className="form-input" placeholder="Referred person's name..." value={this.state.referer} onChange={this.onRefererChange.bind(this)}/>
              </div>
              <div className="form-inputs">
                <label for="phone "className="form-label">Phone number of referred person</label>
                <input type="phone" id="phone" name="name" className="form-input" placeholder="Phone number..." value={this.state.phone} onChange={this.onPhoneChange.bind(this)}/>
              </div>
              <input type="submit" value="Submit"/>
            {/* </div> */}
            </div>
            </form>
          </div>
        </div>
        // <div>
        //     <h4>Small header</h4>
        // </div>
    );
    
  }

  handleSubmit(e){
    e.preventDefault();
    fetch('/api/refer', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
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

  onRefererChange(event) {
      this.setState({referer: event.target.value})
      }

  onPhoneChange(event) {
    this.setState({phone: event.target.value})
    }

}//END 

export default Referrals;
