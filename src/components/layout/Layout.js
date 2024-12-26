import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Layout(props) {
  const { toggleEdit, isEditing } = props;
  return (
    <div>
      <MainNavigation
        toggleEditLayout={toggleEdit}
        isEditingLayout={isEditing}
      />
      {/* Main is a special tag that signals the containment of the main content of the website */}
      <main className={classes.main}> {props.children}</main>
      <div className={classes.footer}>
        Developed with React and deployed to Microsoft Azure
        <hr className={classes.footer_line}></hr>
        <Link to="/contact-me">
          <FontAwesomeIcon
            className={classes.icons}
            icon={faEnvelope}
          ></FontAwesomeIcon>
        </Link>
        <Link to="/contact-me">
          <FontAwesomeIcon className={classes.icons} icon={faGithub} />
        </Link>
        <Link to="/contact-me">
          <FontAwesomeIcon className={classes.icons} icon={faLinkedin} />
        </Link>
        <Link to="/contact-me">
          <FontAwesomeIcon className={classes.icons} icon={faFile} />
        </Link>
      </div>
    </div>
  );
}

export default Layout;
