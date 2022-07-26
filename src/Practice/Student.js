
import React,{Component, useState} from 'react';


function Apple(){
  const [name,setName]= useState("");
  const [city,setCity]= useState(null);
  const [valid,setValid]= useState(false);
  const [show,showName] =useState(null);
  const [showCty,showCity] =useState(null);
  const [showVld,showValid] =useState(null);

  function getData(e){
    debugger
    console.log(name,city,valid);
    showName(name);
    showCity(city);
    showValid(valid);
    // e.preventDefault();
  }

  return(  
      <div className='App'>
      <h1>Handle form submit</h1>
      <form onSubmit={getData} >
      <input type="text" disabled placeholder='please enter name' onChange={(e)=>setName(e.target.value)}/><br/><br/>
      <select onChange={(e)=>setCity(e.target.value)}>
      <option>Select City</option>
      <option>Ahmedabad</option>
      <option>Baroda</option>
      </select>
      <input type="checkbox" onChange={(e)=>setValid(e.target.checked)}/><span>Is Valid?</span><br/><br/>
      <button type='submit'>Submit</button><br/><br/>
      
      </form>
      <div>
      <label>Name is :{show}</label><br/><br/>
      <label>City is :{showCty}</label><br/><br/>
      <label>Is Valid :{showVld}</label>
      </div>
      </div>  
                          
  )
}

export default Apple;
