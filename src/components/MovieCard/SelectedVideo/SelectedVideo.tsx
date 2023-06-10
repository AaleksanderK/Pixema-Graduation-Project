import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "../../../type";
import { useEffect } from "react";
import { loadSelectedTrailer } from "../../../redux/action-creators/movie-action-creators";
import { useParams } from "react-router-dom";
import { Loader } from "../../Loader/Loader";


export const SelectedVideo = () => {
	const { movieId } = useParams<{ movieId: string }>();
	const trailer = useSelector(
		(state: IStoreState) => state.movies.selectedTrailer
	);
	const loading = useSelector((state: IStoreState) => state.movies.isLoading)
	const src = trailer?.find((el) => el.name === "Official Trailer")?.key || trailer.at(0)?.key
 
	console.log(trailer);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadSelectedTrailer(movieId!));

	}, []);
	return (<div>

		{!loading? <iframe
					width="650"
					height="450"
					src={`https://www.youtube.com/embed/${src}`}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen></iframe> : <Loader/>}
					</div>
		
	);
};

 
