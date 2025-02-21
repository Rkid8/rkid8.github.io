import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
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
        <Link to ="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className={isDark ? "dark-menu logo-name" : "logo-name"}>
            {greeting.main}
          </span>
          <span className="grey-color">&gt;</span>
        </Link>
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
              <Link to="/group">{isEn ? "Research Group" : "研究小组"}</Link>
            </li>
          )}
          {viewIntro && (
            <li>
              <Link to="/intro">{isEn ? "Note" : "进组须知"}</Link>
            </li>
          )}
          {viewAchievement && (
            <li>
              <Link to="/scholar">{isEn ? "Achievements" : "学术成果"}</Link>
            </li>
          )}
          {viewDirection && (
            <li>
              <Link to="/direction">{isEn ? "Work" : "研究方向"}</Link>
            </li>
          )}
          {viewPlog && (
            <li>
              <Link to="/plog">{isEn ? "Activities" : "组内活动"}</Link>
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
