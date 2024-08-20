import React, {Component} from 'react';

class Count extends Component{
    constructor(){
        super();
        this.state = {
            count:0
        }
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decrement = () =>{
        this.setState({count:this.state.count - 1})
    }
    

    render(){
        return(
            <div>
                <button onClick={this.decrement}>DEC</button>
                <h1>Count is {this.state.count}</h1>
                <button onClick={this.increment}>INC</button>
            </div>
        )
    }
}
export default Count;
