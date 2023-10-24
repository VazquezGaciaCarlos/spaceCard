import { Link } from "react-router-dom";
import style from './menu.module.css'
import { v4 } from "uuid";

export const Menu = () => {

  return (

    <nav className={style.nav}>
      <ul>
        {navLinks && navLinks.map((navLink) => (
          <li key={v4()}><Link to={`/${navLink}`}>{navLink.toUpperCase()}</Link></li>
        ))}
      </ul>
    </nav>
  )
}

const navLinks = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']