import ExperienceItemLeft from "./components/ExperienceItemLeft/ExperienceItemLeft";
import ExperienceItemRight from "./components/ExperienceItemRight/ExperienceItemRight";
import "./style.sass";

const Experience = () => {
  return (
    <section className="experience section">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My professional journey</span>

      <div className="experience__container container">
        <div className="experience__sections">
          <div className="experience__content experience__content-active">
            <ExperienceItemLeft
              title="Frontend Developer"
              subtitle="Toptal"
              date="Jun 2023 - Oct 2024"
            />

            <ExperienceItemRight
              title="Junior Frontend Developer"
              subtitle="Toptal"
              date="Feb 2022 - Jun 2023"
            />

            <ExperienceItemLeft
              title="Intern Frontend Developer "
              subtitle="Toptal"
              date="Aug 2021 - Feb 2022"
            />

            <ExperienceItemRight
              title="Collegium Da Vinci"
              subtitle="Bachelor's Degree in Mobile and Web development"
              date="2018 - 2022"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
