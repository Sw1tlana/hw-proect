import css from './App.module.css';
import clsx from 'clsx';
import { Suspense, lazy } from 'react';
import { NavLink, Route, Routes } from "react-router-dom";
import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import ('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import ('./pages/MoviesPage/MoviesPages'));
const MovieDetailsPage = lazy(() => import ('./pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import ('./pages/NotFoundPage/NotFoundPage'));

const getNameClassLink = (({ isActive }) => 
  clsx(css.headerLink, {
   [css.active]: isActive
 })
)

function App() {

  return (
    <div>
      <header className={css.header}>
        <NavLink className={getNameClassLink} to="/">Home</NavLink>
        <NavLink className={getNameClassLink} to="/movies">Movies</NavLink>
      </header>

      <main>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </Suspense>
      </main>
     
    </div>
  );
}

export default App;