import React from "react";
import { Link } from "react-router-dom";

const SingleEvent = props => {
  const { id, date, imageUrl, title } = props;
  return (
    <Link
      className="singleEventContainer"
      to={`/events/${id}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="singleEvent" key={id}>
        <p>{date}</p>

        <h1>{title}</h1>
      </div>
    </Link>
  );
};

export default SingleEvent;
