import {
  ADD_ALL,
  FILTER_BEER,
  GET_ALL_BEER,
  REMOVE_ALL,
  RESHUFFLE_COLUMN,
  RESHUFFLE_COLUMNS,
  SET_BEER,
  SET_CURRENT_BEER,
} from './actionTypes'

const initialState = {
  columns: {
    beer: { name: 'beer', items: [] },
    basket: { name: 'basket', items: [] },
  },
  allBeer: [],
  currentBeer: [],
}

export const beerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BEER:
      return {
        ...state,
        allBeer: [...action.payload],
      }
    case SET_BEER: {
      const newBeer = state.allBeer.splice(0, action.payload)
      return {
        ...state,
        columns: {
          ...state.columns,
          beer: {
            ...state.columns.beer,
            items: [...state.columns.beer.items, ...newBeer],
          },
        },
        currentBeer: [...state.currentBeer, ...newBeer],
      }
    }
    case RESHUFFLE_COLUMN:
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.payload.columnName]: {
            ...action.payload.column,
          },
        },
      }
    case RESHUFFLE_COLUMNS:
      return {
        ...state,
        columns: {
          ...action.payload,
        },
      }
    case ADD_ALL:
      return {
        ...state,
        columns: {
          beer: { ...state.columns.beer, items: [] },
          basket: {
            ...state.columns.basket,
            items: [...state.columns.basket.items, ...state.columns.beer.items],
          },
        },
      }
    case REMOVE_ALL:
      return {
        ...state,
        columns: {
          beer: {
            ...state.columns.beer,
            items: [...state.columns.beer.items, ...state.columns.basket.items],
          },
          basket: { ...state.columns.basket, items: [] },
        },
      }
    case FILTER_BEER:
      return {
        ...state,
        columns: {
          ...state.columns,
          beer: {
            ...state.columns.beer,
            items: state.currentBeer.filter((beer) =>
              beer.name.toLowerCase().includes(action.payload.toLowerCase())
            ),
          },
        },
      }
    case SET_CURRENT_BEER:
      return {
        ...state,
        currentBeer: [...action.payload],
      }
    default:
      return state
  }
}
