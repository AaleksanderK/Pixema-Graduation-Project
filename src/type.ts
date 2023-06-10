export interface IInput {
    type: string;
    id: string;
    name: string,
	className: string;
	value?: string;
	label?: string;
	placeholder?: string;
	isEnable?: boolean;
	isEmpty: boolean;
	isValid: boolean;
	isRequired?: boolean;
	error?: string;
	callback: Function;
	autoComplete?: string,
}
export interface IButton {
    className: string,
    content: string,
    callback: Function,
    isActive?: boolean;

}

export interface IMovieCard {
    id: string,
    poster_path: string,
    title: string,
    release_date: string,
    country: string,
	genres: IMovieGenres[],
	overview: string,
	key: string,
	vote_average:number

}
export interface IMovieGenres {
    id?: string | number,
	name:string
}
export interface IMovieCountries {
    id?: string,
name:string
}

export interface IMovie {
    movieCard: IMovieCard,

}
export interface IMovieSlider {
    movieSlide: IMovieCard[],

}
export interface MoviesProps {
    data: IMovieCard[]
}
export interface IUserData {
    username: string,
    password: string,
    email: string,
    id?: number,
}
export interface IAuthorizeData {
	uid: any,
	token: any,
}
export interface ITokens {
	access: string;
	refresh: string;
}

export interface ISignIn {
	email: string;
	password: string;
}
export interface IUserState {
	authorizedUser: IUserData;
	favorites: IMovieCard[]
}
export interface IStoreState {
	user: IUserState;
	movies: IMoviesState
}
export interface IUserAvatar {
	username: string;
	location?: string;
}
export interface IIcon {
	id?: string;
	width: string;
	height: string;
	color: string;
	callback?: Function;
	hoverColor?: string;
}

export interface IMovieResponce {
	count: number,
	next : string,
	results: IMovieCard[],
genres:IMovieGenres[]
popular:IMoviePopular[]
}
export interface IMoviesState {
	movies: IMovieCard[],
	similarMovies: IMovieCard[],
	limit: number,
	selectedPost: IMovieCard,
	selectedTrailer:IMovieTrailer[],
	searchQuery: IMovieCard[],
	search: string,
	currentPage: number,
	total: number,
	genres: IMovieGenres[]
	selectedGenre?: string,
	selectedPopular?: string,
	isLoading: boolean
}

export interface IMovieTrailer{
name?:string,
	key:string
}

export interface IMoviePopular{
	id: string,
	name:string
}
export interface IMoviePopularData{
	data: IMoviePopular[]
}