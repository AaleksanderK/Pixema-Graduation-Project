import { useSelector } from "react-redux";
import { IStoreState } from "../../type";
 
import { MovieCard } from "../MovieCard/MovieCard";
import "./searchPage.scss";

export const SearchPage = () => {
	const { searchQuery, search } = useSelector(
		(state: IStoreState) => state.movies
	);

	return (
		<div className="searchh-container">
			<div className="title-wrapper">
				{searchQuery?.length ? (
					<h2 className="page-title">{`Search results ‘${search}’`}</h2>
				) : (
					<h2
						className="page-title"
						style={{ paddingTop: 200 }}>{`No posts found`}</h2>
				)}
			</div>
			<div className="search-cards">
			{searchQuery?.map((el) => (
				<MovieCard movieCard={el} />
				))}
				</div>
		</div>
	);
};
