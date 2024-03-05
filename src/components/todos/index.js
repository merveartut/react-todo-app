import React, { useState } from 'react'
import Item from './item'
import List from './List'
import "./styles.css"

function Todos() {
const [todo, setTodo] = useState([])
  return (
    <section className="todoapp">
    <Item todo={todo} addToDoItem={setTodo} />
    <List todo={todo} setTodo={setTodo} />
    </section>
  )
}

export default Todos