import React from 'react'
import './Search.css'
import { useDispatch } from 'react-redux'
import { filterBeer } from './../../redux/actions'

const Search = () => {
  const dispatch = useDispatch()

  const searchBeer = (e) => {
    const search = e.target.value
    dispatch(filterBeer(search))
  }
  return (
    <div>
      <input className="search" placeholder="Search" onChange={searchBeer} />
    </div>
  )
}

export default Search
