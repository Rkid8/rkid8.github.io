import React from "react";
import "./ScholarCard.scss";

export default function ScholarCard({ paper, isDark }) {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }
  const mainUrl = paper.links.find(link => link.type === "PAPER")?.url || paper.links[0]?.url;
  
  return (
    <div className={isDark ? "scholar-container dark-mode" : "scholar-container"}>
      <div className={isDark ? "dark-mode scholar-card scholar-card-shadow" : "scholar-card"}
       onClick={() => openUrlInNewTab(mainUrl)}>
        <h3 className={isDark ? "small-dark scholar-title" : "scholar-title"}>
          {paper.title}
        </h3>
        <p className={isDark ? "small-dark scholar-authors" : "scholar-authors"}>
          {paper.authors}
        </p>
        <p className={isDark ? "small-dark scholar-conference" : "scholar-conference"}>
          <em>{paper.conference}</em>
        </p>
        {paper.award && (
          <p className={isDark ? "small-dark scholar-award" : "scholar-award"} dangerouslySetInnerHTML={{ __html: paper.award }}>
          </p>
        )}
        <div className="scholar-links">
          {paper.links.map((link, index) => (
            <button
              key={index}
              onClick={() => openUrlInNewTab(link.url)}
              className={`link-button ${link.type.toLowerCase()}`}
            >
              {link.type}
            </button>
          ))}
        </div>
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
      </div>
    </div>
  );
}