import React from "react";
import { Header } from "./components/Header/Header";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";
 
import { MainPage } from "./components/MainPage/MainPage";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import { SelectedMovie } from "./components/MovieCard/SelectedMovie/SelectedMovie";
import { SignUpActivation } from "./components/SignUpActivation/SignUpActivation";
import { SearchPage } from "./components/SearchPage/SearchPage";
import { FavoriteMovies } from "./components/MovieCard/FavoriteMovies/FavoriteMovies";
import { IStoreState } from "./type";
import { useSelector } from "react-redux";

function App() {

	const authorizedUser = useSelector((state: IStoreState) => state.user.authorizedUser);
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<BurgerMenu />
				<Routes>
 
					<Route path="/" element={authorizedUser.username.length?<MainPage />: <SignIn /> } />

					<Route path="/movie">
						<Route path=":movieId" element={<SelectedMovie />} />
					</Route>
						<Route path="favorites" element={ <FavoriteMovies /> } />
					<Route path="/search" element={<SearchPage />} />
					<Route path="/sign_up" element={<SignUp />} />
					<Route path="/sign_in" element={<SignIn />} />
					<Route path="activate/:uid/:token" element={<SignUpActivation />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

