import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './Beer.css'
import { useSelector, useDispatch } from 'react-redux'
import { reshuflleColums, setBeer, setCurrentBeer } from '../../redux/actions'

const Beer = ({ item, index, columnId }) => {
  const { columns } = useSelector((state) => state.beer)
  const dispatch = useDispatch()

  const handleItem = (columnId, index) => {
    const secondColumn = Object.values(columns).filter(
      (column) => column.name !== columnId
    )[0]
    const sourceItems = [...columns[columnId].items]
    const destItems = [...secondColumn.items]
    const [removed] = sourceItems.splice(index, 1)
    destItems.push(removed)
    const newColumns = {
      ...columns,
      [columns[columnId].name]: {
        ...columns[columnId],
        items: sourceItems,
      },
      [secondColumn.name]: {
        ...secondColumn,
        items: destItems,
      },
    }
    dispatch(setCurrentBeer(newColumns.beer.items))
    dispatch(reshuflleColums(newColumns))
    if (columnId === 'beer') {
      dispatch(setBeer(1))
    }
  }

  return (
    <Draggable key={item.id} draggableId={item.name} index={index}>
      {(provided, snapshot) => (
        <div
          className="beer"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            backgroundColor: snapshot.isDragging ? '#436e6d' : '#69c2c0',
            ...provided.draggableProps.style,
          }}
        >
          <span className="beer__name">{item.name}</span>
          <button
            className="beer__btn"
            onClick={() => handleItem(columnId, index)}
          >
            <i
              className={
                columnId === 'beer' ? 'fas fa-shopping-cart' : 'fas fa-trash'
              }
            ></i>
          </button>
        </div>
      )}
    </Draggable>
  )
}

export default Beer
