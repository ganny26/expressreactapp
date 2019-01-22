import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {

  state = {
    message:null
  }

  componentWillMount() {
    fetch('api/me',{
      method:'GET',
      headers: {
        "Content-Type": "application/json",
        "authtoken":"e9312e80-2cd9-11e8-8e2a-2f9bffb38d7b"
      }
    }).then(res=>{
      return res.json()
    }).then(result=>{
      console.log('result',result);
      this.setState({
        message:result.payload.message
      })
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
      </div>
    )
  }
}
