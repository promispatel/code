import React, { useState } from 'react';

function Control(){

    const [count,setCount] = useState(0);

    return(
        <div className='App'>
        <input type="text" value={count} onChange={(e)=>setCount(e.target.value)}/>
        </div>
    )
}

export default Control;