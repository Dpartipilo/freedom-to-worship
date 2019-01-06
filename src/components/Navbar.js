import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";

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

const Galery = () => <h2>Galery</h2>;
const About = () => (
  <div>
    <h2 onClick={console.log("hola Amigos!!")}>About kkjavsasdasdasus</h2>
  </div>
);
const Users = () => <h2>Users</h2>;

export default Navbar;
