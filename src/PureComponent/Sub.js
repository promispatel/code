import React from 'react';
class Sub extends React.PureComponent{

    
    render(){
        console.log("component")
        return(
            <div className='app'>
            <h1>Hello</h1>
            <h2>{this.props.count}</h2>
            </div>
        )
    }
}

export default Sub