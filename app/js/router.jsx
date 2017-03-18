'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import StrangeCards from './components/StrangeCards.jsx'

class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={StrangeCards} />
        </div>
      </BrowserRouter>
    )
  }
}

/**
 * Export
 * @ignore
 */
export default Router
