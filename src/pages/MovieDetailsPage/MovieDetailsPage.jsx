import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { queryMoviesPagesById } from '../../services/api';

import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const fetchDetailsPage = async () => {
        try {
            setIsLoading(true);
            setIsError(false);
            const data = await queryMoviesPagesById(movieId);
            setMovieData(data);
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
         }
        }
        fetchDetailsPage();
    }, [movieId])

  return (
      <div>
          {isLoading && <Loader />}
          {isError && <ErrorMessage/>}
          {movieData !== null &&
          <div >
            <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={movieData.title} />
              <ul>
                  <li><h2>{movieData.title}</h2></li>
                  <li><p><span >Overview: </span>{movieData.overview}</p></li>
                  <li><p><span >User Score: </span>{movieData.vote_average}</p></li>
                  {movieData.genres && (<li><p>
                  <span>Genres: </span>{movieData.genres.map(genre => genre.name).join(', ')}</p>
                </li>
                )}
            </ul>
          </div>}
          {movieData !== null && (   
          <div>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>        
            </div> 
            )}
   
            <Routes>
                <Route path="cast" element={<MovieCast/>}/>
                <Route path="reviews" element={<MovieReviews/>}/>
            </Routes>       
    </div>
  )
}

export default MovieDetailsPage
