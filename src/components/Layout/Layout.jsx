import { NavLink } from "react-router-dom";
import css from '../../App.module.css';



const Layout = ({ children }) => {
  return (
      <div>
        <header className={css.header}>
        <NavLink  to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
          </header>
          <main>
          {children}    
          </main>
    </div>
  )
}

export default Layout