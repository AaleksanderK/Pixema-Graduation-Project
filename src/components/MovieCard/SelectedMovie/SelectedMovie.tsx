import { useEffect, useState } from "react";
import { IMovieCard } from "../../../type";
import { mockDataMovie } from "../../../constants";
import { useParams } from "react-router-dom";
import "./selectedMovie.scss";
export const SelectedMovie = () => {
	const [movieObj, setMovieObj] = useState<IMovieCard | null>(null);
	const [index, setIndex] = useState<number>(-1);
	const { movieId } = useParams();
	useEffect(() => {
		const idx = mockDataMovie.findIndex((el) => String(el.id) === movieId);
		setIndex(idx);

		if (idx >= 0) {
			setMovieObj(mockDataMovie[idx]);
		}
	}, [movieId]);
	if (!movieObj) {
		return null;
	}

	return (
		<div className="container">
			<div className="selected-movie-container">
				<img
					className="selected-movie-image"
					src={`${movieObj.image}`}
					alt="logo"
                />
                <div className="selected-movie-text-container">
                    <h1 className="selected-title">{movieObj.title}</h1>
                    <p className="selected-text"><b className="strong-text">year:</b> {movieObj.year}</p>
                    <p className="selected-text"><b className="strong-text">country:</b> {movieObj.country}</p>{" "}
					<p className="selected-text"><b className="strong-text">genre:</b> {movieObj.genre}</p>
					<p className="selected-text"><b className="strong-text">description:</b> {movieObj.subtitle}</p>
                </div>
			</div>
		</div>
	);
};
