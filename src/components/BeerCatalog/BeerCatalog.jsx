import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { useSelector, useDispatch } from 'react-redux'
import Column from '../Column/Column'
import {
  reshuflleColums,
  setCurrentBeer,
  reshuffleColumn,
} from '../../redux/actions'
import classes from './BeerCatalog.module.css'

const BeerCatalog = () => {
  const { columns } = useSelector((state) => state.beer)
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
      return
    }
    const column = columns[source.droppableId]
    const columnName = source.droppableId
    const copiedItems = [...column.items]
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)
    const newColumn = { ...column, items: copiedItems }

    dispatch(reshuffleColumn(columnName, newColumn))
  }

  return (
    <div className={classes.catalog}>
      <DragDropContext onDragEnd={(result) => onDragEnd(result, columns)}>
        {Object.entries(columns).map(([columnId, column]) => (
          <Column columnId={columnId} column={column} key={columnId} />
        ))}
      </DragDropContext>
    </div>
  )
}

export default BeerCatalog
