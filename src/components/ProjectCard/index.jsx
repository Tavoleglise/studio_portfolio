import { motion } from "framer-motion";

export default function ({ title, currentProject, id, setCurrentProject }) {
  const handleCardNotselectedClick = () => {
    setCurrentProject(id);
  };

  return (
    <div className="item">
      <div
        className={`projectsCard ${
          currentProject !== id ? "hover-unselected" : null
        }`}
        onClick={handleCardNotselectedClick}
      >
        <img
          src="./images/projectImage.webp"
          alt="project-img"
          height={435.6}
          width={484}
        />
        <div className="project-itemcontent-container">
          <h1 className="project-title">{title}</h1>
          <div className="technologiesContainer"></div>
          <div className="technologyList">
            <div className="technologyTag">Javascript</div>
            <div className="technologyTag">WebGL</div>
            <div className="technologyTag">ReactJs</div>
            <div className="technologyTag">HTML + CSS</div>
          </div>
          <div className="project-card-buttons-container">
            <div
              className={`project-card-button-code center gray-hover ${
                currentProject !== id ? "avoid-clicks" : null
              }`}
            >
              Code
            </div>
            <div
              className={`project-card-button-live center orange-hover ${
                currentProject !== id ? "avoid-clicks" : null
              }`}
            >
              Live
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
