import { FC } from "react";
import { IMovie } from "../../type";
import "./moviecard.scss";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";
export const MovieCard = ({ movieCard }: IMovie) => {
	const { image, title, year, country, genre, subtitle } = movieCard;

	return (
        <div className="movie-card">
            <div className="movie-title">
			<p className="title-card">{title}</p>
            </div>
            <div className="card-container">
            <NavLink to={`/movie/${movieCard.id}`}>
				<img className="card-image" src={image} alt="logo" />
                </NavLink>
				<div className="text-container">
					<p className="year-card text-card"><b className="strong-text">year:</b> {year}</p>
					<p className="country-card text-card"><b className="strong-text">country:</b> {country}</p>{" "}
					<p className="genre-card text-card"><b className="strong-text">genre:</b> {genre}</p>
					<p className="subtitle-card text-card"><b className="strong-text">description:</b> {subtitle}</p>
                    <NavLink to={`/movie/${movieCard.id}`}>
                    <Button className={"button button-submit button-card"} content={"Watch online"} />
                </NavLink>
                </div>
			</div>
		</div>
	);
};

// <div className="v1-container">
// 					<div className="text-container">
// 						{resultDate}
// 						<p
// 							className="title-v1"
// 							style={{ color: theme === THEMES.LIGHT ? "#313037" : "white" }}>
// 							{title}
// 						</p>
// 						<span className="text-v1">{text}</span>
// 					</div>
// 					<div className="image-container">
// 						<img className="v1-image" src={image} alt="logo" />
// 					</div>
// 				</div>
