import React, { useRef } from 'react';

function App() {
  let inputRef = useRef(null);

  function refclick() {
    // inputRef.current.value = 11000;
    inputRef.current.style.color = 'red';
  }
  return (
    <div className='App'>
      <input type='text' ref={inputRef} />{' '}
      <button onClick={() => refclick()}> Click Me</button>
    </div>
  );
}

export default App;
