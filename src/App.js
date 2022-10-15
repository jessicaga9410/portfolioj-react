import React from "react";
import About from "./Component/About/About";
import Navb from "./Component/Navb/Navb";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Work from "./Component/Work/Work";
import Contact from "./Component/Contact/Contact";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navb />
        {/* <Switch> */}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
        {/* </Switch> */}
      </Router>
      <Footer />
    </div>
  );
}
export default App;
