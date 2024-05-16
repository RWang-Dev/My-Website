import Card from "../ui/Card";
import classes from "./ProjectItem.module.css";

// Sets the individual ProjectItems
function ProjectItem(props) {
  return (
    <li className={classes.item}>
      <Card className={classes.card}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.description}>
          <p>{props.description}</p>
        </div>

        <div className={classes.actions}>
          {/* Used the ? : syntax to do if else checks within the JSX code */}
          {/* {props.id === "p2" ? (
            <div>
              <a href={props.link} alt="" target="_blank" rel="noreferrer">
                <button style={{ marginBottom: 15 }}>View code</button>
              </a>
            </div>
          ) : null}
          {props.id !== "p1" && props.id !== "p2" ? (
            <a href={props.link} alt="" target="_blank" rel="noreferrer">
              <button style={{ marginBottom: 15 }}>View code</button>
            </a>
          ) : null}
          {props.id === "p1" ? (
            <a href={props.link} alt="" target="_blank" rel="noreferrer">
              <button style={{ marginBottom: 15 }}>View code</button>
            </a>
          ) : null} */}
          {props.id === "p2" ? (
            <div>
              <a href={props.link} alt="" target="_blank" rel="noreferrer">
                <button style={{ marginBottom: 15 }}>Visit Web App</button>
              </a>
            </div>
          ) : (
            <div>
              <a href={props.link} alt="" target="_blank" rel="noreferrer">
                <button style={{ marginBottom: 15 }}>View code</button>
              </a>
            </div>
          )}
        </div>
      </Card>
    </li>
  );
}

export default ProjectItem;
