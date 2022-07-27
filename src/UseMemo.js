import React, { useState, useMemo } from 'react';

function App() {
  const [item, setItem] = useState(0);
  const [count, setCount] = useState(10);

  const multicountMemo = useMemo(
    function multicount() {
      console.log('multicount');
    },
    [item],
  );

  return (
    <div className='App'>
      <h1> Item: {item} </h1>
      <h1> Count: {count} </h1>
      <h2>{multicountMemo}</h2>
      <button onClick={() => setItem(item + 1)}> Item </button>
      <button onClick={() => setCount(count * 10)}> Count </button>
    </div>
  );
}

export default App;
