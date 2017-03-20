'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import { Link } from 'react-router-dom'

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
          label="The Strange"
          icon={<Icon iconClassName="bolt" />}
          onTouchTap={() => window.location.hash = '#/strange'}
        />
        <BottomNavigationItem
          label="Numenera"
          icon={<Icon iconClassName="gear" />}
          onTouchTap={() => window.location.hash = '#/numenera'}
          disabled={true}
        />
        <BottomNavigationItem
          label="Pathfinder"
          icon={<Icon iconClassName="safari" />}
          onTouchTap={() => window.location.hash = '#/pathfinder'}
          disabled={true}
        />
        <BottomNavigationItem
          label="DnD 4"
          icon={<Icon iconClassName="circle" />}
          onTouchTap={() => window.location.hash = '#/dnd4'}
          disabled={true}
        />
        <BottomNavigationItem
          label="DnD 5"
          icon={<Icon iconClassName="circle-o" />}
          onTouchTap={() => window.location.hash = '#/dnd5'}
          disabled={true}
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
