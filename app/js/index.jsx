'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'

import Nav from './components/Nav.jsx'
import Router from './components/Router.jsx'

import store from './store'

/**
 * Tap Event
 * @ignore
 */
injectTapEventPlugin()

/**
 * Styles
 * @ignore
 */
const style = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: '100',
    position: 'relative',
  },
  viewContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: '100',
    position: 'relative',
    justifyContent: 'center',
    margin: '20px'
  }
}

/**
 * MainLayout
 */
class MainLayout extends React.Component {

  render () {
    let { props: { children } } = this
    let { appContainer, viewContainer } = style

    return (
      <div style={appContainer}>
        <Nav />
        <div style={viewContainer}>
          <Router />
        </div>
      </div>
    )
  }

}

/**
 * DOM
 * @ignore
 */
ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <MainLayout />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
)
