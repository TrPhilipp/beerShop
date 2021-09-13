import React from 'react'
import { useDispatch } from 'react-redux'
import { filterBeer } from './../../redux/actions'
import classes from './Search.module.css'

const Search = () => {
  const dispatch = useDispatch()

  const searchBeer = (e) => {
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
