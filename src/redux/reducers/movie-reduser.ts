import { IMovieCard, IMovieGenres, IMovieTrailer } from "../../type";
import {
	setCurrentPage,
	setGenres,
	setMovie,
	setSearchData,
	setSearchValue,
	setSelectedMovie,
	setSelectedTrailer,
	setSimilarMovie,
	setTotal,
	setSelectedGenre,
	setLoading,
	setSelectedPopular,
} from "../action-creators/movie-action-creators";
import {
	SET_CURRENT_PAGE,
	SET_GENRES,
	SET_MOVIE,
	SET_SEARCH_DATA,
	SET_SEARCH_VALUE,
	SET_SELECTED_MOVIE,
	SET_SELECTED_TRAILER,
	SET_SIMILAR_MOVIE,
	SET_TOTAL,
	SET_SELECTED_GENRES,
	SET_LOADING,
	SET_SELECTED_POPULAR,
} from "../action-types/movie-action-types";

const initialState = {
	movies: [] as IMovieCard[],
	similarMovies: [] as IMovieCard[],
 
	selectedPost: {},
	selectedTrailer: [] as IMovieTrailer[],
	search: "",
	currentPage: 1,
	total: 0,
	genres: [] as IMovieGenres[],
	selectedGenre: '',
	selectedPopular: '',
	isLoading: false
};
type actionsType =
	| ReturnType<typeof setMovie>
	| ReturnType<typeof setSimilarMovie>
	| ReturnType<typeof setSearchData>
	| ReturnType<typeof setSelectedMovie>
	| ReturnType<typeof setSearchValue>
	| ReturnType<typeof setCurrentPage>
	| ReturnType<typeof setSelectedTrailer>
	| ReturnType<typeof setGenres>
	| ReturnType<typeof setTotal>
	| ReturnType<typeof setLoading>
	| ReturnType<typeof setSelectedGenre>
	| ReturnType<typeof setSelectedPopular>;
const moviesReducer = (state = initialState, action: actionsType) => {
	switch (action.type) {
		case SET_SEARCH_DATA: {
			const { data } = action;
			return {
				...state,
				searchQuery: data,
			};
		}
		case SET_SELECTED_GENRES: {
			return {
				...state,
				selectedGenre: action.payload,
			};
		}
		case SET_SELECTED_POPULAR: {
			console.log(action.payload)
			return {
				...state,
				selectedPopular: action.payload,
			};
		}
		case SET_LOADING: {
			return {
				...state,
			 isLoading:action.isLoading
			};
		}
		case SET_MOVIE: {
			const { movies } = action;
			return {
				...state,
				movies,
			};
		}
		case SET_GENRES: {
			const { genres } = action;

			return {
				...state,
				genres,
			};
		}
		case SET_SIMILAR_MOVIE: {
			const { similarMovies } = action;

			return {
				...state,
				similarMovies,
			};
		}
		case SET_SELECTED_TRAILER: {
			const { selectedTrailer } = action;
			console.log(action);
			return {
				...state,
				selectedTrailer,
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
