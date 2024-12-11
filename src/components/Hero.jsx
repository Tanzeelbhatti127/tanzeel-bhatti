import { getImageUrl } from "../utils";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tanzeel</h1>
        <p className={styles.description}>
          I'm a passionate and motivated React developer dedicated to crafting
          innovative and scalable front-end solutions. With a strong foundation
          in JavaScript, React, and modern web developement technologies, I
          bring idaes to life through efficient and maintainable code. I'm
          driven by a passion for problem-solving and a commitment to delivering
          exceptional user experience.
        </p>
        <a
          href="mailto:tanzeelbhatti80@gmail.com"
          className={styles.contactBtn}
        >
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
