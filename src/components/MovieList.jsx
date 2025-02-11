import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-auto">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-4 py-4">
          {movies?.map((movie) => (
            <div key={movie.id} className="transform transition-transform hover:scale-110">
              <MovieCard posterPath={movie.poster_path} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;