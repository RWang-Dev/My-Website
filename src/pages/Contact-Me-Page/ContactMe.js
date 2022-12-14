import ContactList from "../../components/Contact-Me/ContactList.js";
import {contactInfo} from "./ContactMeInfo"
// Same style of function as the AboutMe Pages

function ContactMe() {
  return (
    <section>
      <h1 style={{ marginTop: 75, marginBottom: 75 }}>
        You can reach out to me through...
      </h1>
      <ContactList contacts={contactInfo} />
    </section>
  );
}

export default ContactMe;
