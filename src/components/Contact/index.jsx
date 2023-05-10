import "./contact.scss";
import { motion, useAnimate } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="textBox"
      initial={{ clipPath: "inset(10% 50% 90% 50% round 10px)" }}
      animate={{ clipPath: "inset(0% 0% 0% 0% round 10px)" }}
      exit={{ clipPath: "inset(10% 50% 90% 50% round 10px)" }}
      transition={{ type: "spring", bounce: 0, duration: 0.5 }}
    >
      <span className="background"></span>
      <div className="content">
        <div className="title">
          {/*<span>
            <img
              className="title-icon"
              src="./icons/attribution-pencil-color.svg"
              alt=""
            />
  </span>*/}
          <h1>Contact</h1>
          <hr />
          <span style={{ fontSize: 30 }}>&#9993;</span>
        </div>
        <div className="contact-container">
          <div className="contact-form-container">
            <div className="input-container column">
              <div>
                <label for="">Name:</label>
              </div>
              <input type="text" className="contact-name-input-field" />
            </div>
            <div className="input-container column">
              <div>
                <label for="">Email:</label>
              </div>
              <input type="text" className="contact-name-input-field" />
            </div>
            <div className="input-container column">
              <div>
                <label for="">Message:</label>
              </div>
              <textarea
                className="contact-message-input-field"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="contact-button-container row">
              <div className="contact-submit-button small-button orange-hover">
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
