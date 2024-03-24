import { useEffect, useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from "../../components/Loader/Loader";
import { queryMoviesPagesByQury } from '../../services/api';
import toast from 'react-hot-toast';
import { useSearchParams } from "react-router-dom";
import MovieList from '../../components/MovieList/MovieList';

export const MoviesPages = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const searchQuery = searchParams.get('query');

  const handleSubmit = (evt) => {
    evt.preventDefault(evt);
    const form = evt.target;
    const query = form.elements.query.value.trim();
    if (query.trim().length === 0) {
      toast.success('Please enter a search term first!');
    } else {
      try {
       setIsLoading(true);
       setIsError(false);
      const searchData = queryMoviesPagesByQury(query);
      setMovies(searchData);
      setSearchParams({ query: query});
      } catch(error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    form.reset();
    }

    useEffect(() => {
      if (searchQuery === null) return;

      const fetchParamsByQuery = async () => {
       try {
        setIsLoading(true);
        setIsError(false);
        const queryData = await queryMoviesPagesByQury(searchQuery);
        setMovies(queryData);
       }catch(error) {
        setIsError(true);
       } finally {
        setIsLoading(false);
       }
      }
      fetchParamsByQuery();
    }, [searchQuery]);
    
  return (
  <div>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="query"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
  </form>
    {isLoading && <Loader />}
    {isError && <ErrorMessage />}
    <MovieList movies={movies}/>
    </div>
  )
}

export default MoviesPages
