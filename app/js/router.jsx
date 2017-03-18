'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import StrangeCards from './components/StrangeCards.jsx'

/**
 * Export
 * @ignore
 */
export default (
  <Router>
    <div>
      <Route exact={true} path="/" component={StrangeCards} />
    </div>
  </Router>
)
