import "./mainPage.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Slider } from "../Slider/Slider";
import { MovieCard } from "../MovieCard/MovieCard";
import { mockDataMovie } from "../../constants";
import { CardsMovies } from "../MovieCard/CardsMovies";



export const MainPage = (data:any) => {
	return (
		<div className="main-container">
            <Slider />
         <CardsMovies />
			{/* <MovieCard movieCard={mockDataMovie} />
			<MovieCard movieCard={mockDataMovie} />
			<MovieCard movieCard={mockDataMovie} /> */}
		</div>
	);
};
