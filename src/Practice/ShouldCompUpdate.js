import React from 'react';

class ShouldCompUpdate extends React.Component{

    constructor(){
        super();
        this.state ={
            name:0
        };
    }

    shouldComponentUpdate(){
        if(this.state.name == 0){
            return true;
        }
    }

    render(){

        return(
            <div>
            <h1>ShouldCompUpdate</h1>
            <h2>{this.state.name}</h2>
            <button onClick={()=>{this.setState({name:this.state.name+1})}}>Update</button>
            </div>
        )
    }
}

export default ShouldCompUpdate;