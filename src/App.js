import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Typography } from '@material-ui/core';

//import files
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Reservations from './Components/Reservations';
import Contact from "./Components/Contact";
import ElevateAppBar from './Components/ElevateAppBar';

function App() {
  //const preventDefault = (event) => event.preventDefault();

  return (
    <div className="App">
      <Router>
      {/*
        <nav className="navbar navbar-expand-lg justify-content-between fixed-top navbar-light">
          <a className="navbar-brand" href="/">  {/*href to home*}
            <img src={logo} width="150" height="100" alt="Leo's 4x4 Company Logo"/>
          </a>
          <button className="navbar-toggler" type="button btn-primary" data-toggle="collapse" data-target="#navbarHome" aria-controls="navbarHome" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarHome">
            <ul className="navbar-nav  ml-auto">
              <li className="nav-item ">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/reservations">Reservations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">Our Fleets & Rates</a>
              </li>
            </ul>
          </div>
        </nav>
        */}
        <ElevateAppBar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/reservations">
            <Reservations />
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>

        </Switch>
      </Router>
      <footer>
        <Typography align="left" className="clearText">
          Our Contact Details
          Physical Address:
          <br/>
          Plot 11538 Boseja Kubung
          <br/>
          Maun, Botswana
          <br/>
          Tel:
          +267 74739953
          <br/>
          Email: reservations@leo4x4.co.bw
        </Typography>
        <hr/>
        2021 Leo's 4x4 & Camping. All Rights Reserved. Designed & Maintained By Bnoob.
      </footer>
    </div>
  );
}

export default App;
