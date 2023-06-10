import { useSelector } from "react-redux";
import { IStoreState } from "../../../type";
import { MovieCard } from "../MovieCard";
import './favorite.scss'


export const FavoriteMovies = () => {
    const data = useSelector((state: IStoreState) =>  state.user.favorites)
   
    return (<div className="favorite-container">
 

        {data.length ? data.map((el) => <MovieCard movieCard={el}/>): <p className="favorite-title">Favorite list is empty :(</p>}
    </div> );
}
 
