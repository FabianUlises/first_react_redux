import React, { useState } from 'react'

const TodoList = () => {
    // State
    const [ input, setInput] = useState('');
  return (
    <div>
        <h2>Todo List</h2>
        <form>
            <input type='text' placeholder='enter todo item'
                onChange={(e) => 
                    setInput(e.target.value)
                }
            />
            <button type='submit'>Submit</button>
        </form>
        <ul id='todo-list'>

        </ul>
        <button type='button'>Clear</button>
    </div>
  )
}

export default TodoList;