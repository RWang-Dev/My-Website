import classes from "./Contact.module.css";

function Contact(props) {
  return (
    <div className="centerDiv">
      <div className={classes.contactDiv}>
        <div className={classes.flex}>
          {props.id !== "c4" ? (
            <a href={props.link} alt="" target="_blank" rel="noreferrer">
              <button className={classes.content} type="button">
                <img src={props.image} alt="" />
              </button>
            </a>
          ) : (
            <a href="My-Resume-2023.pdf" download="RWang-Resume.pdf">
              <button className={classes.content} type="button">
                <img src={props.image} alt="" />
              </button>
            </a>
          )}

          <div className={classes.text}>{props.text}</div>
        </div>

        {/* <hr className={classes.contactBreak} /> */}
      </div>
    </div>
  );
}

export default Contact;
