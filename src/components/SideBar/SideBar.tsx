import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/action-creators/user-action-creators';
import { UserAvatar } from '../UserAvatarIcon/UserAvatarIcon';
import './sidebar.scss'
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';


export const SideBar = () => {
 
    return ( 
        <div className="sidebar-container">
				<UserAvatar username={`authorizedUserName`} location='sidebar'/>
            
        </div>
     );
}
