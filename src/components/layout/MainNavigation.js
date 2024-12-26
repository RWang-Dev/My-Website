import { Link, useLocation } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

// This function creates the header on the website and links the different sections of the website
function MainNavigation({ toggleEditLayout, isEditingLayout }) {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const isProjectsPage = location.pathname === "/projects";

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        [
        <Link className={classes.logo_color} to="/">
          R.W
        </Link>
        ]
      </div>
      <nav>
        <ul>
          {/* <li className={classes.title}>
            <Link className={classes.menus} to="/addExperience">
              Add Experience
            </Link>
          </li> */}
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
          <li className={classes.title}>
            <Link className={classes.menus} to="/db">
              DB
            </Link>
          </li>
        </ul>
      </nav>
      {isMainPage || isProjectsPage ? (
        <div className={classes.edit_icon} onClick={() => toggleEditLayout()}>
          <FontAwesomeIcon
            icon={faPenToSquare}
            style={{
              color: isEditingLayout ? "yellow" : "rgba(255, 255, 255, 0.25)",
            }}
          />
        </div>
      ) : null}
    </header>
  );
}

export default MainNavigation;
