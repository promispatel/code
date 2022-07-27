import react,{useState,useEffect} from 'react';

function UseEffect(){
    const [data,setData]=useState(0);

    useEffect(()=>
    {alert("useeffect");},[data]
    )

    return(
        <div>
        <h1>useEffect</h1>
        <h2>{data}</h2>
        <button onClick={()=>setData(data+1)}>Submit</button>
        </div>
    );
}

export default UseEffect;