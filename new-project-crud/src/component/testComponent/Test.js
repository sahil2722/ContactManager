import React, { Component } from 'react'



class Test extends Component {

    state= {
        username: '',
        email:'',
        website:'',
         
          
    } 

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => this.setState({
      username: data.username,
      email: data.email,
      website: data.website,  
   }))
}

  render() {
      const { username , email , website} = this.state
    return (
      <div>
        <h1>{username}</h1>
        <h1>{email}</h1>
        <p>{website}</p>
       
      
   
      </div>
    )
  }
}

export default  Test