'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'

import View from './common/View.jsx'
import SkillCard from './common/SkillCard.jsx'

import searchCardsAction from '../actions/searchCardsAction'
import clearCardsAction from '../actions/clearCardsAction'
import downloadCardAction from '../actions/downloadCardAction'

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

  handleUpdate (text) {
    if (!text) {
      this.props.clear()
    } else {
      this.props.query(text)
    }
  }

  renderCards () {
    let { props: { result }} = this

    if (result && result.length > 0) {
      return result.map((item, index) => <SkillCard key={index} data={item} />)
    } else {
      return <p style={{width: '540px'}}>No Items</p>
    }
  }

  render () {
    return (
      <div>
        <TextField
          floatingLabelText="Search..."
          fullWidth={true}
          onChange={(ev, value) => this.handleUpdate(value)}
        />
        {this.renderCards()}
      </div>
    )
  }

}

/**
 * Export
 */
export default connect(mapStateToProps, mapDispatchToProps)(Cards)
