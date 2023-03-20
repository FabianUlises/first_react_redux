import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './../features/counterSlice';

const Counter = () => {
  // Get state from redux store
  const count = useSelector((state) => state.value)
  // useDispatch hook
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className='counter-state'>{count}</h1>
      <button id='addCounter' type='button' onClick={() => dispatch(increment())}>Increment</button>
      <button id='subCounter' type='button' onClick={() => dispatch(decrement())}>Decrement</button>
      <form className='counter-form'>
        <input type='text' placeholder='enter value' id='inputValue'/>
        <button type='submit' onClick={(e) =>{
          e.preventDefault();
          const text = document.querySelector('#inputValue').value;
          console.log(text);
        } }>Submit</button>
      </form>
    </div>
  )
}

export default Counter;