import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterBeer } from './../../redux/actions'
import classes from './Search.module.css'

const Search = () => {
  const { beer } = useSelector((state) => state.beer.columns)
  const dispatch = useDispatch()

  const searchBeer = (e) => {
    if (!beer.items.length) return
    const search = e.target.value
    dispatch(filterBeer(search))
  }
  return (
    <>
      <input
        className={classes.search}
        placeholder="Search"
        onChange={searchBeer}
      />
    </>
  )
}

export default Search
