import React from "react";

import Contact from "./component/Contact";

import Home from "./component/Home";

import Navbar from './component/Navbar';
import About from "./component/About";
import {
  BrowserRouter as Router,
  Route,
  Switch,
 
} from "react-router-dom";
import AddUsers from "./component/AddUsers";



function App(props) {
  return (
    
      <div>
        <Router>
        <Navbar />

        <Switch>
        <Route exact path="/home"><Home /></Route>
        <Route exact path="/about"><About /></Route>
           <Route exact path="/contact"><Contact /></Route>
           <Route exact path="/component/Add"><AddUsers /></Route>
        </Switch>
        </Router>
      </div>
    
  );
}

export default App;