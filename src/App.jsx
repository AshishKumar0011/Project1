import "./App.css";
import React, { Component } from "react";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email:"",
      password:"",
      msg1:"",
      msg2:"",
      msg3:""
    };
  }

check = () => {
  if(this.state.name===""){
    this.setState({ msg1: "Please Enter Your Name"})
  }
  else if(this.state.email===""){
    this.setState({ msg2: "Please Enter Your Email"})
  }
  else if(this.state.password===""){
    this.setState({ msg3: "Please Enter Your Password"})
  }
};

  render() {
    return (
      <div className="container">
        <div className="login">
          <h1>Login Form</h1>
          <hr />
          <label> Name: &nbsp; &nbsp;
            <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
            <h3>{this.state.msg1}</h3>
          </label>

          <label> Email:  &nbsp; &nbsp;
            <input type="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} />
            <h3>{this.state.msg2}</h3>
          </label>
          <label> Password: &nbsp;
            <input type="password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} />
            <h3>{this.state.msg3}</h3>
          </label>
          <button onClick={this.check}>Login</button>
        </div>
      </div>
    );
  }
}
export default Login;






// import React from 'react';
// import Count from './Components/Counter';
// function App(){
//   return(
//     <>
//     <Count/>
//     </>
//   )
// }
// export default App;