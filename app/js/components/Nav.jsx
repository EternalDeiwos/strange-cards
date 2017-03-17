'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'

import Icon from './common/Icon.jsx'

/**
 * Style
 */
const style = {
  toolbarContent: {
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  toolbarGroupContent: {
    paddingLeft: '20px'
  }
}

/**
 * Nav
 */
class Nav extends React.Component {

  get selected () {
    // TODO
    return 0
  }

  select (path) {
    // TODO
  }

  render () {
    let { toolbarContainer, toolbarContent, toolbarGroupContent } = style

    return (
      <BottomNavigation selectedIndex={this.selected}>
        <BottomNavigationItem
          label="Cards"
          icon={<Icon iconClassName="bolt" />}
          onTouchTap={() => this.select('/')}
        />

      </BottomNavigation>
    )
        // Include this when I have some sanity
        // <BottomNavigationItem
        //   label="New"
        //   icon={<Icon iconClassName="plus" />}
        //   onTouchTap={() => this.select('#/new')}
        // />
  }

}

/**
 * Export
 * @ignore
 */
export default Nav
