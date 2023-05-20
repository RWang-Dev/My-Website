import ContactList from "../../components/Contact-Me/ContactList.js";
import {contactInfo} from "./ContactMeInfo"
import classes from "./ContactMe.module.css"
// Same style of function as the AboutMe Pages

function ContactMe() {
  return (
    <section>
      <h1 className={classes.contactMeTitle}>
         Contact Info
      </h1>
      <ContactList contacts={contactInfo} />
    </section>
  );
}

export default ContactMe;
