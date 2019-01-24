import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

let root = document.getElementById('app')
ReactDOM.render(<App />, root)

if (module.hot) {
  // Whenever a new version of App.js is available
  module.hot.accept()
}
