import { useEffect, useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import { queryMoviesPagesByReviews } from '../../services/api';
import { useParams } from 'react-router-dom';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
   const fetchReviews = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
    const reviewsData = await queryMoviesPagesByReviews(movieId);
    setMovieReviews(reviewsData.results);
    }catch(error) {
      setIsError(true);
    }finally {
      setIsLoading(false);
    }
   }
   fetchReviews();
  }, [movieId]);

  return  (
    <div>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {!isLoading && !isError && (
        <>
          {movieReviews && movieReviews.length > 0 ? (
            <ul>
              {movieReviews.map((review) => (
                <li key={review.id}>
                  <h2>{review.author}</h2>
                  <p>{review.content}</p>
                  <p>{review.created_at}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews available</p>
          )}
        </>
      )}
    </div>
  );
};

export default MovieReviews
