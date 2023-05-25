import React from "react";
import { Header } from "./components/Header/Header";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";
import { SideBar } from "./components/SideBar/SideBar";
import { MainPage } from "./components/MainPage/MainPage";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import { SelectedMovie } from "./components/MovieCard/SelectedMovie/SelectedMovie";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<BurgerMenu />
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/movie">
						<Route path=":movieId" element={<SelectedMovie />} />
					</Route>
					<Route path="/sign_up" element={<SignUp />} />
					<Route path="/sign_in" element={<SignIn />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

//     <Routes>
//           <Route index element={<Tabs tabs={TABS} />} path="/" />

//         <Route path='/posts'>
//           <Route path=":postId" element={<SelectedPost />} />
//         </Route>

//         <Route path='/sign_in' element={<SignIn/>} />
//         <Route path='/load_posts' element={<LoadImages/>} />
//           <Route path='/sign_up' element={<SignUp />} />
//           <Route path='activate/:uid/:token' element={<SignUpActivation />} />
//     </Routes>
