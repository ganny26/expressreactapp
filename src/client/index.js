import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import '../client/styles/app.css'
let root = document.getElementById('app')
ReactDOM.render(<App />, root)

if (module.hot) {
  // Whenever a new version of App.js is available
  module.hot.accept()
}
