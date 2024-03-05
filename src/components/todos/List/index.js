import React, { useState } from 'react'
import Footer from '../footer';
import "../styles.css"

function List({ todo, setTodo }) {
  const [activeFilter, setActiveFilter] = useState(0)
  const toggle = (index) => {
    setTodo(
      todo.map((item, itemId) =>
        itemId === index ? { ...item, completed: !item.completed } : item
      )
    )
  }
  const deleteItem = (index) => {
    setTodo(todo.filter((_, taskIndex) => taskIndex !== index))
  }
  const toggleAll = (e) => {
    if (e.target.checked) {
      setTodo(todo.map((task) => ({ ...task, completed: true })))
    } else {
      setTodo(todo.map((task) => ({ ...task, completed: false })))
    }
  }
  
  const filteredList = todo.filter((task) => {
    if (activeFilter === 1) {
      return task.completed === false
    } else if (activeFilter === 2) {
      return task.completed === true
    } else {
      return task
    }
  })
  return (
    <div>
      <section className='main'>
        <input className='toggle-all' id="toggle-all" type='checkbox' onChange={(e) => toggleAll(e)}/>
        <label htmlFor="toggle-all">
          Mark all as complete
        </label>
        <ul className="todo-list">
          {filteredList.map((item, i) => (

            <li key={i} className={item.completed ? 'completed' : ''}>
              <div className='view' onClick={() => toggle(i)}>
                <input className='toggle' type="checkbox" checked={item.completed} onChange={() => toggle(i)} />
                <label property="text">{item.itemName}</label>
              </div>
              <button className='destroy' onClick={() => deleteItem(i)}/>
              
            </li>
          ))}
        </ul>
      </section>
     <Footer todo={todo} setTodo={setTodo} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
    </div>
  )
}

export default List