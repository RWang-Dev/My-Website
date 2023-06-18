import ContactList from "../../components/Contact-Me/ContactList.js";
import {contactInfo} from "./ContactMeInfo"
import classes from "./ContactMe.module.css"
// Same style of function as the AboutMe Pages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFile} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

function ContactMe() {
  return (
    <section>
      <h1 className={classes.contactMeTitle}>
            Contact 
          </h1>
      <div className={classes.contact_layout}>
        <div className={classes.email_contact}>
          
          <div className={classes.contactMeDescription}>
            Feel free to reach out to me. You can message me using the form below or check out any of the other contact methods linked on this page. I will do my best to respond ASAP. 
          </div>
          <div className={classes.media_icons}>
            <div className={classes.email}><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            <span style={{marginLeft:5}}>robwang.us@gmail.com</span>
            </div>
            <div className={classes.email}>
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              <span style={{marginLeft:5}}>wan00379@umn.edu</span>
            </div>
            
          </div>
          <div className={classes.contactMeDescription}> <h3>Write me a message </h3> </div>
          <ContactList contacts={contactInfo} />
        </div>
        <div className={classes.other_contact}>
          <div className={classes.contact_description}>
            <a href="https://github.com/RWang-Dev" target="_blank"><div className={classes.other_icons}><FontAwesomeIcon icon={faGithub} /> </div>
            <span >Check out my code on GitHub</span></a>
            
          </div>
          <div className={classes.contact_description}>
            <a href="https://www.linkedin.com/in/rwang523" target="_blank">
              <div className={classes.other_icons}><FontAwesomeIcon icon={faLinkedin} /> </div>
              <span >Visit my Linkedin</span>
            </a>
            
          </div>
          <div className={classes.contact_description}>
            <a href="My-Resume-2023.pdf" download >
              <div className={classes.other_icons}><FontAwesomeIcon icon={faFile} /> </div>
              <span >Download my resume here</span>
            </a>
            
          </div>
          <div className={classes.contact_description}>
            <a href="UMN Transcript Spring 2023.pdf" download>
              <div className={classes.other_icons}><FontAwesomeIcon icon={faFile} /> </div>
              <span >Download my transcript here</span>
            </a>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
