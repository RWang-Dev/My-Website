import Contact from "../ui/Contact";

function ContactItem(props) {
  return (
    <Contact
      id={props.id}
      image={props.image}
      text={props.text}
      link={props.link}
    />
  );
}

export default ContactItem;
