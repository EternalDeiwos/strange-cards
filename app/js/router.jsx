'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import StrangeCards from './components/StrangeCards.jsx'
import NewCard from './components/NewCard.jsx'

const history = createBrowserHistory()

/**
 * Export
 * @ignore
 */
export default (
  <HashRouter history={history}>
    <div>
      <Route exact={true} path="/" component={StrangeCards} />
      <Route path="/strange" component={StrangeCards} />
      <Route path="/numenera" component={NewCard} />
      <Route path="/pathfinder" component={NewCard} />
      <Route path="/dnd4" component={NewCard} />
      <Route path="/dnd5" component={NewCard} />
    </div>
  </HashRouter>
)
