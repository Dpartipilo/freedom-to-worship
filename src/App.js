import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Footer />
      </div>
    );
  }
}

const Navbar = () => (
  <Router>
    <div>
      <nav className="navbar">
        <ul>
          <Link className="navlink" to="/">
            Home
          </Link>

          <Link className="navlink" to="/about/">
            About
          </Link>

          <Link className="navlink" to="/users/">
            Users
          </Link>

          <Link className="navlink" to="/galery/">
            Galery
          </Link>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
      <Route path="/galery/" component={Galery} />
    </div>
  </Router>
);

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
      <h2>Home</h2>
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

const Galery = () => <h2>Galery</h2>;
const Footer = () => (
  <div className="footer">
    <h2>Footer test</h2>
  </div>
);
const About = () => (
  <div>
    <h2 onClick={console.log("hola!")}>About us</h2>
  </div>
);
const Users = () => <h2>Users</h2>;

export default App;
