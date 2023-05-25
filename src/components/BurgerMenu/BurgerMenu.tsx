import { useState, useContext } from "react";
import './burgerMenu.scss'
import { NavLink } from "react-router-dom";
import { SideBar } from "../SideBar/SideBar";

const BurgerMenu = () => {

    const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
	const [menu_class, setMenuClass] = useState('menu hidden')
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass('burger-bar clicked')
            setMenuClass('menu visible')
        }
        else {
            setBurgerClass('burger-bar unclicked')
            setMenuClass('menu hidden')
        }
        setIsMenuClicked(!isMenuClicked)
    }
    return (
		<div className="burger-container">
			<nav onClick={updateMenu}>
				<div className="burger-menu">
					<div className={burger_class}></div>
					<div className={burger_class}></div>
					<div className={burger_class}></div>
				</div>
            </nav>
            <div className={menu_class}>
                <SideBar/>
            </div>
		</div>
	);
};

export default BurgerMenu;

