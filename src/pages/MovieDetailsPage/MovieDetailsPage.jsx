import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { queryMoviesPagesById } from '../../services/api';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [, setMovieData] = useState(null);

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
          
          
    </div>
  )
}

export default MovieDetailsPage
