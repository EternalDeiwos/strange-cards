'use strict'

export default {
  user: function (state={}, action) {
    if (action.type === 'ADD_USER') {
      console.log('ADD_USER')
    }
    return state
  }
}
