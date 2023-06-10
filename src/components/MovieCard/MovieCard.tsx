 
import { IMovie, IStoreState } from "../../type";
import "./moviecard.scss";
 
import { NavLink } from "react-router-dom";
import { FavoriteIcon } from "../Icons/FavoriteIcon";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/action-creators/user-action-creators";
export const MovieCard = ({ movieCard }: IMovie) => {
	const { poster_path, title } =
		movieCard;

	const favorites = useSelector((state: IStoreState) => state.user.favorites);

	const isFavorite = favorites.find((el) => el.id === movieCard.id);
	const dispatch = useDispatch();


	return (
		<div className="movie-card">
			<div className="movie-title">
				<NavLink
					to={`/movie/${movieCard.id}`}
					style={{ textDecoration: "none" }}>
					<p className="title-card">{title}</p>
				</NavLink>

				<div
					className="post__button-text"
					onClick={() => dispatch(toggleFavorite(movieCard))}>
					{isFavorite ? (
						<FavoriteIcon className="favorite-active" />
					) : (
						<FavoriteIcon className="favorite" />
					)}
				</div>
			</div>
			<div className="card-container">
				<NavLink to={`/movie/${movieCard.id}`}>
					<img
						className="card-image"
						src={`http://image.tmdb.org/t/p/w300${poster_path}`}
						alt="logo"
					/>
				</NavLink>
				<div className="text-container">
			 
				</div>
			</div>
		</div>
	);
};
