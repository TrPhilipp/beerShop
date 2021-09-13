import BeerApi from './../API/BeerApi'
import * as actions from './actionTypes'

export const getAllBeer = () => async (dispatch) => {
  try {
    dispatch(setLoad())
    const response = await BeerApi.getAllBeer()
    dispatch({ type: actions.GET_ALL_BEER, payload: response })
    dispatch(setBeer(20))
    dispatch(setLoad())
    dispatch(setReady())
  } catch (error) {
    console.log(error)
  }
}

export const setBeer = (count) => ({ type: actions.SET_BEER, payload: count })

export const reshuffleColumn = (columnName, column) => ({
  type: actions.RESHUFFLE_COLUMN,
  payload: { columnName, column },
})

export const reshuflleColums = (columns) => ({
  type: actions.RESHUFFLE_COLUMNS,
  payload: columns,
})

export const addAll = () => ({ type: actions.ADD_ALL })
export const removeAll = () => ({ type: actions.REMOVE_ALL })

export const filterBeer = (search) => ({
  type: actions.FILTER_BEER,
  payload: search,
})

export const setLoad = () => ({ type: actions.SET_LOAD })
export const setReady = () => ({ type: actions.SET_READY })
export const setCurrentBeer = (beer) => ({
  type: actions.SET_CURRENT_BEER,
  payload: beer,
})
