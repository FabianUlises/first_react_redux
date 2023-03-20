import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1 className='counter-state'>{counter}</h1>
      <button id='addCounter' type='button'>Increment</button>
      <button id='subCounter' type='button'>Decrement</button>
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