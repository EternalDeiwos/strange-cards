'use strict'

import CoreData from '../data/the_strange_core_abilities_0317.json'

const db = [].concat(CoreData)

export default function SearchReducer (previous={}, action) {

  if (action.type === 'CARD_SEARCH') {
    return Object.assign({}, previous, {
      result: db
    })
  } else if (action.type === 'CARD_CLEAR') {
    return Object.assign({}, previous, {
      result: []
    })
  } else if (action.type === 'CARD_DOWNLOAD') {
    let { card } = action
    card.save()
    return previous
  }

  return previous
}
