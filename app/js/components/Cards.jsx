'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Toggle from 'material-ui/Toggle'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import View from './common/View.jsx'
import SkillCard from './common/SkillCard.jsx'

import searchCardsAction from '../actions/searchCardsAction'
import clearCardsAction from '../actions/clearCardsAction'
import downloadCardAction from '../actions/downloadCardAction'

/**
 * Styles
 */
const style = {
  rowStyle: {
    display: 'flex',
    flexDirection: 'row',
    flex: 100,
  },
  colStyle: {
    display: 'flex',
    flexDirection: 'column',
    flex: 100,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 100,
    justifyContent: 'flex-end',
  },
  toggleContainerBase: {
    display: 'flex',
    flexDirection: 'row',
    flex: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '52px',
  },
  toggleContainer: type => {
    let { toggleContainerBase } = style

    if (type === 'first') {
      return Object.assign({}, toggleContainerBase, {
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '10px',
        paddingRight: '20px',
      })
    } else if (type === 'last') {
      return Object.assign({}, toggleContainerBase, {
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '20px',
        paddingRight: '10px',
      })
    } else {
      return Object.assign({}, toggleContainerBase, {
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
      })
    }
  },
  headingContainer: {
    width: '540px',
    display: 'flex',
    flex: 100,
    justifyContent: 'center'
  }
}

/**
 * Type Array Items
 */
const typeArrayItems = [
  '',
  'Type',
  'Focus',
  'Descriptor'
]

/**
 * Mappings
 */
const mapStateToProps = (state, ownProps) => {
  return {
    result: state.search.result
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clear: () => dispatch(clearCardsAction()),
    query: query => dispatch(searchCardsAction(query)),
    download: card => dispatch(downloadCardAction(card))
  }
}

/**
 * Cards
 */
class Cards extends React.Component {

  constructor (props) {
    super(props)
    this.formData = {}
  }

  handleClear () {
    document.getElementById('desc').value = ''
    document.getElementById('name').value = ''
    document.getElementById('from').value = ''
    document.getElementById('source').value = ''
    document.getElementById('type').value = ''
    this.props.clear()
    this.formData = {}
  }

  handleUpdate (text, field) {
    if (!field) {
      return
    }

    this.formData[field] = text

    let isNotEmpty = Object.keys(this.formData).reduce((prev, key) => {
      return (!!this.formData[key] || prev)
    }, false)

    if (isNotEmpty) {
      this.props.query(this.formData)
    } else {
      this.props.clear()
    }
  }

  renderTypeMenuItems () {
    return typeArrayItems.map((item, index) => {
      return <MenuItem key={index} value={item} primaryText={item} />
    })
  }

  renderCards () {
    let { props: { result }} = this
    let { headingContainer, rowStyle } = style

    if (result && result.length > 0) {
      return result.map((item, index) => <SkillCard key={index} data={item} />)
    } else {
      return (
        <div style={rowStyle}>
          <div style={headingContainer}>
            <p>No Items</p>
          </div>
        </div>
      )
    }
  }

  render () {
    let { rowStyle, colStyle, buttonContainer, toggleContainer, headingContainer } = style

    return (
      <div style={colStyle}>
        <div style={rowStyle}>
          <div style={headingContainer}>
            <span>Search...</span>
          </div>
        </div>
        <div style={rowStyle}>
          <TextField
            floatingLabelText="Name"
            fullWidth={true}
            onChange={(ev, value) => this.handleUpdate(value, 'name')}
            id="name"
          />
          <TextField
            floatingLabelText="From"
            fullWidth={true}
            onChange={(ev, value) => this.handleUpdate(value, 'from')}
            id="from"
          />
        </div>
        <div style={rowStyle}>
          <TextField
            floatingLabelText="Source"
            fullWidth={true}
            onChange={(ev, value) => this.handleUpdate(value, 'source')}
            id="source"
          />
          <SelectField
            floatingLabelText="Type"
            autoWidth={true}
            onChange={(ev, key, payload) => this.handleUpdate(payload, 'type')}
            selectionRenderer={value => value}
            id="type">
            {this.renderTypeMenuItems()}
          </SelectField>
        </div>
        <div style={rowStyle}>
          <TextField
            floatingLabelText="Description"
            fullWidth={true}
            multiLine={true}
            onChange={(ev, value) => this.handleUpdate(value, 'desc')}
            id="desc"
          />
        </div>
        <div style={rowStyle}>
          <div style={toggleContainer('first')}>
            <Toggle
              label="Action"
              onToggle={(ev, value) => this.handleUpdate(value, 'action')}
            />
          </div>
          <div style={toggleContainer('last')}>
            <Toggle
              label="Purchasable"
              onToggle={(ev, value) => this.handleUpdate(value, 'bought')}
            />
          </div>
        </div>
        <div style={buttonContainer}>
          <RaisedButton label="Clear" primary={true} onTouchTap={(ev) => this.handleClear()} />
        </div>
        {this.renderCards()}
      </div>
    )
  }

}

/**
 * Export
 */
export default connect(mapStateToProps, mapDispatchToProps)(Cards)
