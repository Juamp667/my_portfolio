"use client"
import React, { useState } from "react";
import "../styles/card.css"

type CardProps = {
  imgSrc: string;
  title: string;
  date: string;
  addStyle?: React.CSSProperties;
  finished?: boolean;
  description?: string;
}

export function CardExper({imgSrc, title, date, addStyle, finished = true, description = ""}: CardProps) {
  // finished: true -> completed, false -> in-progress
  const [expanded, setExpanded] = useState(false);
  const className = `card ${finished ? "" : "in-progress"} ${expanded ? "expanded" : ""}`.trim();

  return (
    <div
      className={className}
      style={addStyle}
    >
      <div className="photo">
        <img src={imgSrc} alt="logo" />
      </div>

      <div className="text">
        <div className="name">
          <p>{title}</p>
        </div>

        <div className="date">
          <p>{date}</p>
        </div>

        <div className="detail" aria-hidden={!expanded}>
          {description && <p>{description}</p>}
        </div>
      </div>

      <div className="actions">
        <button className="expand-button" aria-expanded={expanded} onClick={() => setExpanded(v => !v)}>
          <p>▾ {expanded ? "Cerrar" : "Expandir"}</p>
        </button>
      </div>
    </div>
  );
}
