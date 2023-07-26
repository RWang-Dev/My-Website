// import ContactItem from "./ContactItem";
import classes from "./ContactList.module.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function ContactList(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_alayddb', 'template_wiv9lgd', form.current, 'YXDT16-b8BnokISYj')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent")
          e.target.reset();
          alert("Your message has been sent!")
      }, (error) => {
          console.log("Error! Try again")
          console.log(error.text);
          alert("Something went wrong! Try again")
      });
  };
  return (

    // Creates a list and loops through it, creating ContactItems
    // <ul >
    //   {props.contacts.map((contact) => (
    //     <ContactItem
    //       id={contact.id}
    //       image={contact.image}
    //       text={contact.text}
    //       link={contact.link}
    //     />
    //   ))}
    // </ul>
    <div className={classes.email_form}>
      <form ref={form} onSubmit={sendEmail}>
        <label><b>Name</b></label>
        <input type="text" name="user_name" placeholder="Your name" required/>
        <label><b>Email</b></label>
        <input type="email" name="user_email" placeholder="Your email" required/>
        <label><b>Message</b></label>
        <textarea name="message" required/>
        <input type="submit" value="Send" />
      </form>
    </div>
    
    
  );
}



export default ContactList;

