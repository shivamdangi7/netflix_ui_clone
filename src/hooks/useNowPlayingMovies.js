import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () =>{
    // Fetching the Data from TMDB
    const dispatch = useDispatch();
    const getNowPlayingMovies  = async() => {
      const url = 'https://api.themoviedb.org/3/movie/now_playing?&page=1';
      const data = await fetch(url, API_OPTIONS)
      const json = await data.json();
      console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
  
    };
    useEffect( ()=>{
      getNowPlayingMovies( );
    } ,[])
}

export default useNowPlayingMovies;