'use strict'

export default function downloadCard (card) {
  return {
    type: 'CARD_DOWNLOAD',
    card
  }
}
