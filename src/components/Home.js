import React from "react";
import CommingEvents from "./CommingEvents";

const Home = () => (
  <div>
    <Carousel />
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

export default Home;
