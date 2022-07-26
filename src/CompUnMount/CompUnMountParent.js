import React from 'react';
import CompUnMountChild from './CompUnMountChild';

class CompUnMountParent extends React.Component{

    constructor(){
        super();
        this.state ={
            name :true
        };
    }

    render(){
        return(
            <div>
            <h1>CompUnMountParent</h1>
            {
                this.state.name ? <CompUnMountChild/> : <h1>removed</h1>
            }
            <button onClick={()=>this.setState({name:!this.state.name})}>Toggle</button>
            </div>
        )
    }
}

export default CompUnMountParent;