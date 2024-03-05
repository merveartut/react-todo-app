import React from 'react'
import { useState, useEffect } from 'react'
import "../styles.css"

const initialValues = { itemName: "", completed: false }

function Item({ todo, addToDoItem }) {

    const [item, setItem] = useState(initialValues)

    const onChangeInput = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (item.itemName === '') {
            return false
        }
        addToDoItem([...todo, item])
    }

    useEffect(() => {
        setItem(initialValues)
    }, [todo])

    return (
        <header className='header'>
            <h1>TODOS</h1>
            <form onSubmit={onSubmit} >
                <div>
                    <input name="itemName" className='new-todo' value={item.itemName} placeholder='What needs to be done ?' autoFocus onChange={onChangeInput}/>
                </div>
            </form>
        </header>
    )
}

export default Item