import "./mainPage.scss";
import { CardsMovies } from "../MovieCard/CardsMovies";
import { SelectGenres } from "../MovieCard/SelectGenres/SelectGenres";
import { SelectPopular } from "../MovieCard/SelectGenres/SelectPopular";
import { mockDataPopular } from "../../constants";



export const MainPage = () => {
	return (
		<div className="main-container">
 
			<div className="main-container-select">
				<SelectGenres />
			<SelectPopular data={mockDataPopular}/>
			</div>
         <CardsMovies />
 
		</div>
	);
};
