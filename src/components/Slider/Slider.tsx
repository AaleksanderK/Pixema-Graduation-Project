import "./slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination,  Autoplay,  } from "swiper";
import { IMovieCard, IStoreState,  } from "../../type";
import { FC, useEffect } from "react";
 
import { useDispatch, useSelector } from "react-redux";
import { loadMovie } from "../../redux/action-creators/movie-action-creators";

export const Slider = () => {
	const data = useSelector((state: IStoreState) =>  state.movies.movies)
	const limit = useSelector((state: IStoreState) => state.movies.limit)
	const dispatch = useDispatch();
	useEffect(() => {
 
	dispatch(loadMovie({ limit }))
	}, []);

	return (
		<div className="slider-container">
			<Swiper
				modules={[Navigation, Pagination, Autoplay,] }
				spaceBetween={10}
				loop={true}
				slidesPerView={4}
				autoplay={{delay: 1000}}
				navigation  
				pagination={{ clickable: true }}
				
		 
			>
				{data.map((el: IMovieCard) => <SwiperSlide ><img className="slide" src={ `http://image.tmdb.org/t/p/w300${el.poster_path}`} alt="" /></SwiperSlide>)}
 
			</Swiper>
		</div>
	);
};
 

