import { useEffect, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Column from '../Column/Column'
import './BeerList.css'

function BeerList({ beers }) {
  const [columns, setColumns] = useState({
    beer: { name: 'Beer', items: [...beers] },
    cart: { name: 'Cart', items: [] },
  })
  const [search, setSearch] = useState('')
  const searchedBeer = beers.filter((beer) =>
    beer.name.toLowerCase().includes(search.toLowerCase())
  )

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return
    const { source, destination } = result
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId]
      const destColumn = columns[destination.droppableId]
      const sourceItems = [...sourceColumn.items]
      const destItems = [...destColumn.items]
      const [removed] = sourceItems.splice(source.index, 1)
      destItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      })
    } else {
      const column = columns[source.droppableId]
      const copiedItems = [...column.items]
      const [removed] = copiedItems.splice(source.index, 1)
      copiedItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      })
    }
  }
  useEffect(() => {
    setColumns({
      ...columns,
      beer: {
        ...columns['beer'],
        items: [...searchedBeer],
      },
    })
  }, [search])

  return (
    <div className="content">
      <input placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
      <div className="catalog">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column]) => (
            <Column columnId={columnId} column={column} key={columnId} />
          ))}
        </DragDropContext>
      </div>
    </div>
  )
}

export default BeerList
