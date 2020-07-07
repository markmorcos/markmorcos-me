import './index.css'

import React from 'react'
import { render } from 'react-dom'

import App from './App'

const root = document.getElementById('app')

render(<App />, root)

if (module.hot) {
  module.hot.accept()
}
