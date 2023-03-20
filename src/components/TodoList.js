import React from 'react'

const TodoList = () => {
  return (
    <div>
        <h2>Todo List</h2>
        <form>
            <input type='text' placeholder='enter todo item' />
            <button type='submit'>Submit</button>
        </form>
        <ul id='todo-list'>

        </ul>
    </div>
  )
}

export default TodoList;