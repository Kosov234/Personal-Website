type experienceItemProps = {
  title: string;
  subtitle: string;
  date: string;
};

const ExperienceItemRight = ({
  title,
  subtitle,
  date,
}: experienceItemProps) => {
  return (
    <div className="experience__data">
      <div></div>

      <div>
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div>
        <h3 className="experience__title">{title}</h3>
        <span className="experience__subtitle">{subtitle}</span>
        <div className="experience__calendar">
          <i className="uil uil-calendar-alt"></i> {date}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItemRight;
