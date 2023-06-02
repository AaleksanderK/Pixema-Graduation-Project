import "./slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y,  } from "swiper";
import { IMovieCard, IStoreState, MoviesProps } from "../../type";
import { FC, useEffect } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { loadMovie } from "../../redux/action-creators/movie-action-creators";

export const Slider = () => {
	const data = useSelector((state: IStoreState) =>  state.movies.movies)
	const limit = useSelector((state: IStoreState) => state.movies.limit)
	const dispatch = useDispatch();
	useEffect(() => {
	//   dispatch(setPosts(mockDataPosts))
	dispatch(loadMovie({ limit }))
	}, [limit]);

	return (
		<div className="slider-container">
			<Swiper
				modules={[Navigation, Pagination,  A11y]}
				spaceBetween={10}
				slidesPerView={4}
				navigation  
				pagination={{ clickable: true }}
				// onSwiper={(swiper) => console.log(swiper)}
				// onSlideChange={() => console.log("slide change")}
			>
				{data.map((el: IMovieCard) => <SwiperSlide ><img className="slide" src={ `http://image.tmdb.org/t/p/w300${el.poster_path}`} alt="" /></SwiperSlide>)}
 
			</Swiper>
		</div>
	);
};
