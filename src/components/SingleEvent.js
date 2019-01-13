import React from "react";

const SingleEvent = props => (
  <div
    className="singleEvent"
    style={{ backgroundImage: `url(${props.imageUrl})` }}
    key={props.id}
  >
    <p>{props.date}</p>
    <h1>{props.title}</h1>
  </div>
);

export default SingleEvent;
