import classes from "./AboutMeItem.module.css";
import Card from "../ui/Card";
function AboutMeItem(props) {
  // Checks if there is an image inside the Card that is being passed into the function
  if (props.image !== null) {
    return (
      <li className={classes.item}>
        <Card className={classes.card}>
          <div className={classes.image}>
            <img src={props.image} alt="" />
          </div>
          <div className={classes.info}>
            <h3 className={classes.actions}>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </div>
        </Card>
      </li>
    );
  } else {
    return (
      <li className={classes.item}>
        <Card className={classes.card}>
          <hr className={classes.hr} />
          <div className={classes.info}>
            <h3 className={classes.actions}>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </div>
        </Card>
      </li>
    );
  }
}

export default AboutMeItem;
