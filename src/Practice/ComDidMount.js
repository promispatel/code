import  React  from 'react';

class ComDidMount extends React.Component {

    constructor()
   {       super();
            this.state = {
                email:"Promis@test.com"
            };
   }

   componentDidMount(){
    console.log("componentDidMount");
   }

   render(){
    debugger
    this.setState({email:"promis@promis.com"});
    return (
        <div>
        <h1>Hello from componentDidMount</h1>
        <h2>{this.state.email}</h2>
        <button onClick={()=>this.setState({email:"promis@promis.com"})}>Submit</button>
        </div>
    );
   }
}
export default ComDidMount;