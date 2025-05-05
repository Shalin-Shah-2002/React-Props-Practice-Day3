import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img src={props.img} alt="avatar_img" className="circle-img" />
      </div>
      <div className="bottom">
        <p>{props.number}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
