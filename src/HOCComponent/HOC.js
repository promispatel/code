import React, { useState } from 'react';

function FOC(){

    return(
        <div className='App'>
        <MainFOCRed cmp={Counter}/>
        <MainFOCBlue cmp={Counter}/>
        </div>
    )

}

function MainFOCRed(props){
    return <h2 style={{backgroundColor:"red"}}><props.cmp/></h2>
}
function MainFOCBlue(props){
    return <h2 style={{backgroundColor:"blue"}}><props.cmp/></h2>
}
function Counter(){

    const [count,setCount]=useState(0);
   return(
    <div className='App'>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Click Me</button>
    </div>
    )
}

export default FOC;