import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Galery from "./Galery";

const Navbar = () => (
  <Router>
    <div>
      <nav className="navbar">
        <ul>
          <Link className="navlink" to="/">
            Home
          </Link>

          <Link className="navlink" to="/about">
            About
          </Link>

          <Link className="navlink" to="/contact-us">
            Contact Us
          </Link>

          <Link className="navlink" to="/galery">
            Galery
          </Link>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={ContactUs} />
        <Route path="/galery/" component={Galery} />
        <Route path="/events/:event_id" component={SingleEventPage} />
      </Switch>
    </div>
  </Router>
);

const ContactUs = () => <h2>Contact Us</h2>;
const SingleEventPage = () => <h2>Single Event</h2>;

export default Navbar;
