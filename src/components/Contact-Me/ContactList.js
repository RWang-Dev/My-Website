import ContactItem from "./ContactItem";

function ContactList(props) {
  return (
    // Creates a list and loops through it, creating ContactItems
    <ul>
      {props.contacts.map((contact) => (
        <ContactItem
          id={contact.id}
          image={contact.image}
          text={contact.text}
          link={contact.link}
        />
      ))}
    </ul>
  );
}

export default ContactList;
