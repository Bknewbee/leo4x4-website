import React, { useEffect } from 'react';
import Aos from 'aos';


import { Paper , Grid, Typography} from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import MapIcon from '@material-ui/icons/Map';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import DriveEtaIcon from '@material-ui/icons/DriveEta';

import './Home.css';
import 'aos/dist/aos.css';
import logo from '../logo.png';

//import files
import  useStyles from '../styling/styles';

export default function Home () {
  const classes = useStyles();

  useEffect(()=>{
    Aos.init({
      duration: 1000
    });
  }, [])

  return (
    <div id="Home">
      <header className={classes.homeHeader +" "+ classes.darkMainBg +" homeHeader"}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={12}>
            <Paper elevation={5} id="Paper" data-aos="fade-right">
              <h2>We Are</h2>
              <a href="/about"><img className="img-fluid fadeImage" src={logo} alt="First slide"/><br/></a>
            </Paper>
          </Grid>
          <Grid item xs={12} className="positionBottom">
            <a href="/reservations" data-aos="fade-in"><button type="button" className="btn btn-success">Make Reservations Now </button></a>
          </Grid>
        </Grid>
      </header>
      <main>
      <Typography gutterBottom variant="h3">
        Our offers include
      </Typography>
        <Grid container spacing={3} direction="row" justify="space-evenly" alignItems="center">
          <Grid item>
            <Paper style={{width:"300px"}} elevation={20}>
              <Grid container>
                <Grid item xs={12}>
                  <VerifiedUserIcon style={{fontSize: "80px"}}/>
                </Grid>
                <Grid item xs={12}>
                  Explore Botswana At Own Time <br/>
                  Explore Botswana. wherever you want,<br/> whenever you want.
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item>
            <Paper style={{width:"300px"}} elevation={20}>
              <Grid container>
                <Grid item xs={12}>
                  <DriveEtaIcon style={{fontSize: "80px"}}/>
                </Grid>
                <Grid item xs={12}>
                  Top Quality Vehicles <br/>
                  All our Vehicles are new with less than 70Km mileage and great service record.
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item>
            <Paper style={{width:"300px"}} elevation={20}>
              <Grid container>
                <Grid item xs={12}>
                  <SettingsApplicationsIcon style={{fontSize: "80px"}}/>
                </Grid>
                <Grid item xs={12}>
                  24/7 Breakdown Support <br/>
                  Our team of drivers and mechanics will ensure you are always on the go.
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item>
            <Paper style={{width:"300px"}} elevation={20}>
              <Grid container>
                <Grid item xs={12}>
                  <MapIcon style={{fontSize: "80px"}}/>
                </Grid>
                <Grid item xs={12}>
                  Cross Border Destinations <br/>
                  Our Vehicles are all licensed and ready to go Beyond Botswana’s Borders.
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </main>
    </div>
  )
}
