import { SET_LOAD, SET_READY } from './actionTypes'

const initialState = { isLoading: false, isReady: false }

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOAD:
      return {
        ...state,
        isLoading: !state.isLoading,
      }
    case SET_READY: {
      return {
        ...state,
        isReady: true,
      }
    }
    default:
      return state
  }
}
