import "./style.sass";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">3+ Years Working</span>
      </div>

      <div className="about__box">
        <i className="bx uil-graduation-cap about__icon"></i>
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">Bachelor's Degree</span>
      </div>

      <div className="about__box">
        <i className="bx bx-current-location about__icon"></i>
        <h3 className="about__title">Location</h3>
        <span className="about__subtitle">Sofia, Bulgaria</span>
      </div>
    </div>
  );
};

export default Info;
