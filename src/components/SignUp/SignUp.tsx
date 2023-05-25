import { useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";

export const SignUp = () => {
	const [emailText, setEmailText] = useState("");
	const [passwordText, setPasswordText] = useState("");
	return (
		<div className="sign-in-form">
			<Input
				type="email"
				id="input-email"
				label="Email"
				placeholder="Your name"
				callback={(e: any) => setEmailText(e.target.value)}
				className={"input"}
			/>
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
			<Input
				type="password"
				id="input-password"
				label="Password"
				placeholder="Confirm password"
				callback={(e: any) => setPasswordText(e.target.value)}
				className={"input"}
			/>


			<Button
				className={"button button-sign"}
				content="Sign Up"
				isActive={true}
				callback={() => {
					// handleSignIn();
				}}
			/>

			<p className="form-text-link">
            Already have an account? {""}
				<NavLink to={"/sign_in"} className={"form-link-up"}>
					Sign In
				</NavLink>
			</p>
		</div>
	);
};
