import { useState } from "react";
import { SearchIcon } from "../Icons/SearchIcon/SearchIcon";
import { Input } from "../Input/Input";
import "./header.scss";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export const Header = () => {
      const [text, setText] = useState("");
      
      const handle = () => {
            setText('')
      }
	return (
		<div className="header-container">
			<NavLink to={`/`} style={{textDecoration:'none'}}>
			<div className="header-logo">Pixema</div>
			</NavLink>
			<form action="#" className="search">
				<input
					className={"header-input"}
					type={"text"}
					placeholder={"search"}
					value={text}
					onChange={(e) => setText(e.target.value)}
                        />
				<SearchIcon onClick={handle}/>
			</form>
			<div>
				<NavLink to={`/sign_up`}>
			<Button className="button button-submit" content={"Sign Up"}  />
			</NavLink>
				<NavLink to={`/sign_in`}>
			<Button className="button " content={"Sign In"}  />
			</NavLink>
			</div>
		</div>
	);
};
