import React, { useContext } from "react";
import "./direction.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { directionContent } from "../../portfolio";

export default function Direction() {
  const { isDark } = useContext(StyleContext);

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="direction">
      <div className="direction-main-div">
        <Fade left duration={1000}>
          <div className="direction-image-div">
            <img
              alt="Gait Recognition"
              src={require("../../assets/images/gait.png")}
              className="direction-image"
            />
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="direction-text-div">
            <h1 className={isDark ? "dark-mode direction-heading" : "direction-heading"}>
              {directionContent.title}
            </h1>
            <p className={isDark ? "dark-mode subTitle direction-text-subtitle" : "subTitle direction-text-subtitle"}>
              {directionContent.subtitle}
            </p>
            <div className="direction-description">
              {directionContent.description.map((paragraph, i) => (
                <p
                  key={i}
                  className={isDark ? "dark-mode subTitle direction-text" : "subTitle direction-text"}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}