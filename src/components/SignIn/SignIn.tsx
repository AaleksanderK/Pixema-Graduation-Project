import { useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import './signIn.scss'
import { NavLink } from "react-router-dom";

export const SignIn = () => {
	const [emailText, setEmailText] = useState("");
	const [passwordText, setPasswordText] = useState("");
    return (
		<div className="sign-in-form">
			<Input
				type="email"
				id="input-email"
				label="Email"
				placeholder="Your email"
				callback={(e: any) => setEmailText(e.target.value)}
				className={"input"}
			/>

			<Input
				type="password"
				id="input-password"
				label="Password"
				placeholder="Your password"
				callback={(e: any) => setPasswordText(e.target.value)}
				className={"input"}
			/>
			<a className="form-text-link" href="#">
				Forgot password?
			</a>

            <Button
                className={"button button-sign"}
                content="Sign In"
                isActive={true}
                callback={() => {
                    // handleSignIn();
                } } 			 
			/>

			<p className="form-text-link">
				Don’t have an account? {''}
				<NavLink to={"/sign_up"} className={"form-link-up"}>
				Sign Up 
				</NavLink>
			</p>
		</div>
	);
};
