import React from "react";
import "./ProjectCard.scss";

export default function ProjectCard({ cardInfo, isDark }) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode project-card" : "project-card"} 
    onClick={() => openUrlInNewTab(cardInfo.url)}>
        <div className="project-image-div">
            <img
                src={cardInfo.image}
                alt={cardInfo.imageAlt || "Card Thumbnail"}
                className="project-card-image"
            />
        </div>
        <div className="project-detail-div">
            <h5 className={isDark ? "small-dark project-card-title" : "project-card-title"}>
                {cardInfo.title}
            </h5>
            <p className={isDark ? "small-dark project-card-subtitle" : "project-card-subtitle"}>
                {cardInfo.description}
            </p>
        </div>
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
    </div>
  );
}