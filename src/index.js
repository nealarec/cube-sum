import React from 'react'
import { render } from 'react-dom'
import './styles/index.css'
import App from './app'

let root = document.getElementById('root')
render(<App />, root)

if (module.hot) {
    module.hot.accept('./app', () => {
        let NextApp = require('./app').default
        render(<NextApp />, root)
    })
}