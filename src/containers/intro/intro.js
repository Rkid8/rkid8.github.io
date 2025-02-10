import React, {useContext} from "react";
import "./intro.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { introContent } from "../../portfolio"; // 导入 introContent

export default function Intro() {
  const { isDark, isEn } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="intro">
        <div className="intro-header">
          <h1
            className={
              isDark
                ? "dark-mode heading intro-heading"
                : "heading intro-heading"
            }
          >
            {isEn ? introContent.title : introContent.title}
          </h1>
        </div>
        <div className="intro-main-div">
          <div className={isDark ? "dark-mode intro-text" : "intro-text"}>
            {introContent.content.map((item, index) => {
              if (typeof item === "string") {
                return <p key={index}>{item}</p>;
              } else if (React.isValidElement(item)) {
                return item; // 直接渲染 JSX 元素
              } else if (item.heading) {
                return (
                  <React.Fragment key={index}>
                    <h2>{isEn ? item.heading : item.heading}</h2>
                    <ol>
                      {item.items.map((point, idx) => (
                        <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
                      ))}
                    </ol>
                  </React.Fragment>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}