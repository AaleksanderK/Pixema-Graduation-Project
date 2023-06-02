import { useEffect, useState } from "react";
import { IMovieCard, IStoreState } from "../../../type";
// import { mockDataMovie } from "../../../constants";
import { useParams } from "react-router-dom";
import "./selectedMovie.scss";
import { useDispatch, useSelector } from "react-redux";
import { loadSelectedPost } from "../../../redux/action-creators/movie-action-creators";
import { join } from "path";
export const SelectedMovie = () => {
	// const [movieObj, setMovieObj] = useState<IMovieCard | null>(null);
	// const [index, setIndex] = useState<number>(-1);
	// const { movieId } = useParams();
	// useEffect(() => {
	// 	const idx = mockDataMovie.findIndex((el) => String(el.id) === movieId);
	// 	setIndex(idx);

	// 	if (idx >= 0) {
	// 		setMovieObj(mockDataMovie[idx]);
	// 	}
	// }, [movieId]);
	// if (!movieObj) {
	// 	return null;
	// }
	// const allMovies = useSelector((state: IStoreState) => state.movies.movies)
	const { movieId } = useParams<{ movieId: string }>();
	const movieObj = useSelector((state: IStoreState) => state.movies.selectedPost)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(loadSelectedPost(movieId!))
}, [])


	return (
		<div className="container">

			<div className="selected-movie-container">
				<img className="selected-movie-image" src={`http://image.tmdb.org/t/p/w300${movieObj.poster_path}`} alt="logo" />
			
                <div className="selected-movie-text-container">
                    <h1 className="selected-title">{movieObj.title}</h1>
                    <p className="selected-text"><b className="strong-text">year:</b> {movieObj.release_date}</p>
                    <p className="selected-text"><b className="strong-text">country:</b> {movieObj.country}</p>{" "}
					{/* <p className="selected-text"><b className="strong-text">genre:</b> {movieObj.genres.map((e) => e.name)}</p> */}
					<p className="selected-text"><b className="strong-text">description:</b> {movieObj.overview}</p>
                </div>
			</div>
		</div>
	);
};
