import React, { useRef } from 'react';
import  SubForwardRef from './SubForwardRef';

function App(){

    const inputRef  = useRef(null);

    function updateInput(){
        inputRef.current.value =1000;

    }

    return(
        <div>
        <h1>Forward Ref</h1>
        <SubForwardRef ref={inputRef}/>
        <button onClick={()=>updateInput()}>Click Me</button>
        </div>
    )
}
export default App;