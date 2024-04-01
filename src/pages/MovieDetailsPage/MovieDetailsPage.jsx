import { useEffect, useRef, Suspense, lazy } from "react";
import { NavLink, Route, Routes, useParams, useLocation } from "react-router-dom";
import { requestMoviesById } from "../../services/api";

import Loader from  '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useDispatch, useSelector } from "react-redux";
import { setIsError, setIsLoading, setMovieData } from "../../redux/store";

const MovieCast = lazy(() => import('../../components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../../components/MovieReviews/MovieReviews'));


const MovieDetailsPage = () => {
    const { movieId } = useParams();
    // const [movieData, setMovieData] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);
    // const [isError, setIsError] = useState(false);
    const location = useLocation();
    const backLinkRef = useRef(location.state ?? "/search");

    const dispatch = useDispatch();
    const movieData = useSelector((state) => state.movieDetails.movieData);
    const isLoading = useSelector((state) => state.movieDetails.isLoading);
    const isError = useSelector((state) => state.movieDetails.isError);

    useEffect(() => {
        const fetchMoviesId = async () => {
            try {
                dispatch(setIsLoading(true));

                const data = await requestMoviesById(movieId);
                dispatch(setMovieData(data));
                // setMovieData(data);

            } catch (error) {
                dispatch(setIsError(true));

            } finally {
                dispatch(setIsLoading(false));
            }
        }
        fetchMoviesId();
    }, [movieId, dispatch]);

  return (
      <div>
          {isLoading && <Loader />}
          {isError && <ErrorMessage />}
          {movieData !== null &&
        <section>

          <NavLink to={backLinkRef.current}>Go back</NavLink>

          <div>
            <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={movieData.title} />
              <ul>
                  <li><h2>{movieData.title}</h2></li>
                  <li><p><span>Overview: </span>{movieData.overview}</p></li>
                  <li><p><span>User Score: </span>{movieData.vote_average}</p></li>
                  {movieData.genres && (<li><p>
                  <span>Genres: </span>{movieData.genres.map(genre => genre.name).join(', ')}</p>
                </li>
                )}
            </ul>
          </div>
        <h2>Additional information</h2>
        </section>}
      <div>
          {movieData && (
            <>
              <NavLink to="cast">Cast</NavLink>
              <NavLink to="reviews">Reviews</NavLink>
            </>
          )}

          </div>
          <div>
            <Suspense fallback={<Loader/>}>
              <Routes>
                <Route path="cast" element={<MovieCast />} />
                <Route path="reviews" element={<MovieReviews />} />
              </Routes>
            </Suspense>
        </div>
       
      </div>
  )
}

export default MovieDetailsPage