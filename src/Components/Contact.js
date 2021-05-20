import React from 'react';
import {Paper, TextField} from "@material-ui/core";

import './Contact.css';
import  useStyles from '../styling/styles';

export default function Contact (){
  const classes = useStyles();

  return (
    <div id="Contact">
      <header className={classes.header+"  d-flex justify-content-center align-items-center"}>
        <Paper className="paper" >
            <div>
              <h2>Contact Us</h2>
              <p>Feel free to contact us if you need some help, consultation or you have other questions</p>
              <form autoComplete="off">
                <div className="row">
                  <div className="col-md-6 ">
                    <TextField label="Your Name" variant="outlined" fullWidth style={{margin: "10px 0px"}}></TextField>
                  </div>
                  <div className="col-md-6">
                    <TextField label="Your e-mail" variant="outlined" fullWidth style={{margin: "10px 0px"}}></TextField>
                  </div>
                </div>
                <TextField
                  label="Message..."
                  multiline
                  rows={10}
                  variant="outlined"
                  fullWidth
                  style={{margin: "10px auto"}}
                  ></TextField>
                <button className="btn" disabled> Send </button>
              </form>
            </div>
        </Paper>
      </header>
    </div>
  )
}
