import SkillsBlock from "./components/SkillsBlock";
import { skills } from "./constants";
import "./style.sass";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <SkillsBlock skills={skills.slice(0, 5)} />
        <SkillsBlock skills={skills.slice(5, 10)} />
      </div>
    </section>
  );
};

export default Skills;
