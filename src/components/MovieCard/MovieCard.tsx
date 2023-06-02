import { FC } from "react";
import { IMovie } from "../../type";
import "./moviecard.scss";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";
export const MovieCard = ({ movieCard }: IMovie) => {
	const { poster_path, title, release_date, country, genres, overview } =
		movieCard;

	return (
		<div className="movie-card">
			<div className="movie-title">
				<p className="title-card">{title}</p>
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
					 
					{/* <NavLink to={`/movie/${movieCard.id}`}>
						<Button
							className={"button button-submit button-card"}
							content={"Watch online"}
							callback={() => {}}
						/>
					</NavLink> */}
				</div>
			</div>
		</div>
	);
};

{/* <div className="movie-card">
<div className="movie-title">
	<p className="title-card">{title}</p>
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
		<p className="year-card text-card">
			<b className="strong-text">year:</b> {release_date}
		</p>
		<p className="country-card text-card">
			<b className="strong-text">country:</b> {country}
		</p>{" "}
		<p className="genre-card text-card">
			<b className="strong-text">genre:</b> {genres?.map((e)=> e.name)}
		</p>
		<p className="subtitle-card text-card">
			<b className="strong-text">description:</b> {overview}
		</p>
		<NavLink to={`/movie/${movieCard.id}`}>
			<Button
				className={"button button-submit button-card"}
				content={"Watch online"}
				callback={() => {}}
			/>
		</NavLink>
	</div>
</div>
</div> */}
