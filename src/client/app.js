import React from 'react'
import ReactDOM from 'react-dom'
import { InfoCard } from './components/CardView'
import CircularProgress from '@material-ui/core/CircularProgress'
export default class App extends React.Component {
  state = {
    data: null,
    isLoading: true
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

  render() {
    return !this.state.isLoading ?
      <div className="info-container">
        {this.state.data.map((v, i) => {
          return <InfoCard title={v.title} description={v.price} key={i} />
        })}
      </div>
      :
      <CircularProgress />
  }
}
