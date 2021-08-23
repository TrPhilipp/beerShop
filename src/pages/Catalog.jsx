import { DragDropContext } from 'react-beautiful-dnd'
import Column from '../components/Column/Column'
import { useDispatch, useSelector } from 'react-redux'
import {
  filterBeer,
  getAllBeer,
  reshuffleColumn,
  reshuflleColums,
  setCurrentBeer,
} from './../redux/actions'
import Loader from './../components/Loader/Loader'

const Catalog = () => {
  const { columns } = useSelector((state) => state.beer)
  const { isLoading, isReady } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  const onDragEnd = (result, columns) => {
    if (!result.destination) return
    const { source, destination } = result
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId]
      const destColumn = columns[destination.droppableId]
      const sourceItems = [...sourceColumn.items]
      const destItems = [...destColumn.items]
      const [removed] = sourceItems.splice(source.index, 1)
      destItems.splice(destination.index, 0, removed)
      const newColumns = {
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      }
      dispatch(setCurrentBeer(newColumns.beer.items))
      dispatch(reshuflleColums(newColumns))
    } else {
      const column = columns[source.droppableId]
      const columnName = source.droppableId
      const copiedItems = [...column.items]
      const [removed] = copiedItems.splice(source.index, 1)
      copiedItems.splice(destination.index, 0, removed)
      const newColumn = { ...column, items: copiedItems }

      dispatch(reshuffleColumn(columnName, newColumn))
    }
  }

  const loadBeer = () => {
    dispatch(getAllBeer())
  }

  const searchBeer = (e) => {
    const search = e.target.value
    dispatch(filterBeer(search))
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="content">
      {!isReady ? (
        <button className="content__btn" onClick={() => loadBeer()}>
          Load catalog
        </button>
      ) : (
        <>
          <input
            className="content__search"
            placeholder="Search"
            onChange={searchBeer}
          />
          <div className="catalog">
            <DragDropContext onDragEnd={(result) => onDragEnd(result, columns)}>
              {Object.entries(columns).map(([columnId, column]) => (
                <Column columnId={columnId} column={column} key={columnId} />
              ))}
            </DragDropContext>
          </div>
        </>
      )}
    </div>
  )
}

export default Catalog
