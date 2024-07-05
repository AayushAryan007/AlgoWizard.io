import React from "react";

function Card(props) {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt={props.title} className="card_img" />
        <div className="card_info flex flex-row justify-between">
          <h2 className="card_title">{props.title}</h2>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button>View</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
