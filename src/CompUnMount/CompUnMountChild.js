import React from 'react';

class CompUnMountChild extends React.Component{

    componentWillUnmount(){
        alert("componentWillUnmount removed");
    }
    render(){

        return(
            <div>
            <h1>CompUnMountChild</h1>
            </div>
        )
    }
}

export default CompUnMountChild