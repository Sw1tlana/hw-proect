
import { Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import Loader from './components/Loader/Loader';
import Layout from './components/Layout/Layout';

const HomePage = lazy(() => import ('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import ('./pages/MoviesPage/MoviesPages'));
const MovieDetailsPage = lazy(() => import ('./pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import ('./pages/NotFoundPage/NotFoundPage'));


function App() {

  return (
    <Layout>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </Suspense>
    </Layout>

  )
}

export default App;