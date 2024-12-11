import styles from "./Contact.module.css";
import { getImageUrl } from "../utils";

function Contact() {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to react out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
          <a href="mailto:tanzeelbhatti80@gmail.com">
            tanzeelbhatti80@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedin icon"
          />
          <a href="https://www.linkedin.com/in/tanzeel-bhatti15">
            linkedin.com/tanzeel-bhatti15
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
          <a href="https://github.com/Tanzeelbhatti127">
            github.com/Tanzeelbhatti127
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
