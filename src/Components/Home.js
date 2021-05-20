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
import image1 from '../images/sunset-drive.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';


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
      <header className={classes.header +" "+ classes.darkMainBg +" homeHeader"} style={{position:"relative"}}>
        <Grid container spacing={0} >
          <Grid item xs={12} md={12}>
            <Paper elevation={5} id="Paper" data-aos="fade-right">
              <h2>WE ARE</h2>
              <a href="/about"><img className="img-fluid" src={logo} alt="First slide"/><br/></a>
            </Paper>
          </Grid>
          <Grid item xs={12} className="">
            <a href="/reservations" data-aos="fade-in" style={{position: "absolute", bottom:"150px",left:"50%"}}><button type="button" className="btn btn-success">Make Reservations Now </button></a>
          </Grid>
        </Grid>
      </header>
      <main>
      <Typography gutterBottom variant="h2" >
        <h2>Our offers include</h2>
      </Typography>
        <Grid container spacing={3} direction="row" justify="space-evenly" alignItems="center">
          <Grid item>
            <Paper style={{width:"300px"}} elevation={10}>
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
            <Paper style={{width:"300px"}} elevation={10}>
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
            <Paper style={{width:"300px"}} elevation={10}>
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
            <Paper style={{width:"300px"}} elevation={10}>
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
        <hr className=""/>
        <div id="gallery" className="carousel slide" data-ride="carousel" data-aos="fade-up">
          <div className="carousel-inner" >
            <div className="carousel-item active">
              <img src={image1} className="img-fluid" alt="gallery"></img>
            </div>
            <div className="carousel-item">
              <img src={image2} className="img-fluid" alt="gallery"></img>
            </div>
            <div className="carousel-item">
              <img src={image3} className="img-fluid" alt="gallery"></img>
            </div>
            <div className="carousel-item">
              <img src={image4} className="img-fluid" alt="gallery"></img>
            </div>
            <div className="carousel-item">
              <img src={image5} className="img-fluid" alt="gallery"></img>
            </div>
            <div className="carousel-item">
              <img src={image6} className="img-fluid" alt="gallery"></img>
            </div>
          </div>
          <a class="carousel-control-prev" href="#gallery" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#gallery" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </main>
    </div>
  )
}
