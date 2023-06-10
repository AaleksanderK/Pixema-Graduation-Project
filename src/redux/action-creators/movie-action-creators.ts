 
import { put, takeEvery, takeLatest } from "redux-saga/effects";
import {
	LOAD_MOVIE,
	LOAD_SEARCH_MOVIE,
	LOAD_SELECTED_MOVIE,
	SET_CURRENT_PAGE,
	SET_MOVIE,
	SET_SEARCH_VALUE,
	SET_SELECTED_MOVIE,
	SET_TOTAL,
	SET_SEARCH_DATA,
	LOAD_SIMILAR_MOVIE,
	SET_SIMILAR_MOVIE,
	LOAD_SELECTED_TRAILER,
	SET_SELECTED_TRAILER,
	SET_GENRES,
	LOAD_GENRES,
	SET_SELECTED_GENRES,
	SET_LOADING,
	SET_SELECTED_POPULAR,
} from "../action-types/movie-action-types";
import {
	IMovieCard,
	IMovieGenres,
	IMovieResponce,
	IMovieTrailer,
} from "../../type";
 

const loadMovie = (searchInfo: any) => ({
	type: LOAD_MOVIE,
	searchInfo,
});

const setMovie = (movies: IMovieCard[]) =>
	({
		type: SET_MOVIE,
		movies,
	} as const);

const setSearchData = (data: any) =>
	({
		type: SET_SEARCH_DATA,
		data,
	} as const);

const loadSelectedPost = (id: string) => ({
	type: LOAD_SELECTED_MOVIE,
	id,
});

const setSelectedMovie = (movie: IMovieCard) =>
	({
		type: SET_SELECTED_MOVIE,
		selectedPost: {
			movie,
		},
	} as const);

const setSearchValue = (search: any) =>
	({
		type: SET_SEARCH_VALUE,
		search,
	} as const);

export const loadSearchResult = (searchItem: string) =>
	({
		type: LOAD_SEARCH_MOVIE,
		searchItem,
	} as const);

const setCurrentPage = (currentPage: number) =>
	({
		type: SET_CURRENT_PAGE,
		currentPage,
	} as const);

const setTotal = (total: number) =>
	({
		type: SET_TOTAL,
		total,
	} as const);

const loadSimilarMovie = (movieId: string) => ({
	type: LOAD_SIMILAR_MOVIE,
	movieId,
});

const setSimilarMovie = (similarMovies: IMovieCard[]) =>
	({
		type: SET_SIMILAR_MOVIE,

		similarMovies,
	} as const);

const loadSelectedTrailer = (key: string) => ({
	type: LOAD_SELECTED_TRAILER,
	key,
});

const setSelectedTrailer = (selectedTrailer: IMovieTrailer[]) =>
	({
		type: SET_SELECTED_TRAILER,

		selectedTrailer,
	} as const);

const loadGenres = (searchInfo: any) => ({
	type: LOAD_GENRES,
	searchInfo,
});

const setSelectedGenre = (genre?: string) => ({
	type: SET_SELECTED_GENRES,
	payload: genre,
} as const)

const setSelectedPopular = (popular?: string) => ({
	type: SET_SELECTED_POPULAR,
	payload: popular,
} as const)

const setGenres = (genres: IMovieGenres[]) =>
	({
		type: SET_GENRES,
		genres,
} as const);
	
const setLoading= (isLoading: boolean) =>
	({
		type: SET_LOADING,
		isLoading,
	} as const);

function* fetchGenres(action: any) {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTlhNmIyMTY1M2JkZTk0ZGM2MjEwZWM4ZGRiNDJkNiIsInN1YiI6IjY0NzYyMzA5Njc0M2ZhMDExOTdhY2FlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5uTHZgF-I0xSBzNBBttRoeDjfC0ohqRqzP_ddY0FjRc",
		},
	};
 
	const resp: Response = yield fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
		options
        );
        
    const data: IMovieResponce = yield resp.json();
     
	yield put(setGenres(data.genres));
}

function* fetchSelectedTrailer(action: any) {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTlhNmIyMTY1M2JkZTk0ZGM2MjEwZWM4ZGRiNDJkNiIsInN1YiI6IjY0NzYyMzA5Njc0M2ZhMDExOTdhY2FlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5uTHZgF-I0xSBzNBBttRoeDjfC0ohqRqzP_ddY0FjRc",
		},
	};

	const { key } = action;
	yield put(setLoading(true));
	const resp: Response = yield fetch(
		`https://api.themoviedb.org/3/movie/${key}/videos?language=en-US`,
		options
	);
	const data: IMovieResponce = yield resp.json();
	yield put(setSelectedTrailer(data.results));
	yield put(setLoading(false));
}

function* fetchSimilarMovies(action: any) {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTlhNmIyMTY1M2JkZTk0ZGM2MjEwZWM4ZGRiNDJkNiIsInN1YiI6IjY0NzYyMzA5Njc0M2ZhMDExOTdhY2FlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5uTHZgF-I0xSBzNBBttRoeDjfC0ohqRqzP_ddY0FjRc",
		},
	};
	const { movieId } = action;

	const resp: Response = yield fetch(
		`https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
		options
	);

	const data: IMovieResponce = yield resp.json();
	yield put(setSimilarMovie(data.results));
}

function* fetchMovies(action: any) {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTlhNmIyMTY1M2JkZTk0ZGM2MjEwZWM4ZGRiNDJkNiIsInN1YiI6IjY0NzYyMzA5Njc0M2ZhMDExOTdhY2FlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5uTHZgF-I0xSBzNBBttRoeDjfC0ohqRqzP_ddY0FjRc",
		},
    };
	const { currentPage, genre, popular } = action.searchInfo;
	
	console.log(popular)
    
    const genres = genre ? `&with_genres=${genre}` : ''
    const pages = currentPage ? `&page=${currentPage}` : ''
	const popularity = popular ? `&sort_by=${popular}` : ''
	console.log(popularity)
 
    yield put(setLoading(true));
	const resp: Response = yield fetch(
		`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US${pages}${popularity}${genres}`,
		options
	);
	const data: IMovieResponce = yield resp.json();
 
	
	yield put(setMovie(data.results));
	yield put(setTotal(data.count));
	// yield put(setSelectedPopular(data.popular));
    yield put(setLoading(false));
}

function* fetchSelectedMovies(action: any) {
	const { id } = action;
	const resp: Response = yield fetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=999a6b21653bde94dc6210ec8ddb42d6`
	);
	const data: IMovieCard = yield resp.json();
	yield put(setSelectedMovie(data));
}

function* fetchSearchResult(action: any) {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTlhNmIyMTY1M2JkZTk0ZGM2MjEwZWM4ZGRiNDJkNiIsInN1YiI6IjY0NzYyMzA5Njc0M2ZhMDExOTdhY2FlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5uTHZgF-I0xSBzNBBttRoeDjfC0ohqRqzP_ddY0FjRc",
		},
	};
	const posts: Response = yield fetch(
		`https://api.themoviedb.org/3/search/movie?query=${action.search}&include_adult=false&language=en-US&page=1`,
		options
	);
	const data: IMovieResponce = yield posts.json();
	yield put(setSearchData(data.results));
}

function* watcherMovie() {
	yield takeEvery(LOAD_MOVIE, fetchMovies);
	yield takeEvery(LOAD_SELECTED_MOVIE, fetchSelectedMovies);
	yield takeLatest(SET_SEARCH_VALUE, fetchSearchResult);
	yield takeLatest(LOAD_SIMILAR_MOVIE, fetchSimilarMovies);
	yield takeLatest(LOAD_SELECTED_TRAILER, fetchSelectedTrailer);
	yield takeLatest(LOAD_GENRES, fetchGenres);
}

export {
	loadMovie,
	setMovie,
	setSimilarMovie,
	watcherMovie,
	loadSelectedPost,
	setSelectedMovie,
	setSearchValue,
	setCurrentPage,
	setTotal,
	setSearchData,
	loadSimilarMovie,
	loadSelectedTrailer,
	setSelectedTrailer,
	setGenres,
	loadGenres,
	setSelectedGenre,
	setLoading,
	setSelectedPopular,
};
