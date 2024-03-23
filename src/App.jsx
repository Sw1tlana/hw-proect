import css from './App.module.css';
import clsx from 'clsx';

import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPages';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import { NavLink, Route, Routes } from "react-router-dom";

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
        <Routes>
          <Route path="/" element={<HomePage/> } />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='./movies/:movieId' element={<MovieDetailsPage />} />
          <Route patch='*' element={<NotFoundPage/>}/>
        </Routes>
      </main>
     
    </div>
  );
}

export default App;