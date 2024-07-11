import * as React from 'react'
import * as ReactDOM from 'react-dom'

import * as styles from './assets/stylesheets/App.css'
import App from './App'

const props = {}

ReactDOM.render(<App {...props} />, document.getElementById('react-page'))
