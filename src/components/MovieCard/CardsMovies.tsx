import { FC } from "react";
import { IMovieCard, MoviesProps } from "../../type";
import { MovieCard } from "./MovieCard";



export const CardsMovies: FC<MoviesProps> = ({data}) => {
    return ( 
        <div>
   {data.map((el: IMovieCard)=> <MovieCard movieCard={el} />)}
        </div>
     );
}
  