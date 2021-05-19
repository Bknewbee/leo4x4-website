import React from 'react';
import {Grid} from '@material-ui/core';
import "./About.css";

import logo from '../logo-invert.png';
import proPic1 from '../images/pro-pic-001.jpg';


import  useStyles from '../styling/styles';

export default function About () {
  const classes = useStyles();
  return(
    <div id="About" className="">
      <header className={classes.header+" container-fluid"} style={{position: "relative"}}>
          <Grid container className="d-flex justify-content-end">
            <Grid item sm={6}>

            </Grid>
            <Grid item sm={6} >
              <img src={logo} className="img-fluid" alt="header background"></img>
            </Grid>
          <h2>Leo 4x4 <br/> & Camping</h2>
          </Grid>
          <div className="d-flex justify-content-center">
            <div className="" style={{position:"absolute",bottom:"100px"}}>
              <a  href="/reservations"><button type="button" className="btn btn-success"> Make Reservations Now </button></a>
            </div>
          </div>
      </header>
      <main>
        <h2>.. WE ARE..</h2>
        <p>
          An adventure tours company based in Maun.<br/> We also have drop off points in Kasane, Bulawayo, Francistown, Gaborone, Victoria Falls and Windhoek.<br/><br/>
          We pride our self in offering the best service and customer care when it comes to adventure tours in Botswana.<br/> With a fleet of  4x4's fully equipped for both road and off-road adventures.
        </p>
        <h2>.. Our Guides ..</h2>
        <div className="row">
          <div className="col-sm-6">
            <div className="card" style={{width: "18rem"}}>
              <img className="card-img-top" src={proPic1} alt="Card cap"/>
              <small>Photo by <a href="https://unsplash.com/@davidclode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" rel="noreferrer" target="_blank">David Clode</a> on <a href="https://unsplash.com/s/photos/tour-guide?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Unsplash</a></small>
              <div className="card-body">
                <h5 className="card-title">Guide Name</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card" style={{width: "18rem"}}>
              <img className="card-img-top" src={proPic1} alt="Card cap"/>
              <small>Photo by <a href="https://unsplash.com/@davidclode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" rel="noreferrer" target="_blank">David Clode</a> on <a href="https://unsplash.com/s/photos/tour-guide?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Unsplash</a></small>
              <div className="card-body">
                <h5 className="card-title">Guide Name</h5>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
