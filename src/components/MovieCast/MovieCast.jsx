import { useEffect, useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';

import { queryMoviesPagesByCast } from '../../services/api';
import { useParams } from 'react-router-dom';

const MovieCast = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [moviesCast, setMoviesCast] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
    try {
    const data = await queryMoviesPagesByCast(movieId);
    setMoviesCast(data.cast);
    }catch(error) {
      setIsError(true);
    }finally{
      setIsLoading(false);
    }
  }
  fetchCast();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {!isError && !isLoading && moviesCast && (moviesCast.length > 0 ? (
        <div>
          <ul>
            {moviesCast.map((actor) => {
              return <li key={actor.id}>
                 <img
                    src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : 'https://via.placeholder.com/300'}
                    alt={actor.name}
                    />
                    <h3>{actor.name}</h3>
                    <p><span>Character: </span>{actor.character}</p>
              </li>
            })}
          </ul>
        </div>
         ) : (
          <p>No cast available</p>
      ))}
    </div>
  )
}

export default MovieCast