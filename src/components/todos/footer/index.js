import "../styles.css"
function Footer({todo, setTodo, activeFilter, setActiveFilter}) {

    const clearCompleted = () => {
      setTodo(todo.filter((task) => !task.completed))
    }
  return (
    <footer className="footer">
        <span className="todo-count">
          <strong> {todo.length} </strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a href="#/" className={activeFilter === 0 ? "selected" : ""} onClick={() => setActiveFilter(0)}>All</a>
          </li>
          <li>
            <a href="#/" className={activeFilter === 1 ? "selected" : ""} onClick={() => setActiveFilter(1)}>Active</a>
          </li>
          <li>
            <a href="#/" className={activeFilter === 2 ? "selected" : ""} onClick={() => setActiveFilter(2)}>Completed</a>
          </li>
        </ul>

        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
  )
}

export default Footer