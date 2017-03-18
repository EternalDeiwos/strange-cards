'use strict'

import CoreData from '../../data/the_strange_core_abilities_0317.json'

const db = [].concat(CoreData)

export default function SearchReducer (previous={}, action) {
  if (action.type === 'CARD_SEARCH') {
    let { query: { name, from, source, action: isAction, bought: isBought, type, desc }} = action
    let filters = {}

    if (name) {
      filters.name = val => val.toLowerCase().indexOf(name.toLowerCase()) > -1
    }

    if (from) {
      // TODO change how "from" is represented (i.e. split type and tier)
      filters.from = val => val.filter(item => item.toLowerCase().indexOf(from.toLowerCase()) > -1).length > 0
    }

    if (source) {
      filters.source = val => val.filter(item => item.book.toLowerCase().indexOf(source.toLowerCase()) > -1).length > 0
    }

    if (isAction !== undefined) {
      filters.action = val => val === isAction
    }

    if (isBought !== undefined) {
      filters.bought = val => val === isBought
    }

    if (type) {
      filters.type = val => val.toLowerCase().indexOf(type.toLowerCase()) > -1
    }

    if (desc) {
      filters.desc = val => val.toLowerCase().indexOf(desc.toLowerCase()) > -1
      filters.small = val => val.toLowerCase().indexOf(desc.toLowerCase()) > -1
    }

    return Object.assign({}, previous, {
      result: db.filter(ability => {
        return Object.keys(filters).reduce((prev, key) => {
          if (!prev) {
            return prev
          }

          return filters[key](ability[key])
        }, true)
      }).slice(0, 10)
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
