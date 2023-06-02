import { IStoreState } from "../../type";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { activate } from "../../redux/action-creators/user-action-creators";
import './signUpActivation.scss'
import { SignIn } from "../SignIn/SignIn";


export const SignUpActivation = () => {
	const dispatch = useDispatch();

	const { uid, token } = useParams();
	useEffect(() => {
		const auth = {
			uid: uid,
			token: token,
		};
		console.log(auth);
		dispatch(activate(auth));
	}, []);

	return (
		<div className="success-container">
					<h1 className="success-title">Success</h1>
		
				<div className="success-sub-title">
				Email confirmed. Your registration is now completed
				</div>
		 <SignIn/>
		</div>
	);
};
