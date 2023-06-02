import { useDispatch, useSelector } from "react-redux";
import { IStoreState, IUserAvatar } from "../../type";
import { NavLink } from "react-router-dom";
import UserIcon from "../Icons/UserIcon";
import './userAvatar.scss'

export const UserAvatar = ({ location }: IUserAvatar) => {
	const dispatch = useDispatch();
	const authorizedUserName = useSelector(
		(state: IStoreState) => state.user.authorizedUser.username
	);

	return (
		<div
			className="user-avatar"
			
			 >
			{authorizedUserName === "" ? (
				<button className="user-avatar__button" title="Sign In">
					<NavLink to={"/sign_in"}>
						<UserIcon width="24" height="24" color="#fff" />
					</NavLink>
				</button>
			) : (
				<>
					<div className="user-avatar__short-name">
						{authorizedUserName
                                .split("_")
                                .map((el) => el.slice(0, 1).toUpperCase())
					.join("")
						}
                        </div>
                        {location !== 'header'?authorizedUserName.replaceAll("_", " "):''}
					
				</>
			)}
		</div>
	);
};
