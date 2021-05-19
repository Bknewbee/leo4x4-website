import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import  useStyles from '../styling/styles';
import logo from '../logo.png';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar id="AppBar">
          <Toolbar className={"navbar navbar-expand-lg justify-content-between fixed-top navbar-light " + classes.lightMainBG +" "+classes.darkMainColor}>
              <a className="navbar-brand" href="/">
                <img src={logo} width="150" height="100" alt="Leo's 4x4 Company Logo"/>
              </a>
              <button className="navbar-toggler" type="button btn-primary" data-toggle="collapse" data-target="#navbarHome" aria-controls="navbarHome" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarHome">
                <ul className="navbar-nav  ml-auto">
                  <li className="nav-item ">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/reservations">Reservations</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#!">Contact Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#!">Our Fleets & Rates</a>
                  </li>
                </ul>
              </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
