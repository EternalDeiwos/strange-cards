'use strict'

export default function searchCards (query) {
  return {
    type: 'CARD_SEARCH',
    query
  }
}
