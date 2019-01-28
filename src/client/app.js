import React from 'react'
import ReactDOM from 'react-dom'
import { InfoCard } from './components/CardView'
import CircularProgress from '@material-ui/core/CircularProgress'
import ButtonAppBar from './components/Navigation';
export default class App extends React.Component {
  state = {
    data: null,
    isLoading: true,
    isLoggedIn:false
  }

  componentWillMount() {
    fetch('api/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authtoken: 'e9312e80-2cd9-11e8-8e2a-2f9bffb38d7b'
      }
    })
      .then(res => {
        return res.json()
      })
      .then(result => {
        console.log('result', result)
        this.setState({
          isLoading: false,
          data: result.payload
        })
      })
  }

  handleLogin = () =>{
    console.log('handleLogin');
    this.setState({
      isLoggedIn:!this.state.isLoggedIn
    })
  }

  render() {
    return !this.state.isLoading ?
      <div>
        <ButtonAppBar isLoggedIn={this.state.isLoggedIn} handleLogin={this.handleLogin}/>
        <div className="info-container">

          {this.state.data.map((v, i) => {
            return <InfoCard title={v.title} description={v.price} key={i} />
          })}
        </div>
      </div>

      :
      <CircularProgress />
  }
}
