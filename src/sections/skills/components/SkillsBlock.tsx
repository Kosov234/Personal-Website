import { Skill } from "../types";

import "./style.sass";

type Props = {
  skills: Skill[];
};

const SkillsBlock = (props: Props) => {
  const { skills } = props;

  return (
    <div className="skills__content">
      <div className="skills__box">
        <div className="skills__group">
          {skills.map((item) => (
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">{item.title}</h3>
                <span className="skills__level">{item.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsBlock;
