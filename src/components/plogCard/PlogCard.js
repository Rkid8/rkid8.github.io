import React from "react";
import "./PlogCard.scss";

export default function PlogCard({ cardInfo, isDark }) {
  return (
    <div className={isDark ? "dark-mode plog-card" : "plog-card"}>
      <div className="plog-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="plog-card-image"
        />
      </div>
      <div className="plog-detail-div">
        <h5 className={isDark ? "dark-mode plog-card-title" : "plog-card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode plog-card-subtitle" : "plog-card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
    </div>
  );
}