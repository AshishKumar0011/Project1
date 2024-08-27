import React from "react";
// import "./Flip.css";
import { useState } from "react";

function Flip() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="form">
      {isLogin ? (
        <div className="login">
          <h1>Login Form</h1>
          <div className="main">
            <div className="first">Login</div>
            <div className="second">Signup</div>
          </div>
          <br />
          <form>
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <p id="pwd">Forgot password?</p>
            <button type="submit">Login</button>
          </form>
          <p>
            Not a member? <span onClick={toggleForm}>Signup now</span>
          </p>
        </div>
      ) : (
        <div className="signup">
          <h1>Signup Form</h1>
          <div className="main">
            <div className="first">Login</div>
            <div className="second">Signup</div>
          </div>
          <form>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account? <span onClick={toggleForm}>Login</span>
          </p>
        </div>
      )}
    </div>
  );
}
export default Flip;