import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovies } from "../utils/moviesSlice";

const useUpComingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const upComingMovies = useSelector((store) => store.movies.topRatedMovies);

  const getUpComingMovies = async () => {
    const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
    const data = await fetch(
      url,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    !upComingMovies && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;


