import {   useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "../../../type";
import {   loadGenres, loadMovie, setCurrentPage, setSelectedGenre } from "../../../redux/action-creators/movie-action-creators";
import './selectGenres.scss'
export const SelectGenres = () => {
    const [selects, setSelects] = useState('')
    const dispatch = useDispatch()
    const genres = useSelector((state: IStoreState) => state.movies.genres)
    
    useEffect(() => {
        dispatch(loadGenres({}))
    }, []);

    const onChange = (e: any) => {
        setSelects(e.target.value)
        dispatch(setSelectedGenre(e.target.value))
        dispatch(setCurrentPage(1))
        // dispatch(loadMovie({
        //     currentPage: 1,
        //     genre: e.target.value,
        //     popular: e.target.value,
        // }))
    }
    
    console.log(selects)
    return (<div className="select-wrapper">
        <select value={selects} className="select" onChange={onChange}>
            <option className="select-item">Select Genre...</option>
            {genres.map((el) => <option value={el.id} className="select-item">{el.name}</option>)}
        </select>
        <div className="select-arrow"></div>
    <div className="select-arrow"></div>
    </div> );
}
 
 