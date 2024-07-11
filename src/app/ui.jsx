// import * as React from 'react'
// import * as ReactDOM from 'react-dom'

import React from 'react'
import { createRoot } from 'react-dom/client'

import * as styles from './assets/stylesheets/App.css'
import App from './App'

const props = {}

document.addEventListener('DOMContentLoaded', () => {
  console.log('LOADED')
  const root = createRoot(document.getElementById('react-page'))
  console.log(root)
  root.render(<App {...props} />)
})
