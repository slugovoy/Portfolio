import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import About from "./About";
import Education from "./Education";
import Portfolio from "./Portfolio";
import Experience from "./Experience";

function Main({ user }) {
  return (
    <Router>
    <div>
      <Navbar user={user}/>
      <Route exact path="/">
        <About user={user} />
      </Route>
      <Route path="/portfolio">
          <Portfolio user={user} />
      </Route>
      <Route path="/education">
          <Education user={user} />
      </Route>
      <Route path="/experience">
          <Experience user={user} />
      </Route>
      {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default Main;
