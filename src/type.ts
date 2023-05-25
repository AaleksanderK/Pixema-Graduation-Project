export interface IInput {
    className: string
    type: string,
    id: string,
    value?: string,
    label?: string,
    placeholder: string,
    callback?: Function
}
export interface IButton {
    className: string,
    content: string,
    callback?: Function,
    isActive?: boolean;

}

export interface IMovieCard {
    id: string,
    image: string,
    title: string,
    year: string,
    country: string,
    genre: string,
    subtitle: string,
}
export interface IMovie {
    movieCard: IMovieCard,

}
export interface MoviesProps {
    data: IMovieCard[]
}
export interface IUserData {
	username: string;
	email: string;
	password?: string;
	id?:number,
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