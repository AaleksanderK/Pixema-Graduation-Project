import "./slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

export const Slider = () => {
	return (
		<div className="slider-container">
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={40}
				slidesPerView={1}
				navigation 
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}>
				<SwiperSlide className="slide">Slide 1</SwiperSlide>
				<SwiperSlide className="slide">Slide 2</SwiperSlide>
				<SwiperSlide className="slide">Slide 3</SwiperSlide>
				<SwiperSlide className="slide">Slide 4</SwiperSlide>
			</Swiper>
		</div>
	);
};
