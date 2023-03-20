import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeOne, clearTodo } from './../features/todoSlice';

const TodoList = () => {
    // State
    const [ input, setInput] = useState('');
    // Redux
    const items = useSelector((state) => state.todos.items);
    const dispatch = useDispatch();
    // Handle form submit
    const submitForm = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
    };
    // Render items to dom
    const renderItems = items.map((item, i) => <li key={i} onClick={() => dispatch(removeOne(i))}>{item}</li>)
  return (
    <div>
        <h2>Todo List</h2>
        <form onSubmit={(e) => submitForm(e)}>
            <input type='text' placeholder='enter todo item'
                onChange={(e) => 
                    setInput(e.target.value)
                }
            />
            <button type='submit'>Submit</button>
        </form>
        <ul id='todo-list'>
                {renderItems}
        </ul>
        <button type='button' onClick={() => dispatch(clearTodo())}>Clear</button>
    </div>
  )
}

export default TodoList;