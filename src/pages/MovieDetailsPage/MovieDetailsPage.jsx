import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from "../../components/Loader/Loader";
import { useEffect, useState, useRef, lazy } from "react";
import { Link, Route, Routes, useParams, useLocation, Suspense } from "react-router-dom";
import { queryMoviesPagesById } from '../../services/api';

const MovieCast = lazy(() => import('../../components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../../components/MovieReviews/MovieReviews'));


const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [movieData, setMovieData] = useState(null);
    const location = useLocation();
    const backLinkRef = useRef(location.state ?? '/search');

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
          <div>
           <Link to={backLinkRef.current}>Bag ref</Link>
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
          </div>
          </div>}
          <div>
  {movieData !== null && (   
    <div>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>        
    </div> 
  )}
  <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="cast" element={<MovieCast/>}/>
      <Route path="reviews" element={<MovieReviews/>}/>
    </Routes> 
  </Suspense>  
</div>
          </div>    
  )
}

export default MovieDetailsPage
