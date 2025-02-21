import React, {useContext} from "react";
import "./group.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

import {groupMembers} from "../../portfolio"

export default function Group() {
  const {isDark, isEn} = useContext(StyleContext);

  const renderGroup = (title, members) => (
    <div key={title}>
      <h2
        className={
          isDark ? "dark-mode group-category-title" : "group-category-title"
        }
      >
        {title}
      </h2>
      <div className="group-cards-div">
        {members.map((member, i) => (
          <Fade bottom delay={i * 100} key={i}>
            <div className={isDark ? "dark-mode group-card" : "group-card"}>
              <img
                src={member.image}
                alt={isEn ? member.name.en : member.name.zh}
                className="group-card-image"
              />
              <h3 className="group-card-name">
                {isEn ? member.name.en : member.name.zh}
              </h3>
              <p className="group-card-role">
                {isEn ? member.role.en : member.role.zh}
              </p>
              <p className="group-card-description">
                {isEn ? member.description.en : member.description.zh}
              </p>
              {/* <div className="group-card-social-links">
                {member.socialLinks.googlescholar && (
                  <a
                    href={member.socialLinks.googlescholar}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa-brands fa-google-scholar"></i>
                  </a>
                )}
                {member.socialLinks.github && (
                  <a
                    href={member.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                )}
                {member.socialLinks.email && (
                  <a
                    href={`mailto:${member.socialLinks.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                )}
              </div> */}
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="group">
        <div className="group-main-div">
          <div className="group-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading group-heading"
                  : "heading group-heading"
              }
            >
              {isEn ? "Research Group" : "研究小组"}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle group-subtitle"
                  : "subTitle group-subtitle"
              }
            >
              {/* {isEn
                ? "Meet our talented research team."
                : "认识我们才华横溢的研究团队。"} */}
            </p>
          </div>
          {renderGroup(
            isEn ? "Instructors" : "指导教师",
            groupMembers.instructors
          )}
          {renderGroup(
            isEn ? "Graduated Students" : "已毕业学生",
            groupMembers.graduated
          )}
          {renderGroup(
            isEn ? "Graduate Students" : "在读研究生",
            groupMembers.graduateStudents
          )}
          {renderGroup(
            isEn ? "Undergraduate Students" : "在读本科生",
            groupMembers.undergraduateStudents
          )}
        </div>
      </div>
    </Fade>
  );
}

// export default function Group() {
//   const { isDark, isEn } = useContext(StyleContext);

//   const renderGroup = (title, members) => (
//     <div key={title}>
//       <h2 className={isDark ? "dark-mode group-category-title" : "group-category-title"}>
//         {title}
//       </h2>
//       <div className="group-cards-div">
//         {members.map((member, i) => (
//           <div key={i} className={isDark ? "dark-mode group-card" : "group-card"}>
//             <img src={member.image} alt={isEn ? member.name.en : member.name.zh} className="group-card-image" />
//             <h3 className="group-card-name">{isEn ? member.name.en : member.name.zh}</h3>
//             <p className="group-card-role">{isEn ? member.role.en : member.role.zh}</p>
//             <p className="group-card-description">
//               {isEn ? member.description.en : member.description.zh}
//             </p>
//             <div className="group-card-social-links">
//               {member.socialLinks.googlescholar && (
//                 <a href={member.socialLinks.googlescholar} target="_blank" rel="noopener noreferrer">
//                   <i className="fas fa-fw fa-graduation-cap"></i>
//                 </a>
//               )}
//               {member.socialLinks.github && (
//                 <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
//                   <i className="fab fa-github"></i>
//                 </a>
//               )}
//               {member.socialLinks.email && (
//                 <a href={`mailto:${member.socialLinks.email}`} target="_blank" rel="noopener noreferrer">
//                   <i className="fas fa-envelope"></i>
//                 </a>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <Fade bottom duration={1000} distance="20px">
//       <div className="main" id="group">
//         <div className="group-main-div">
//           <div className="group-header">
//             <h1 className={isDark ? "dark-mode heading group-heading" : "heading group-heading"}>
//               {isEn ? "Research Group" : "研究小组"}
//             </h1>
//             <p className={isDark ? "dark-mode subTitle group-subtitle" : "subTitle group-subtitle"}>
//               {isEn ? "Meet our talented research team." : "认识我们才华横溢的研究团队。"}
//             </p>
//           </div>
//           {renderGroup(isEn ? "Instructors" : "指导教师", groupMembers.instructors)}
//           {renderGroup(isEn ? "Graduated Students" : "已毕业", groupMembers.graduated)}
//           {renderGroup(isEn ? "Graduate Students" : "研究生", groupMembers.graduateStudents)}
//           {renderGroup(isEn ? "Undergraduate Students" : "本科生", groupMembers.undergraduateStudents)}
//         </div>
//       </div>
//     </Fade>
//   );
// }
