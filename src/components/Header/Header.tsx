import { useCallback, useEffect, useState } from "react";
import "./header.scss";
import { Button } from "../Button/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { IStoreState } from "../../type";
import { useDispatch, useSelector } from "react-redux";
import { UserAvatar } from "../UserAvatarIcon/UserAvatarIcon";
import { SearchIcon } from "../Icons/SearchIcon";
import { logOut } from "../../redux/action-creators/user-action-creators";
import { setCurrentPage, setSearchValue } from "../../redux/action-creators/movie-action-creators";
import debounce from "lodash/debounce";


export const Header = () => {
	const dispatch = useDispatch()
    const navigate = useNavigate()
	const [text, setText] = useState("");
	const authorizedUserName = useSelector((state: IStoreState) => state.user.authorizedUser.username);

	const getSearch = useCallback(debounce((text) => {
		dispatch(setSearchValue(text));
		
		if (text) {
			navigate('/search')
		} else {
			navigate('/')
		}
	}, 400), [])
	
	const handleChange = (e: any) => {
	
		setText(e.target.value)
		getSearch(e.target.value)
	};

	const handleLogOut = () => {
		 
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
			<div className="search">
				<input
					className={"header-input"}
					type={"text"}
					placeholder={"search"}
					value={text}
					onChange={(e) => handleChange(e)}
					
				/>
				<SearchIcon onClick={() => {
					
						dispatch(setSearchValue(''))
						navigate('/');
 
					}} />
			</div>
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
