import { useDispatch, useSelector } from 'react-redux'
import { getAllBeer } from './../redux/actions'
import Loader from './../components/Loader/Loader'
import Search from '../components/Search/Search'
import BeerCatalog from '../components/BeerCatalog/BeerCatalog'
import classes from '../App.module.css'

const Catalog = () => {
  const { isLoading, isReady } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  const loadBeer = () => {
    dispatch(getAllBeer())
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="content">
      {!isReady ? (
        <button className={classes.content__btn} onClick={() => loadBeer()}>
          Load catalog
        </button>
      ) : (
        <>
          <div className={classes.search__wrapper}>
            <Search />
          </div>
          <BeerCatalog />
        </>
      )}
    </div>
  )
}

export default Catalog
