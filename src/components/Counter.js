import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './../features/counterSlice';

const Counter = () => {
  // State
  const [ input, setInput ] = useState(0);
  // Get state from redux store
  const count = useSelector((state) => state.value)
  // useDispatch hook
  const dispatch = useDispatch();
  // Handle form submit
  const byAmountSubmit = (e) => {
    e.preventDefault();
    if(!Number(input)) return
    dispatch(incrementByAmount(Number(input)));
    document.querySelector('#inputValue').value = '';
  };
  return (
    <div>
      <h1 className='counter-state'>{count}</h1>
      <button id='addCounter' type='button' onClick={() => dispatch(increment())}>Increment</button>
      <button id='subCounter' type='button' onClick={() => dispatch(decrement())}>Decrement</button>
      <form className='counter-form' onSubmit={(e) => byAmountSubmit(e)}>
        <input type='text' placeholder='enter value' id='inputValue' onChange={(e) => setInput(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Counter;