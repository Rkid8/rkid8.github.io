import React, {useContext, useState, useEffect} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import {ToggleSwitch, LangSwitch} from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  groupMembers,
  introContent,
  academicAchievements,
  directionContent,
  plogContent,
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const {isEn} = useContext(StyleContext);
  const viewIntro = introContent.display;
  const viewGroup = groupMembers.display;
  const viewAchievement = academicAchievements.display;
  const viewDirection = directionContent.display;
  const viewPlog = plogContent.display;
  // 添加 isFixed 状态
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Headroom>
      <header
        className={`${isDark ? "dark-menu header" : "header"} ${
          isFixed ? "fixed-header" : ""
        }`}
      >
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className={isDark ? "dark-menu logo-name" : "logo-name"}>
            {greeting.main}
          </span>
          <span className="grey-color">&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul
          className={`${isDark ? "dark-menu menu" : "menu"} ${
            isEn ? "EN" : "CN"
          }`}
        >
          {viewGroup && (
            <li>
              <a href="#group">{isEn ? "Research Group" : "研究小组"}</a>
            </li>
          )}
          {viewIntro && (
            <li>
              <a href="#intro">{isEn ? "Work Experiences" : "进组须知"}</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#scholars">{isEn ? "Open Source" : "学术成果"}</a>
            </li>
          )}
          {viewDirection && (
            <li>
              <a href="#direction">{isEn ? "Direction" : "研究方向"}</a>
            </li>
          )}
          {viewPlog && (
            <li>
              <a href="#plog">{isEn ? "Blogs" : "组内活动"}</a>
            </li>
          )}
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="header-button">
              <ToggleSwitch />
              <LangSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
