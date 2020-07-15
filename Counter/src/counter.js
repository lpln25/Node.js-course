import React from 'react';

class Counter extends React.Component{
    
    constructor(props){
        super(props);
        this.increament = this.increament.bind(this);
        this.decremnet = this.decremnet.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count:0
        }
      }
    
      increament(){
        // console.log("+1");
        this.setState((prevState) =>{
            return{
                count: prevState.count + 1
            }
        })
      }
    
      decremnet(){
        // console.log("-1");
        this.setState((prevState) => {
            return{
                count: prevState.count -1
            }
        })
      }
    
      reset(){
        // console.log("reset");
        this.setState((prevState) =>{
            return{
                count : 0
            }
        })
      }

    render(){
        return(
            <div>
            <h1>counter: {this.state.count}</h1>
        <button onClick={this.increament}>+</button>
        <button onClick={this.decremnet}>-</button>
        <button onClick={this.reset}>reset</button>
        </div>
        )
    }
}

export default Counter;