import React, { Component } from 'react';
import './Contact.css'
class Contact extends Component {
    constructor(props){
        super(props);
      
        this.state ={
          firstName: '',
          lastName: '',
          impression: '',
          status: false
        }
    }

    firstName = ((e)=>{
        this.setState({
            firstName: e.target.value
        });
    })

    lastName = ((e)=>{
        this.setState({
            lastName: e.target.value
        });
    })

    impression = ((e)=>{
        this.setState({
            impression: e.target.value,
            status: true
        });
    })

    joinBtn = (()=>{
        alert('Thanks for joining us'+ this.state.firstName);
        this.setState({
            firstName: '',
            lastName: '',
            impression: '',
            status: false
          })
    })

    render() {
        const thing = this.state.status ? <p>{this.state.firstName} {this.state.lastName}'s best impression is {this.state.impression}</p> : '';

      return (
       <>
       <h2>Contact</h2>
        <input onChange={this.firstName} value={this.state.firstName} placeholder="First Name"></input>
        <input onChange={this.lastName} value={this.state.lastName} placeholder="Last Name"></input>
        <input onChange={this.impression} value={this.state.impression}  placeholder="Best Impression"></input>
        <button onClick={this.joinBtn}>Join Us!</button>
        {thing}
        <p>Phone: 1-800-WE-REACT</p>
        <p>info@ReactActors.com</p>
       </>
      );
    }
  }
  
  export default Contact;