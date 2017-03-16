'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Cards from './Cards.jsx'
import store from './redux/store'

/**
 * DOM
 * @ignore
 */
ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <Route path="/" component={Cards} />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
)
