import React, {useContext, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import StyleContext from "../../contexts/StyleContext";
import Header from "../../components/header/Header";
import ScrollToTopButton from "../../containers/topbutton/Top";
import "./groupDetails.scss";

export default function GroupDetails() {
  const {isDark, isEn} = useContext(StyleContext);
  const location = useLocation();
  const navigate = useNavigate();

  // 滚动逻辑
  useEffect(() => {
    const scrollFunction = () => {
      const mybutton = document.getElementById("myBtn");
      if (mybutton) {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
    };

    window.onscroll = scrollFunction;

    // 清理函数
    return () => {
      window.onscroll = null;
    };
  }, []);

  // 如果 location.state 为 null 或 undefined，则重定向回主页
  if (!location.state || !location.state.groupMembers) {
    navigate("/");
    return null;
  }

  const {groupMembers} = location.state;

  const renderGroup = (title, members) => (
    <div key={title}>
      <h2
        className={
          isDark
            ? "dark-mode group-details-category-title"
            : "group-details-category-title"
        }
      >
        {title}
      </h2>
      <div className="group-details-cards-div">
        {members.map((member, i) => (
          <div
            key={i}
            className={
              isDark ? "dark-mode group-details-member" : "group-details-member"
            }
          >
            <img
              src={member.image}
              alt={isEn ? member.name.en : member.name.zh}
              className="group-details-member-image"
            />
            <h3 className="group-details-member-name">
              {isEn ? member.name.en : member.name.zh}
            </h3>
            <p className="group-details-member-role">
              {isEn ? member.role.en : member.role.zh}
            </p>
            <p className="group-details-member-description">
              {isEn ? member.description.en : member.description.zh}
            </p>
            <div className="group-details-member-social-links">
              {member.socialLinks.googlescholar && (
                <a
                  href={member.socialLinks.googlescholar}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-fw fa-graduation-cap"></i>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="main" id="group-details">
      <Header />
      <div className="group-details-main-div">
        <div className="group-details-header">
          <h1
            className={
              isDark
                ? "dark-mode heading group-details-heading"
                : "heading group-details-heading"
            }
          >
            {isEn ? "Group Details" : "小组详情"}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle group-details-subtitle"
                : "subTitle group-details-subtitle"
            }
          >
            {isEn
              ? "Detailed information about our research group."
              : "关于我们研究小组的详细信息。"}
          </p>
        </div>
        {Object.entries(groupMembers).map(([category, members]) =>
          renderGroup(
            isEn
              ? category
              : category === "instructors"
              ? "指导教师"
              : category === "graduated"
              ? "已毕业"
              : category === "graduateStudents"
              ? "研究生"
              : "本科生",
            members
          )
        )}
      </div>
      <ScrollToTopButton />
    </div>
  );
}
