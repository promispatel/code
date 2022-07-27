import React  from 'react';
import Sub from './Sub';

class Apple extends React.Component{

constructor()
{
    super();
    this.state= {
        count:1
    }
}
render(){

    return(
        <div className='app'>
        <Sub count={this.state.count}/>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Click Me</button>
        </div>
    )
}
}

export default Apple