import React, {Component} from 'react';
import axios from 'axios';

import "./Reservations.css"

class Reservations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formControls:{
        termsConditions:{
          value: false
        },
        selectedSeason: {
          value: "Peak Season"
        },
        startDate:{
          value: ""
        },
        endDate:{
          value: ""
        },
        period:{
          value: 0
        },
        selectedPeriod:{
          value: "3-7 Days"
        },
        selectedEquipment: {
          value: "Unequiped"
        },
        selectedInsurance: {
          value: "Standard Insurance Excess"
        },
        selectedLocation: {
          value: "Maun"
        },
        satallitePhoneAccess: {
          value: false
        },
        gpsAccess: {
          value: false
        },
        groundTentAccess:{
          value: false
        },
        callOutAccess: {
          value: false
        },
        afterHoursAccess: {
          value: false
        },
        cleaningAccess: {
          value: false
        }
      },
      seasons: [
        {
          label: "Low Season",
          value: "Low Season"
        },
        {
          label: "Peak Season",
          value: "Peak Season"
        }
      ],
      periods: [
        {
          label: "3-7 Days",
          value: "3-7 Days"
        },
        {
          label: "8-15 Days",
          value: "8-15 Days"
        },
        {
          label: "16-24 Days",
          value: "16-24 Days"
        },
        {
          label: "25 Days",
          value: "25 Days"
        }
      ],
      equipments: [
        {
          label: "Unequiped",
          value: "Unequiped"
        },
        {
          label: "2 Pax",
          value: "2 Pax"
        },
        {
          label: "4 Pax",
          value: "4 Pax"
        },
      ],
      insurances:[
        {
          label: "Standard Insurance Excess",
          value: "Standard Insurance Excess"
        }
      ],
      locations: [
        {
          label: "Maun",
          value: "Maun"
        },
        {
          label: "Kasane",
          value: "Kasane"
        },
        {
          label: "Gaborone",
          value: "Gaborone"
        },
        {
          label: "Bulawayo",
          value: "Bulawayo"
        },
        {
          label: "Francistown",
          value: "Francistown"
        },
        {
          label: "Harare",
          value: "Harare"
        },
        {
          label: "Livinstone",
          value: "Livinstone"
        },
        {
          label: "Victoria Falls",
          value: "Victoria Falls"
        },
        {
          label: "Windhoek",
          value: "Windhoek"
        }
      ],
      season: {"Low Season": 300.00,"Peak Season": 400.00},
      period: {"3-7 Days": 250.00,"8-15 Days": 260.00,"16-24 Days": 290.00,"25 Days": 280.00},
      insurance: {"Standard Insurance Excess": 20000.00, "Reduced Insurance Excess": 10000.00, "Max Reduced Insurance Excess": 0.0},
      unequiped:{"3-7 Days": 1300.00,"8-15 Days": 1250.00,"16-24 Days": 1200.00,"25 Days": 1150.00},
      pax2:{"3-7 Days": 1500.00,"8-15 Days": 1450.00,"16-24 Days": 1400.00,"25 Days": 1350.00},
      pax4:{"3-7 Days": 1600.00,"8-15 Days": 1550.00,"16-24 Days": 1500.00,"25 Days": 1450.00},
      insuranceMultiplier: {"Standard Insurance Excess": 0.0, "Reduced Insurance Excess": 250.00, "Max Reduced Insurance Excess": 450.00},
      location: {"Maun": 0.0,"Kasane": 0.0,"Gaborone": 2500.00,"Bulawayo": 3000.00,"Francistown": 2000.00,"Harare": 6000.00,"Livinstone": 4000.00,"Victoria Falls": 2500.00,"Windhoek":5000.00},
      errors: {},
      input: {},
      msg:null

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDates = this.handleDates.bind(this);
    this.equipmentTotal = this.equipmentTotal.bind(this);
    }
      handleChange(event) {
       const name = event.target.name;
       const value = event.target.value;
       //for validation
       let input = this.state.input;
       input[event.target.name] = event.target.value;
       this.setState({
         input
       });
       this.setState({
           formControls: {
               ...this.state.formControls,
               [name]: {
                   ...this.state.formControls[name],
                   value
               }
           }
       });

       //console.log(value);
   }
   handleToggle(event){
     const name = event.target.name;
     const value = !this.state.formControls[name].value;
     this.setState({
         formControls:{
             ...this.state.formControls,
             [name]: {
                 ...this.state.formControls[name],
                 value
             }
         }
     })
   }

   handleDates(event){

     let period = 0;

     let name = event.target.name;
     let value = event.target.value;
     /* Repaire selecting dates
     if(new Date(value).getTime() <= new Date().getTime()){
       value = ""
       this.setState({
           formControls: {
               ...this.state.formControls,
               [name]: {
                   ...this.state.formControls[name],
                   value
               }
           }
       })
       alert("The date must be after today");
       return false;
     }else if(name === "endDate"){

       if(this.state.formControls.startDate.value.length > 0){
         if(new Date(value).getTime() <= new Date(this.state.formControls.startDate.value).getTime()){
           console.log("less startDate");
           value = ""
           this.setState({
               formControls: {
                   ...this.state.formControls,
                   [name]: {
                       ...this.state.formControls[name],
                       value
                   }
               }
           })
           alert("The date must be after the first day of your trip");
           return false;
         }
       }else{
         value = ""
         alert("Please choose the first day of your trip first")
         this.setState({
             formControls: {
                 ...this.state.formControls,
                 [name]: {
                     ...this.state.formControls[name],
                     value
                 }
             }
         })
         return false;
       }
     }*/

     this.setState({
         formControls: {
             ...this.state.formControls,
             [name]: {
                 ...this.state.formControls[name],
                 value
             }
         }
     },
     function (){
       if(this.state.formControls.startDate.value && this.state.formControls.endDate.value){
         var x = {...this.state.formControls}
         period = Math.abs(new Date(this.state.formControls.startDate.value) - new Date(this.state.formControls.endDate.value))/86400000;
         if(period > 24){
           x.selectedPeriod.value = "25 Days";
           x.period.value = period
           this.setState({x})
           console.log(x);
         }else if (period > 15) {
           x.selectedPeriod.value = "16-24 Days";
           x.period.value = period
           this.setState({x})
         }else if (period > 7) {
           x.selectedPeriod.value = "8-15 Days";
           x.period.value = period
           this.setState({x})
         }else if (period > 2) {
           x.selectedPeriod.value = "3-7 Days";
           x.period.value = period
           this.setState({x})
         }else{
           console.log("> 3");
           x.selectedPeriod.value = "3-7 Days";
           x.period.value = 0
           this.setState({x})
           /*
           this.setState({
               formControls: {
                   ...this.state.formControls,
                   [name]: {
                       ...this.state.formControls[name],
                       value
                   }
               }
           })
           alert("Minimum rental period is 3 Days")
           console.error("Invalid date");*/
           return false
         }

         this.setState({
             formControls: {
                 ...this.state.formControls,
                 "period": {
                     ...this.state.formControls["period"],
                     period
                 }
             }
         },
         function (){
           if (period >= 15){
            let ins = [
              {
                label: "Standard Insurance Excess",
                value: "Standard Insurance Excess"
              },
              {
                label: "Reduced Insurance Excess",
                value: "Reduced Insurance Excess"
              },
              {
                label: "Max Reduced Insurance Excess",
                value: "Max Reduced Insurance Excess"
              }
            ];
            this.setState({insurances: ins});
          }else {
            let ins = [
              {
                label: "Standard Insurance Excess",
                value: "Standard Insurance Excess"
              }
            ];
            this.setState({insurances: ins});
          }
         }
       );
       }
     }
    );

   }
   //send a post of the form
   postForm(event){

     let url = `http://localhost:5000/api/reservations`;
     const formData = new FormData(event);
     const info = {}


     const config = {
       headers: {
         withCredentials: true
       }
     }
     //append what needs to be added
     /*
     if(this.state.formControls.satallitePhoneAccess.value === false){
       formData.append("satallitePhoneAccess", this.state.formControls.satallitePhoneAccess.value);
     }
     if(this.state.formControls.callOutAccess.value === false){
       formData.append("callOutAccess", this.state.formControls.callOutAccess.value);
     }
     if(this.state.formControls.afterHoursAccess.value === false){
       formData.append("afterHoursAccess", this.state.formControls.afterHoursAccess.value);
     }
     */
     if(this.state.formControls.gpsAccess.value === false){
       formData.append("gpsAccess", this.state.formControls.gpsAccess.value);
     }
     if(this.state.formControls.groundTentAccess.value === false){
       formData.append("groundTentAccess", this.state.formControls.groundTentAccess.value);
     }
     if(this.state.formControls.cleaningAccess.value === false){
       formData.append("cleaningAccess", this.state.formControls.cleaningAccess.value);
     }
     formData.append("period", this.state.formControls.period.value);

     for (var pair of formData.entries()) {
        //console.log(pair[0]+ ', ' + pair[1]);
        info[pair[0]] = pair[1];
      }
      //return console.log('return');

     return axios.post(url, info, config);
   }

   handleSubmit(event) {
     event.preventDefault();
/*
     const formData = new FormData(event.target);
     let period = 0;

     let info = {};
     for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]);
        info[pair[0]] = pair[1];
      }

      period = Math.abs(new Date(info.startDate) - new Date(info.endDate))/86400000;
      console.log(period);
      if(period > 24){
        console.log("> 25");
      }else if (period > 15) {
        console.log("> 16 < 25");
      }else if (period > 7) {
        console.log(">8 < 16");
      }else if (period > 2) {
        console.log("> 3 < 8");
      }else{
        console.log("> 3");
      }
*/
      //console.log("today is "+today + " \n start date is "+Date.parse(info.startDate.split("-")));

     if(this.validate()){
       //console.log(this.state.formControls);
       this.postForm(event.target)
       .then((res)=>{
         console.log(res);
         this.setState({msg: res.data.msg})
       })
       .catch((err)=>{
         console.log(err);
       })
     }
   }
   validate(){
     let input = this.state.input;
     let errors = {};
     let isValid = true;
     if (!input["firstName"]){
       isValid = false;
       errors["firstName"] = "Please enter your first name.";
     }
     if (!input["lastName"]){
       isValid = false;
       errors["lastName"] = "Please enter your last name.";
     }
     if (!input["identification"]){
       isValid = false;
       errors["identification"] = "Please enter your identification number.";
     }
     if (!input["email"]){
       isValid = false;
       errors["email"] = "Please enter your email.";
     }
     if(typeof input["email"] !== "undefined"){
       var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
       if(!pattern.test(input["email"])){
         isValid = false;
         errors["email"] = "Please enter a valid email address.";
       }
     }
     if (!input["country"]){
       isValid = false;
       errors["country"] = "Please enter the country your from.";
     }
     if (!input["city"]){
       isValid = false;
       errors["city"] = "Please enter the city your from.";
     }
     if (!input["zip"]){
       isValid = false;
       errors["zip"] = "Please enter the zip code of your city.";
     }
     if (!input["physicalAddress"]){
       isValid = false;
       errors["physicalAddress"] = "Please enter your physical address.";
     }

     if(this.state.formControls.period.value === 0){
       isValid = false;
       errors["endDate"] = "Please enter valid dates";
     }
     if(this.state.formControls.termsConditions.value === false){
       isValid=false;
       errors["termsConditions"] = "Please read and accept terms and conditions in order to submit reservation."
     }

     this.setState({
       errors: errors
     });
     if(isValid === false){
       alert("Please check form for any errors in the form")
     }
     return isValid;
   }
   equipmentTotal = () =>{
     if(this.state.formControls.selectedEquipment.value === "Unequiped"){
       return this.state.unequiped.[this.state.formControls.selectedPeriod.value]
     }else if (this.state.formControls.selectedEquipment.value === "2 Pax") {
       return this.state.pax2.[this.state.formControls.selectedPeriod.value]
     }else if (this.state.formControls.selectedEquipment.value === "4 Pax") {
       return this.state.pax4.[this.state.formControls.selectedPeriod.value]
     }
   }
  render(){
    return(
      <div className="container reservations">
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <h1>Reservations</h1>
          <div className="form-group row">
            <div className="col-md-12"><h2>Personal Details</h2></div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="First name" name="firstName" value={this.state.input.firstName} onChange={this.handleChange}></input>
              <div className="text-danger">{this.state.errors.firstName}</div>
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Last name" name="lastName" value={this.state.input.lastName} onChange={this.handleChange}></input>
              <div className="text-danger">{this.state.errors.lastName}</div>
            </div>
            <div className="col-md-12 py-2">
              <input type="text" className="form-control" placeholder="Identification /Passpport Number" name="identification" value={this.state.input.identification} onChange={this.handleChange}></input>
              <div className="text-danger">{this.state.errors.identification}</div>
            </div>
            <div className="col-md-12">
              <input type="text" className="form-control" placeholder="Email" name="email" value={this.state.input.email} onChange={this.handleChange}></input>
              <div className="text-danger">{this.state.errors.email}</div>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Country" name="country" value={this.state.input.country} onChange={this.handleChange}></input>
            <div className="text-danger">{this.state.errors.country}</div>
            </div>
            <div className="col-md-4">
            <input type="text" className="form-control" placeholder="City" name="city" value={this.state.input.city} onChange={this.handleChange}></input>
            <div className="text-danger">{this.state.errors.city}</div>
            </div>
            <div className="col-md-2">
            <input type="text" className="form-control" placeholder="Zip" name="zip" value={this.state.input.zip} onChange={this.handleChange}></input>
            <div className="text-danger">{this.state.errors.zip}</div>
            </div>
            <div className="col-md-12 py-2">
            <input type="text" className="form-control" placeholder="Physical Address" name="physicalAddress" value={this.state.input.physicalAddress} onChange={this.handleChange}></input>
            <div className="text-danger">{this.state.errors.physicalAddress}</div>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-md-12"><h2>Booking Details</h2></div>
            <div className="col-md-6">
            <small htmlFor="startDate">From Date:</small>
            <input type="date" className="form-control" id="start-data" name="startDate" onChange={this.handleDates} value={this.state.formControls.startDate.value}></input>
            </div>
            <div className="col-md-6">
            <small htmlFor="endDate" >To Date:</small>
            <input type="date" className="form-control" id="end-data" name="endDate" onChange={this.handleDates} value={this.state.formControls.endDate.value}></input>
            <div className="text-danger">{this.state.errors.endDate}</div>
            </div>

          </div>

          <div className="form-group row">
            {
              this.state.formControls.period.value === 0 ?
              <div></div>
              :
              <div className="col-md-12">
              <small>Season</small>
              {/*
              <select id="season" className="form-control" name="selectedSeason" value="this.state.formControls.selectedSeason.value" onChange={this.handleChange}>
                {this.state.seasons.value.map((e, i)=>{
                  return <option key={i}>{e}</option>
                })}
              </select>
              */}
              <select className="form-control" value={this.state.formControls.selectedSeason.value} name="selectedSeason" onChange={this.handleChange}>
                {this.state.seasons.map((season, i) => (
                  <option key={i} value={season.value}>{season.label}</option>
                ))}
              </select>
              </div>
            }

            <div className="col-12 py-2">
              <small>Period</small>
            </div>
            <div className="col-md-4 col py-4">

            {/*
            <select id="season" className="form-control" name="selectedPeriod" value="this.state.formControls.selectedPeriod.value" onChange={this.handleChange}>
              <option>3-7 Days</option>
              <option>8-15 Days</option>
              <option>16-24 Days</option>
              <option>25 Days</option>
            </select>

            <select className="form-control" value={this.state.formControls.selectedPeriod.value} name="selectedPeriod" onChange={this.handleChange}>
              {this.state.periods.map((period, i)=>(
                <option key={i} value={period.value}>{period.label}</option>
              ))}
            </select>
            */}
            <div className="">
              {this.state.formControls.period.value+ " Days"}
            </div>
            </div>
            <div className="col-md-4 col py-4 pr-4" align="right">
            {/*(this.state.formControls.selectedSeason.value == "Low Season") ? "L" : "P" */}
            P {
              this.state.formControls.period.value === 0 ?
              (0).toFixed(2)
              :
              (this.state.period.[this.state.formControls.selectedPeriod.value] + this.state.season.[this.state.formControls.selectedSeason.value]).toFixed(2)
              }
            </div>
            <div className="col-md-12 py-2">
              <div className="col-12 py-2">
                <small>Equipment</small>
              </div>
              <div className="row">
                <div className="col-md-8 col">
                {/*
                <select id="insurance" className="form-control">
                  <option selected>Unequiped</option>
                  <option>2 Pax</option>
                  <option>4 Pax</option>
                </select>
                */}
                <select className="form-control" value={this.state.formControls.selectedEquipment.value} name="selectedEquipment" onChange={this.handleChange}>
                  {this.state.equipments.map((equipment,i)=>(
                    <option key={i} value={equipment.value}>{equipment.label}</option>
                  ))}
                </select>
                </div>
                <div className="col-md col py-1 pr-4" align="right">
                  P {
                    this.state.formControls.period.value === 0 ?
                    (0).toFixed(2)
                    :
                    (this.equipmentTotal()).toFixed(2)
                  }
                </div>
              </div>
            </div>
            <div className="col-md-12 py-2">
              <div className="col-12 py-2">
                <small>Insurance</small>
              </div>
              <div className="row">
                <div className="col-md-8 col">
                {/*
                <select id="insurance" className="form-control" name="selectedInsurance" value="this.state.insurance">
                  <option>Standard Insurance Excess</option>
                  <option>Reduced Insurance Excess</option>
                  <option>Max Insurance Excess</option>
                </select>
                */}
                <select className="form-control" value={this.state.formControls.selectedInsurance.value} name="selectedInsurance" onChange={this.handleChange}>
                  {this.state.insurances.map((insurance, i)=>(
                    <option key={i} value={insurance.value}>{insurance.label}</option>
                  ))}
                </select>
                </div>
                <div className="col-md col pr-4" align="right">
                  Deposite =
                  P {
                    this.state.formControls.period.value === 0 ?
                    (0).toFixed(2)
                    :
                    (this.state.insurance.[this.state.formControls.selectedInsurance.value]).toFixed(2)
                    }
                  <br/>
                  Per day = P {(this.state.insuranceMultiplier.[this.state.formControls.selectedInsurance.value]).toFixed(2)}
                </div>
              </div>
            </div>
            <div className="col-md-12 py-2">
              <div className="col-12 py-2">
                <small>Collection and Drop off</small>
              </div>
              <div className="row">
                <div className="col-md-8 col">

                {/*
                <select id="insurance" className="form-control">
                  <option>Maun</option>
                  <option>Kasane</option>
                  <option>Gaborone</option>
                  <option>Bulawayo</option>
                  <option>Francistown</option>
                  <option>Harare</option>
                  <option>Livinstone</option>
                  <option>Victoria Falls</option>
                  <option>Windhoek</option>
                </select>
                */}
                <select className="form-control" value={this.state.formControls.selectedLocation.value} name="selectedLocation" onChange={this.handleChange}>
                  {this.state.locations.map((location, i) =>(
                    <option key={i} value={location.value}>{location.label}</option>
                  ))}
                </select>
                </div>
                <div className="col-md col py-4 pr-4" align="right">
                  P {(this.state.location.[this.state.formControls.selectedLocation.value]).toFixed(2)}
                </div>
              </div>
            </div>
            <div className="col-md-12 py-2">
              <div><h2>Accessories and Extras</h2></div>
            </div>
            <div className="col-md-12 py-2">
              <div className="row">
                <div className="col-md-8 col-8 pl-5" align="left">
                <input className="form-check-input py-2" type="checkbox" id="item-2" name="gpsAccess" value={this.state.formControls.gpsAccess.value} onChange={this.handleToggle}></input>
                <label className="form-check-label" htmlFor="item-2">GPS**</label>
                </div>
                <div className="col-md col pr-4" align="right">
                P 200.00
                </div>
              </div>
            </div>
            <div className="col-md-12 py-2">
              <div className="row">
                <div className="col-md-8 col-8 pl-5" align="left">
                <input className="form-check-input py-2" type="checkbox" id="item-3" name="groundTentAccess" value={this.state.formControls.groundTentAccess.value} onChange={this.handleToggle}></input>
                <label className="form-check-label" htmlFor="item-3">Ground tent P 50.00 per day</label>
                </div>
                <div className="col-md-4 col pr-4" align="right">
                  P {this.state.formControls.period.value*50.00} (!RV)
                </div>
              </div>
            </div>
            <div className="col-md-12 py-2">
              <div className="row">
                <div className="col-md-8 col-8 pl-5" align="left">
                <input className="form-check-input py-2" type="checkbox" id="item-6" name="cleaningAccess" value={this.state.formControls.cleaningAccess.value} onChange={this.handleToggle}></input>
                <label className="form-check-label" htmlFor="item-6">Cleaning fee</label>
                </div>
                <div className="col-md col pr-4" align="right">
                P 350.00
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className=" container-fluid row total" >
                <div className="col-md-8 col">
                  <p className="text-right">Total:</p>
                </div>
                <div className="col-md-4 col">
                  <p className="text-center">P
                    {
                      this.state.formControls.period.value === 0 ?
                      (0).toFixed(2)
                      :

                      (
                        this.state.period.[this.state.formControls.selectedPeriod.value] + this.state.season.[this.state.formControls.selectedSeason.value]+
                        this.equipmentTotal()+
                        this.state.insurance.[this.state.formControls.selectedInsurance.value]+
                        this.state.insuranceMultiplier.[this.state.formControls.selectedInsurance.value]*this.state.formControls.period.value+
                        this.state.location.[this.state.formControls.selectedLocation.value]+
                        (this.state.formControls.gpsAccess.value ? 200.00 : 0.0)+
                        (this.state.formControls.groundTentAccess.value ? this.state.formControls.period.value*50.00 : 0.0)+
                        (this.state.formControls.cleaningAccess.value ? 350.00 : 0.0)
                      ).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>GPS is pre-loaded with comprehensive Tracks for Africa maps.<br/> GPS is charged per trip. <br/> After hours fee is <b>P600.00</b>.<br/> Satallite phone is provided by a third party.<br/> Call out rate is charged at <b>P20.00</b> per kilometer from Maun.</p>
            <p><b>Additional Notes:</b></p>
            <p>Comprehensive vehicle handovers are only offered in Maun</p>
            <div className="row">
              <div className="col-6">
                <input className="form-check-input py-2" type="checkbox" id="item-4" name="termsConditions" value={this.state.formControls.groundTentAccess.value} onChange={this.handleToggle}></input>
                <label className="form-check-label" htmlFor="item-4">Terms and Conditions</label>
              </div>
            </div>
            <div className="text-danger">{this.state.errors.termsConditions}</div>
            <p align="right" type="button" className="btn"  data-toggle="modal" data-target="#termsConditions">
              Terms and Conditions
            </p>
          </div>
          <input type="submit" value="Submit"  className="btn" style={{backgroundColor:"green",width:"50%",marginBottom:"20px"}}/>
          {
            this.state.msg ?
            <div className={this.state.msg.param}>{this.state.msg.text}</div>
            :
            <div></div>
          }
        </form>


        <div className="modal fade" id="termsConditions" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Terms and Conditions</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Reservations;
