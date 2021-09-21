import {
  ADD_ALL,
  ADD_BEER,
  FILTER_BEER,
  GET_ALL_BEER,
  REMOVE_ALL,
  RESHUFFLE_COLUMN,
  RESHUFFLE_COLUMNS,
} from './actionTypes'

const initialState = {
  columns: {
    beer: { name: 'beer', items: [] },
    basket: { name: 'basket', items: [] },
  },
  allBeer: [],
}

export const beerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BEER:
      return {
        ...state,
        allBeer: [...action.payload],
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
            items: action.payload
              ? filterBeer(
                  action.payload,
                  state.allBeer,
                  state.columns.basket.items
                )
              : returnBeer(state.allBeer, state.columns.basket.items),
          },
        },
      }
    case ADD_BEER:
      let initialNumber =
        state.columns.beer.items.length + state.columns.basket.items.length
      if (initialNumber === 80) {
        return state
      }
      const newArray = [
        ...state.allBeer.slice(initialNumber, initialNumber + action.payload),
      ]
      return {
        ...state,
        columns: {
          ...state.columns,
          beer: {
            ...state.columns.beer,
            items: [...state.columns.beer.items, ...newArray],
          },
        },
      }
    default:
      return state
  }
}

function filterBeer(searchQ, allBeer, array2) {
  return allBeer.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchQ.toLowerCase()) &&
      !array2.some((i) => i.id === item.id)
    )
  })
}

function returnBeer(allBeer, array2) {
  return allBeer.filter((item) => {
    return item.id < 21 && !array2.some((i) => i.id === item.id)
  })
}
