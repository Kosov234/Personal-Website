import { projectsData } from "./data";
import WorkItem from "./WorkItem.tsx";
import "./style.sass";

const Works = () => {
  return (
    <div>
      <div className="work__container container grid">
        {projectsData.map((item) => {
          return <WorkItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
