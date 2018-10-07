import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login/Login";
import Register from "./components/auth/Register/Register";

import classes from "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className={classes.App}>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="containe">
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
