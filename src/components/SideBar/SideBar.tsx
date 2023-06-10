import {   useSelector } from 'react-redux';
 
import { UserAvatar } from '../UserAvatarIcon/UserAvatarIcon';
import './sidebar.scss'
import { NavLink } from 'react-router-dom';
import { Button } from '../Button/Button';
import { IStoreState } from '../../type';


export const SideBar = () => {
	const authorizedUserName = useSelector((state: IStoreState) => state.user.authorizedUser.username);
 
    return ( 
        <div className="sidebar-container">
        <UserAvatar username={`authorizedUserName`} location='sidebar' />
        {authorizedUserName !==''? <NavLink to={"favorites"}>
              <Button className={'button'} content={' Favorites'} callback={()=>{}} />
            </NavLink>: <></> }
       
        </div>
     );
}
