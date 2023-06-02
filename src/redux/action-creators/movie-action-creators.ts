
// function* fetchPosts(action: any) {
// 	const { limit } = action.searchInfo;
// 	const resp: Response = yield fetch(
// 		`https://studapi.teachmeskills.by/blog/posts?limit=${limit}`
//     );
// 	const data: IPostsResponce = yield resp.json();
// 	yield put(setPosts(data.results));
// }
import { put, takeEvery } from "redux-saga/effects";
import { LOAD_MOVIE, LOAD_SEARCH_MOVIE, LOAD_SELECTED_MOVIE, SET_CURRENT_PAGE, SET_MOVIE, SET_SEARCH_VALUE, SET_SELECTED_MOVIE, SET_TOTAL } from "../action-types/movie-action-types";
import { IMovieCard, IMovieResponce } from "../../type";

const loadMovie = (searchInfo: any) => ({
    type: LOAD_MOVIE,
    searchInfo
})

const setMovie = (movies: IMovieCard[]) => ({
	type: SET_MOVIE,
	movies,
}as const);

const loadSelectedPost = (id: string) => ({
    type: LOAD_SELECTED_MOVIE,
    id,
})

const setSelectedMovie = (movie: IMovieCard) => ({
    type: SET_SELECTED_MOVIE,
    selectedPost: {
        movie,
    } 
} as const)

const setSearchValue = (search: any) => ({
    type: SET_SEARCH_VALUE,
    search
}as const);

export const loadSearchResult = (searchItem: string) => ({
    type: LOAD_SEARCH_MOVIE,
    searchItem
}as const)

const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
}as const)


const setTotal = (total: number) => ({
    type: SET_TOTAL,
    total,
}as const)


function* fetchMovies(action: any) {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTlhNmIyMTY1M2JkZTk0ZGM2MjEwZWM4ZGRiNDJkNiIsInN1YiI6IjY0NzYyMzA5Njc0M2ZhMDExOTdhY2FlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5uTHZgF-I0xSBzNBBttRoeDjfC0ohqRqzP_ddY0FjRc'
        }
    };
    const { limit, currentPage } = action.searchInfo;
    const resp: Response = yield fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc`, options)
    const data: IMovieResponce = yield resp.json();
    console.log(currentPage)
    yield put(setMovie(data.results));
    yield put(setTotal(data.count));
     
}


function* fetchSelectedMovies(action: any) {
    const { id } = action 
    const resp: Response = yield fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=999a6b21653bde94dc6210ec8ddb42d6`);
    const data: IMovieCard = yield resp.json();
    console.log(data)
    yield put(setSelectedMovie(data)); 
}
    

function* fetchSearchResult (action:any) {
    const { search } = action.search
    const posts: Response =  yield fetch(`https://api.themoviedb.org/3/search/movie?${search}&api_key=999a6b21653bde94dc6210ec8ddb42d6`);
    const data: IMovieResponce = yield posts.json()
    console.log(data.results)
    yield put(setSearchValue(data.results))
}



function* watcherMovie() {
    yield takeEvery(LOAD_MOVIE, fetchMovies)
    yield takeEvery(LOAD_SELECTED_MOVIE, fetchSelectedMovies)
}


export {
    loadMovie,
    setMovie,
    watcherMovie,
    loadSelectedPost,
    setSelectedMovie,
    setSearchValue,
    setCurrentPage,
    setTotal,

}
