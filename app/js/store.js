'use strict'

import { createStore, combineReducers } from 'redux'
import reducers from './reducers'

const store = createStore(
  combineReducers(
    Object.assign({}, reducers)
  )
)

export default store
