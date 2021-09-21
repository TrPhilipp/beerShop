import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
// import './Beer.css'
import { useSelector, useDispatch } from 'react-redux'
import { reshuflleColums } from '../../redux/actions'
import { COLUMN_ID } from '../../utils/consts'
import { COLORS } from './../../utils/consts'
import classes from './Beer.module.css'
import { addBeer } from './../../redux/actions'

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
    dispatch(reshuflleColums(newColumns))
    if (columnId === COLUMN_ID.BEER) {
      dispatch(addBeer(1))
    }
  }

  return (
    <Draggable key={item.id} draggableId={item.name} index={index}>
      {(provided, snapshot) => (
        <div
          className={classes.beer}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            backgroundColor: snapshot.isDragging
              ? COLORS.ITEM_DRAGGING
              : COLORS.ITEM_STANDART,
            ...provided.draggableProps.style,
          }}
        >
          <span className={classes.beer__name}>{item.name}</span>
          <button
            className={classes.beer__btn}
            onClick={() => handleItem(columnId, index)}
          >
            <i
              className={
                columnId === COLUMN_ID.BEER
                  ? 'fas fa-shopping-cart'
                  : 'fas fa-trash'
              }
            ></i>
          </button>
        </div>
      )}
    </Draggable>
  )
}

export default Beer
