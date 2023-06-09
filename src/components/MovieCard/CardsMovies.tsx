import {  useEffect } from "react";
import {  IStoreState  } from "../../type";
import { MovieCard } from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { loadMovie, setCurrentPage } from "../../redux/action-creators/movie-action-creators";
import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader";


 
export const CardsMovies = () => {
     const data = useSelector((state: IStoreState) =>  state.movies.movies)
     const limit = useSelector((state: IStoreState) => state.movies.limit)
     const currentPage = useSelector((state: IStoreState) => state.movies.currentPage)
     const total = useSelector((state: IStoreState) => state.movies.total)
     const genre = useSelector((state: IStoreState) => state.movies.selectedGenre)
     const popular = useSelector((state: IStoreState) => state.movies.selectedPopular)
     const loading = useSelector((state: IStoreState) => state.movies.isLoading)
     const pagesCount = Math.ceil(total / limit);

     console.log(popular,'Here')
   
     const dispatch = useDispatch();
     useEffect(() => {
 
     dispatch(loadMovie({ limit, currentPage, genre, popular }))
     }, [limit, currentPage, total, genre, popular]);


     return ( <>
          <div className="cards-main-container">
               {!loading? data.map((el )=> <MovieCard movieCard={el} />): <Loader/>}

        </div>
          <div className="main-pagination">
          <Button className={"button"} content={"Prev"} isActive={currentPage === 1} callback={() => { dispatch(setCurrentPage(currentPage - 1)) }} />
          <div className="main-current-page">
                    <h2>
                         
               {currentPage}
</h2>
          </div>
          <Button className={"button"} content={"Next"} isActive={pagesCount === currentPage} callback={()=> {dispatch(setCurrentPage(currentPage + 1))}}/>
          </div>    
     </>
     );
}