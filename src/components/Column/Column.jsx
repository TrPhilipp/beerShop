import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Beer from './../Beer/Beer'
import { useDispatch } from 'react-redux'
import { addAll, removeAll, setBeer } from '../../redux/actions'
import { BUTTON_LABEL, COLUMN_ID } from '../../utils/consts'
import classes from './Column.module.css'

const Column = ({ columnId, column }) => {
  const dispatch = useDispatch()
  const buttonClasses = [classes.column__btn, classes[`btn__${columnId}`]]
  // buttonClasses.push()
  const handleItems = (columnId) => {
    if (columnId === COLUMN_ID.BEER) {
      dispatch(addAll())
      return
    }
    dispatch(removeAll())
  }

  const checkHeight = (e) =>
    (e.target.scrollTop + e.target.clientHeight) / e.target.scrollHeight > 0.75

  const handleScroll = (e) => {
    if (checkHeight(e)) {
      dispatch(setBeer(10))
    }
  }

  return (
    <div className={classes.column} key={columnId}>
      <button
        disabled={!column.items.length}
        className={buttonClasses.join(' ')}
        onClick={() => handleItems(columnId)}
      >
        {columnId === COLUMN_ID.BEER
          ? BUTTON_LABEL.ADD_ALL
          : BUTTON_LABEL.REMOVE_ALL}
      </button>
      <div className={classes.column__wrapper}>
        <Droppable droppableId={columnId}>
          {(provided, snapshot) => (
            <div
              onScroll={handleScroll}
              className={classes.column__item}
              style={{
                background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
              }}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {column.items.map((item, index) => (
                <Beer
                  key={item.id}
                  item={item}
                  index={index}
                  columnId={columnId}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  )
}

export default Column
