import { FC, useEffect, useState } from "react";
import { IMovieCard, IStoreState, MoviesProps } from "../../type";
import { MovieCard } from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { loadMovie, setCurrentPage } from "../../redux/action-creators/movie-action-creators";
import { Button } from "../Button/Button";



// export const CardsMovies = () => {
//      const data = useSelector((state: IStoreState) =>  state.movies.movies)
//      const limit = useSelector((state: IStoreState) => state.movies.limit)
//      const currentPage = useSelector((state: IStoreState) => state.movies.currentPage)
//      const total = useSelector((state: IStoreState) => state.movies.total)
//      const pagesCount = Math.ceil(total / limit);
//      const dispatch = useDispatch();
//      useEffect(() => {
 
//      dispatch(loadMovie({ limit, currentPage }))
//      }, [limit, currentPage]);


//      return ( <>
//          <div className="cards-main-container">
//    {data.map((el )=> <MovieCard movieCard={el} />)}
//         </div>
                
//           <Button className={"button"} content={"Prev"} isActive={currentPage === 1} callback={()=> {dispatch(setCurrentPage(currentPage - 1))}}/>
//           <Button className={"button"} content={"Next"} isActive={pagesCount === currentPage} callback={()=> {dispatch(setCurrentPage(currentPage + 1))}}/>
//     </>
//      );
// }
export const CardsMovies = () => {
     const data = useSelector((state: IStoreState) =>  state.movies.movies)
     const limit = useSelector((state: IStoreState) => state.movies.limit)
     const currentPage = useSelector((state: IStoreState) => state.movies.currentPage)
     const total = useSelector((state: IStoreState) => state.movies.total)
     const pagesCount = Math.ceil(total / limit);

   
   
     const dispatch = useDispatch();
     useEffect(() => {
 
     dispatch(loadMovie({ limit, currentPage }))
     }, [limit, currentPage, total]);


     return ( <>
         <div className="cards-main-container">
   {data.map((el )=> <MovieCard movieCard={el} />)}
        </div>
                
          <Button className={"button"} content={"Prev"} isActive={currentPage === 1} callback={() => { dispatch(setCurrentPage(currentPage - 1)) }} />
          <div style={{color:'wheat'}}>

               {currentPage}
          </div>
          <Button className={"button"} content={"Next"} isActive={pagesCount === currentPage} callback={()=> {dispatch(setCurrentPage(currentPage + 1))}}/>
    
     </>
     );
}