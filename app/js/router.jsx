'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Cards from './components/Cards.jsx'

/**
 * Export
 * @ignore
 */
export default (
  <Router>
    <div>
      <Route exact={true} path="/" component={Cards} />
    </div>
  </Router>
)
