import React from 'react'
import ReactDOM from 'react-dom'
import './reset.scss'
import './index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import VConsole from 'vconsole'

const _ = new VConsole({
  maxLogNumber: 1000,
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
