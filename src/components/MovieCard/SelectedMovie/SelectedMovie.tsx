import { useEffect } from "react";
import { IMovieCard, IStoreState } from "../../../type";

import {  useNavigate, useParams } from "react-router-dom";
import "./selectedMovie.scss";
import { useDispatch, useSelector } from "react-redux";
import {
	loadSelectedPost,
	loadSelectedTrailer,
	loadSimilarMovie,
} from "../../../redux/action-creators/movie-action-creators";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Autoplay } from "swiper";
import { SelectedVideo } from "../SelectedVideo/SelectedVideo";

export const SelectedMovie = () => {
	const { movieId } = useParams<{ movieId: string }>();
	const movieObj = useSelector(
		(state: IStoreState) => state.movies.selectedPost
	);
	const movieSimilarObj = useSelector(
		(state: IStoreState) => state.movies.similarMovies
	);
 
	const navigate = useNavigate();
 
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadSelectedTrailer(movieId!));
		dispatch(loadSelectedPost(movieId!));
		dispatch(loadSimilarMovie(movieId!));
	}, [navigate]);

	return (
		<div key={movieId} className="container">
			<div className="selected-movie-container">
				<img
					className="selected-movie-image"
					src={`http://image.tmdb.org/t/p/w300${movieObj.poster_path}`}
					alt="logo"
				/>
				 
				<SelectedVideo/>
			</div>
			<div className="selected-movie-text-container">
				<h1 className="selected-title">{movieObj.title}</h1>
				<p className="selected-text">
					<b className="strong-text">year:</b> {movieObj.release_date}
				</p>
				<p className="selected-text">
					<b className="strong-text">country:</b> {movieObj.country}
				</p>
				<p className="selected-text">
					<b className="strong-text">description:</b> {movieObj.overview}
				</p>
				<p className="selected-text">
					<b className="strong-text">rating:</b> {movieObj.vote_average}
				</p>
			</div>

			<div className="slider-container">
				<div className="similar-title-container">
					<h2 className="similar-title">Similar movies</h2>
				</div>
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={10}
					loop={true}
					slidesPerView={4}
					autoplay={{ delay: 2000 }}
					navigation
					pagination={{ clickable: true }}

				>
					{movieSimilarObj.map((el: IMovieCard) => (
						<SwiperSlide>
							<img
								className="slide"
								src={`http://image.tmdb.org/t/p/w300${el.poster_path}`}
								alt=""
								onClick={() => navigate(`/movie/${el.id}`)}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

 		</div>
	);
};
