import { FC, useEffect, useState } from "react";
import {   IMoviePopularData } from "../../../type";
import { useDispatch } from "react-redux";
import { loadGenres, loadMovie, setCurrentPage, setSelectedPopular } from "../../../redux/action-creators/movie-action-creators";

export const SelectPopular: FC<IMoviePopularData> = ({ data }) => {
    const [selects, setSelects] = useState('')
    const dispatch = useDispatch()
 
    
 
    const onChange = (e: any) => {
        console.log(e.target.value)
        setSelects(e.target.value)
        dispatch(setSelectedPopular(e.target.value))
        dispatch(setCurrentPage(1))
    }
    return ((<div className="select-wrapper">
       <select value={selects} className="select" onChange={onChange}>
        <option className="select-item">Select Popular...</option>
            {data.map((el) => <option value={el.id} className="select-item">{el.name}</option>)}
    </select>
    <div className="select-arrow"></div>
<div className="select-arrow"></div>
</div> ));
}
 
 