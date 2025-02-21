import React, { useContext } from "react";
import "./scholar.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import ScholarCard from "../../components/scholarCard/ScholarCard";
import ProjectCard from "../../components/projectCard/ProjectCard";


import { academicAchievements, projects} from "../../portfolio";

export default function Scholar() {
  const { isDark, isEn } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="scholars">
        <div className="scholar-header">
          <h1 className="scholar-header-text">
            {isEn ? "Academic Achievements" : "学术成果"}
          </h1>
          {/*<p className={isDark ? "dark-mode scholar-subtitle" : "subTitle scholar-subtitle"}>
            {isEn ? "Here is a list of academic achievements by the research group." : "以下是研究小组的学术成果列表"}
          </p>*/}
        </div>
        <div className="scholar-main-div">
          <div className="scholar-text-div">
            {academicAchievements.items.map((achievement, yearIndex) => (
              <div key={yearIndex} className="year-section">
                <h2 className={isDark ? "dark-mode year-title" : "year-title"}>
                  {achievement.year}
                </h2>
                <div className="papers-container">
                  {achievement.papers.map((paper, paperIndex) => (
                    <ScholarCard
                      key={paperIndex}
                      isDark={isDark}
                      paper={paper}
                    />
                  ))}
                </div>
              </div>
            ))}
            <div className="projects-container">
              <h2 className={isDark ? "dark-mode project-title" : "project-title"}>
              Project participant
              </h2>
              <div className="project-card-container">
                {projects.items.map((info, infoIndex) => (
                  <ProjectCard
                    key={infoIndex}
                    cardInfo = {info}
                    isDark={isDark}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </Fade>
  );
}