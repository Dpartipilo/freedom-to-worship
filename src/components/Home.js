import React from "react";

const Home = () => (
  <div>
    <Carousel />
    <h1>Comming Events</h1>
    <CommingEvents />
  </div>
);

const Carousel = () => (
  <div className="container">
    <div className="carousel">
      <h2>Carousel</h2>
    </div>
  </div>
);

let aEvents = [
  { title: "TestTitle", image: "testImage" },
  { title: "TestTitle2", image: "testImage2" }
];

const CommingEvents = () => (
  <div className="container">
    <div className="commingEvents">
      {aEvents.map(event => (
        <div className="singleEvent">
          <h1>{event.title}</h1>
          <h1>{event.image}</h1>
        </div>
      ))}
    </div>
  </div>
);
export default Home;
