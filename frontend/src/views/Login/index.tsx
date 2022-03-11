import React from "react";
import './style.scss';

const Login = () => {
  return (
    <div className="login">
			<div className="login__container">
				<h2 className="login__container__login-title">Please login</h2>
				<form className="login__container__form">
					<div className="login__container__input-container">
						<label htmlFor="email">Email</label>
						<input type="email" name="email" id="email" />
					</div>
					<div className="login__container__input-container">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="password" />
					</div>
				</form>
				<button className="login__container__submit">Submit</button>
			</div>
    </div>
  );
}

export default Login;
