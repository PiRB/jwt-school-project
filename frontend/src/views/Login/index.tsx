import React from "react";
import './style.scss';

const Login = () => {
  return (
    <div className="login">
			<h2 className="login__login-title">Please login</h2>
			<form className="login__form">
				<input type="email" name="email" />
				<input type="password" name="password" />
			</form>
			<button className="login__submit">Submit</button>
    </div>
  );
}

export default Login;
