import { Link, useLocation } from 'react-router-dom';


const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
          {movies !== null && movies.map((movie) => {
           return <li key={movie.id}>
            <Link state={location} to={`/movies/${movie.id}`}>
                <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/300'}
                alt={movie.title}
              />
            </Link>
           </li>
        })}
      </ul>
  </div>
  )
}

export default MovieList
