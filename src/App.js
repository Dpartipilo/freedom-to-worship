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
        <Link to="/">Home</Link>
        <Link to="/about/">About</Link>
        <Link to="/users/">Users</Link>
        <Link to="/galery/">Galery</Link>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
      <Route path="/galery/" component={Galery} />
    </div>
  </Router>
);

const Index = () => <h2>Home</h2>;
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
