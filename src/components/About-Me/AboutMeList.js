import classes from "./AboutMeList.module.css";
import AboutMeItem from "./AboutMeItem";
function AboutMeList(props) {
  return (
    // Creates a list with all the AboutMeItems in it, mapping through the props (an array) that will be passed into the AboutMeList
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
