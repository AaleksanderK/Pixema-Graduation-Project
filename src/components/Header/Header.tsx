import { useState } from "react";
import "./header.scss";
import { Button } from "../Button/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { IStoreState } from "../../type";
import { useDispatch, useSelector } from "react-redux";
import { UserAvatar } from "../UserAvatarIcon/UserAvatarIcon";
import { SearchIcon } from "../Icons/SearchIcon";
import { logOut } from "../../redux/action-creators/user-action-creators";
import { setCurrentPage, setSearchValue } from "../../redux/action-creators/movie-action-creators";

export const Header = () => {
	const dispatch = useDispatch()
    const navigate = useNavigate()
	const [text, setText] = useState("");
	const authorizedUserName = useSelector((state: IStoreState) => state.user.authorizedUser.username);
	
	const handleChange = (e: any) => {
		setText(e.target.value)
		dispatch(setSearchValue(e.target.value))
		if (e.target.value === '') {
			navigate('/')
		} else {
 			navigate('/search')
		} 
	};
	const handleLogOut = () => {
		console.log('+');
        dispatch(logOut());
		localStorage.removeItem('access')
		localStorage.removeItem('refresh')
		navigate('/')
	};
	return (
		<div className="header-container">
			<NavLink to={`/`} style={{ textDecoration: "none" }}>
				<div className="header-logo" onClick={() => { dispatch(setCurrentPage(1))}}>Pixema</div>
			</NavLink>
			<form action="#" className="search">
				<input
					className={"header-input"}
					type={"text"}
					placeholder={"search"}
					value={text}
					onChange={(e) => handleChange(e)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							dispatch(setSearchValue(text))
							console.log(text)
						}
					}}
				/>
				<SearchIcon onClick={() => {
					
						dispatch(setSearchValue(''))
						navigate('/');

					}} />
			</form>
			<div>
				
				{authorizedUserName !==''?<><UserAvatar username={`authorizedUserName`} location='header'/> <Button
						className="button "
						content={"Log out"}
						callback={handleLogOut}
					/> </> :<><NavLink to={`/sign_up`}>
					<Button
						className="button button-submit"
						content={"Sign Up"}
						callback={() => {}}
					/>
				</NavLink>
				<NavLink to={`/sign_in`}>
					<Button
						className="button "
						content={"Sign In"}
						callback={()=>{}}
					/>
				</NavLink></>}
			
			</div>
		</div>
	);
};
