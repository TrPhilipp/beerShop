import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Beer from './../Beer/Beer'
import './Column.css'
import { useDispatch } from 'react-redux'
import { addAll, removeAll, setBeer } from '../../redux/actions'

const Column = ({ columnId, column }) => {
  const dispatch = useDispatch()
  const handleItems = (columnId) => {
    if (columnId === 'beer') {
      dispatch(addAll())
    } else {
      dispatch(removeAll())
    }
  }

  const handleScroll = (e) => {
    if (
      (e.target.scrollTop + e.target.clientHeight) / e.target.scrollHeight >
      0.75
    ) {
      dispatch(setBeer(10))
    }
  }

  return (
    <div className="column" key={columnId}>
      <button
        disabled={!column.items.length}
        className={`column__btn btn__${columnId}`}
        onClick={() => handleItems(columnId)}
      >
        {columnId === 'beer' ? 'Add all' : 'Remove all'}
      </button>
      <div className="column__wrapper">
        <Droppable droppableId={columnId}>
          {(provided, snapshot) => (
            <div
              onScroll={handleScroll}
              className="column__item"
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
