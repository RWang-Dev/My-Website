import classes from "./Contact.module.css";

function Contact(props) {
  return (
    <div className="centerDiv">
      <div className={classes.contactDiv}>
        <div className={classes.flex}>
          {props.id !== "c4" ? (
            <a href={props.link} alt="" target="_blank">
              <button className={classes.content} type="button">
                <img src={props.image} alt="" />
              </button>
            </a>
          ) : (
            <a href={props.link} download="RWang-Resume.pdf" target="_blank">
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
