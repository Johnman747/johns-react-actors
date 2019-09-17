import React, { Component } from 'react';

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
            impression: e.target.value
        });
    })

    joinBtn = (()=>{
        if(this.state.firstName === '' || this.state.lastName === '' || this.state.impression === ''){
            alert('Please fill all fields')
            return
        }else{
            this.setState({
                status: true
        })
        return
        }
    })

    render() {
      const button = this.state.status? <div> {this.state.firstName} {this.state.lastName}'s best impression is {this.state.impression}</div> : ""

      return (
       <>
       <h2>Contact</h2>
        <input onChange={this.firstName} placeholder="First Name"></input>
        <input onChange={this.lastName} placeholder="Last Name"></input>
        <input onChange={this.impression} placeholder="Best Impression"></input>
        <button onClick={this.joinBtn}>Join Us!</button>
        {button}
        <p>Phone: 1-800-WE-REACT</p>
        <p>info@ReactActors.com</p>
       </>
      );
    }
  }
  
  export default Contact;