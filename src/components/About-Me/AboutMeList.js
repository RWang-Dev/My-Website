import classes from "./AboutMeList.module.css";
import AboutMeItem from "./AboutMeItem";
function AboutMeList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <AboutMeItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default AboutMeList;
