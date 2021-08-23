import { combineReducers } from 'redux'
import { beerReducer } from './beerReducer'
import { appReducer } from './appReducer'

export const reducer = combineReducers({
  beer: beerReducer,
  app: appReducer,
})
