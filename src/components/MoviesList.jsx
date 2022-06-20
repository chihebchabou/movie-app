import MovieCard from './MovieCard/MovieCard';

const MoviesList = ({ moviesList }) => {
  return (
    <div
      className="movies-list"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      {moviesList.map((el, i) => (
        <MovieCard key={i} movie={el} />
      ))}
    </div>
  );
};

export default MoviesList;
