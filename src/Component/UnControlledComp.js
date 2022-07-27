import React, { useRef, useState } from 'react';

function Ref() {
  let inputRef = useRef(null);
  let [value,setValue] =useState(null);
  function onsubmit(e) {
    e.preventDefault();
    // setValue(inputRef.current.value);
    setValue(document.getElementById("txtName").value);
    
  }
  return (
    <form onSubmit={onsubmit}>
      <div className='App'>
        <input id='txtName' type='text' ref={inputRef} />
        <button>Click Me</button>
      </div>
      <div>{value}</div>
    </form>
  );
}

export default Ref;
