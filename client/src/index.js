import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap';

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/main.css'
import './styles/animate.css'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'))
