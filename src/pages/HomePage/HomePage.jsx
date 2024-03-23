import { useEffect, useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import { queryMoviesPages } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setIsLoading(true);
                setIsError(false);
                const data = queryMoviesPages(data);
                setMovies(data);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading();
            }
        }
           fetchMovies();
    }, []);

  return (
      <div>
          {isLoading && <Loader />}
          {isError && <ErrorMessage />}
          <MovieList movies={movies} />
      </div>
  )
}

export default HomePage
