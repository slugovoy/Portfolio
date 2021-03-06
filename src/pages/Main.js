import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import About from "./About";
import Education from "./Education";
import Portfolio from "./Portfolio";
import Experience from "./Experience";

// Main page renders lower level pages with react router
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
      </div>
    </Router>
  );
}

export default Main;
