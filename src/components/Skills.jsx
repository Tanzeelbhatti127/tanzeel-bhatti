import styles from "./Skills.module.css";
import skills from "../data/skills.json";
import { getImageUrl } from "../utils";

function Skills() {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.Skill}>
                <div className={styles.skillImgContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
