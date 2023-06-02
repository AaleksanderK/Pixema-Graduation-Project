import { IMovieCard } from "../../type";
import {
	setCurrentPage,
	setMovie,
	setSearchValue,
	setSelectedMovie,
    setTotal,
} from "../action-creators/movie-action-creators";
import {
	SET_CURRENT_PAGE,
	SET_MOVIE,
	SET_SEARCH_VALUE,
	SET_SELECTED_MOVIE,
	SET_TOTAL,
} from "../action-types/movie-action-types";

const initialState = {
	movies: [] as IMovieCard[],
	limit: 15,
	selectedPost: {},
	search: "",
	currentPage: 1,
	total: 0,
};
type actionsType =
	| ReturnType<typeof setMovie>
	| ReturnType<typeof setSelectedMovie>
	| ReturnType<typeof setSearchValue>
	| ReturnType<typeof setCurrentPage>
	| ReturnType<typeof setTotal>;
console.log(setMovie)
const moviesReducer = (state = initialState, action: actionsType) => {
	switch (action.type) {
		case SET_MOVIE: {
			const { movies } = action;
			return {
				...state,
				movies,
			};
		}
		case SET_SELECTED_MOVIE: {
			const { movie } = action.selectedPost;
			return {
				...state,
				selectedPost: movie,
			};
		}
		case SET_CURRENT_PAGE: {
			const { currentPage } = action;
			return {
				...state,
				currentPage: currentPage,
			};
		}
		case SET_SEARCH_VALUE: {
			const { search } = action;
			return {
				...state,
				search,
			};
		}
		case SET_TOTAL: {
			const { total } = action;
			return {
				...state,
				total: total,
			};
		}
		default: {
			return state;
		}
	}
};

export { moviesReducer };
