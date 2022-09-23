import Card from "../ui/Card";
import classes from "./ProjectItem.module.css";

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
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          {props.id === "p2" ? (
            <div>
              {/* <button style={{ marginBottom: 15, marginRight: 20 }}>
                Visit website
              </button> */}
              <a href={props.link} alt="" target="_blank">
                <button style={{ marginBottom: 15 }}>View code</button>
              </a>
            </div>
          ) : null}
          {props.id !== "p1" && props.id !== "p2" ? (
            <a href={props.link} alt="" target="_blank">
              <button style={{ marginBottom: 15 }}>View code</button>
            </a>
          ) : null}
          {props.id === "p1" ? (
            <a href={props.link} alt="" target="_blank">
              <button style={{ marginBottom: 15 }}>View code</button>
            </a>
          ) : null}
        </div>
      </Card>
    </li>
  );
}

export default ProjectItem;
