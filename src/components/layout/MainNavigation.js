import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";



// This function creates the header on the website and links the different sections of the website
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>[<div className={classes.logo_color}>R.W</div>]</div>
      <nav>
        <ul>
          <li className={classes.title}>
            <Link className={classes.menus} to="/">
              About
            </Link>
          </li>
          <li className={classes.title}>
            <Link className={classes.menus} to="/projects">
              Projects
            </Link>
          </li>
          <li className={classes.title}>
            <Link className={classes.menus} to="/contact-me">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
