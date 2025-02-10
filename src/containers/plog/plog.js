import React, { useContext } from "react";
import "./plog.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import PlogCard from "../../components/plogCard/PlogCard";
import { plogContent } from "../../portfolio";

export default function Plog() {
  const { isDark, isEn } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="plog">
        <div className="plog-header">
          <h1 className="plog-header-text">
            {isEn ? "" : "组内活动"}
          </h1>
        </div>
        <div className="plog-main-div">
          {plogContent.items.map((info, infoIndex) => (
            <PlogCard
              key={infoIndex}
              cardInfo={info}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </Fade>
  );
}