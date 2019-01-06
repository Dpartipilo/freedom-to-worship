import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
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

export default App;
