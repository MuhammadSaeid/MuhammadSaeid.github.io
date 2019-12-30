import React from "react";

import "./css/Plugin.css"
import "./App.css";
import Home from "./pages/Home.js";
import { Route } from "react-router-dom";
import About from "./pages/About";
import SideMenu from "./components/SideMenu";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";


function App() {
  return (
    <div className="mi-wrapper">
      <SideMenu />
      <main className="mi-pagecontent">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Portfolio} />
       
      </main>
    </div>
  );
}

export default App;
