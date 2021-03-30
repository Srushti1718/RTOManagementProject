import axios from 'axios';
import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ApiService from '../services/ApiService';
import Header from './Header';
import Footer from './Footer';

class LearningLicenceForm extends Component {

  handleChange_age = (event) => {
    console.log("DOB:", event.target.value);
   
    this.setState({ dateOfBirth: event.target.value }, () => {
      // example of setState callback
      // this will have the latest this.state.dob1
      console.log(this.state.dateOfBirth);
    })

    // call calculate_age with event.target.value
    var age_latest = { age_latest: this.calculate_age(event.target.value) }
    console.log(age_latest);

   
  }

   calculate_age = (dob1) => {
    var today = new Date();
    var birthDate = new Date(dob1);  // create a date object directly from `dob1` argument
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    console.log(age_now);
    this.setState({age: age_now});
    return document.getElementById("age").innerHTML =
      age_now;
  }
 
  constructor(props) {
    super(props);
    this.state = {
      firstName: '', middleName: '', lastName: '',
      relative: '', relativeFirstName: '', relativeMiddleName: '', relativeLastName: '',
      gender: '',
      countryOfBirth: '', placeOfBirth: '', dateOfBirth: '',
      age: '',
      bloodgroup: '',
      email: '',
      qualification: '',
      phoneNumberOne: '', phonenumberTwo: '',
      identificationMarkOne: '', identificationMarkTwo: '',
      presentAddress: '', permanentAddress: '',
      message: null
    };
    this.saveLearningLicence = this.saveLearningLicence.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleChange_age = this.handleChange_age.bind(this);
    this.calculate_age = this.calculate_age.bind(this);
  }

  saveLearningLicence = (e) => {
    e.preventDefault();
    let learningLicence = {
      firstName: this.state.firstName,
      middleName: this.state.middleName,
      lastName: this.state.lastName,
      relative: this.state.relative,
      relativeFirstName: this.state.relativeFirstName,
      relativeMiddleName: this.state.relativeMiddleName,
      relativeLastName: this.state.relativeLastName,
      gender: this.state.gender,
      countryOfBirth: this.state.countryOfBirth,
      placeOfBirth: this.state.placeOfBirth,
      dateOfBirth: this.state.dateOfBirth,
      age: this.state.age,
      bloodgroup: this.state.bloodgroup,
      email: this.state.email,
      qualification: this.state.qualification,
      phoneNumberOne: this.state.phoneNumberOne,
      phonenumberTwo: this.state.phonenumberTwo,
      identificationMarkOne: this.state.identificationMarkOne,
      identificationMarkTwo: this.state.identificationMarkTwo,
      presentAddress: this.state.presentAddress,
      permanentAddress: this.state.permanentAddress,
    };
    console.log('learningLicence => ' + JSON.stringify(learningLicence));

    ApiService.createLearningLicence(learningLicence).then(res => {
      res.data.result != null && alert("Added Application successfully");
      if (res.data.result === null) {
        alert("Application Failed...............");
        this.setState({
          firstName: '', middleName: '', lastName: '',
          relative: '', relativeFirstName: '', relativeMiddleName: '', relativeLastName: '',
          gender: '',
          countryOfBirth: '', placeOfBirth: '', dateOfBirth: '',
          age: '',
          bloodgroup: '',
          email: '',
          qualification: '',
          phoneNumberOne: '', phonenumberTwo: '',
          identificationMarkOne: '', identificationMarkTwo: '',
          presentAddress: '', permanentAddress: ''
        });
        this.props.history.push('/');
      }
      else {
        alert("Applied Successfully....!!!");
        this.props.history.push("/services");
      }

    });

  };


  onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value }, () => {
    
      // this will have the latest this.state.age1
      console.log([e.target.name], e.target.value);
      
    });

 

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state
    if (emailRex.test(e.target.value)) {
      validate.emailState = 'has-success'
    } else {
      validate.emailState = 'has-danger'
    }
    this.setState({ validate })
  }




  render() {
    return (
      <div className="licence">
        <Header />
         
        <div className="card col-12 col-lg-6 container-login mt-2 mx-auto hv-center ">
        <Button outline block color="primary" className="mt-2 mb-2">Learning Licence Application</Button>
          <form inline>

            <input type="hidden" name="id" value="${user.id }" />

            <div className="form-group text-left">
              <Label for="name">Name of the Applicant : </Label>
              <Input type="text" name="firstName" id="firstName" placeholder="First Name" onChange={this.onChange} />
          <Input type="text" name="middleName" id="middleName" placeholder="Middle Name" onChange={this.onChange} /> 
          <Input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={this.onChange} />
            </div>

            <div className="form-group text-left">
              <Label for="relative">Relative : </Label>
              <Input type="select" name="relative" id="relative" placeholder="Relative" onChange={this.onChange} >
                <option>Select Your Relative</option>
                <option>Mother</option>
                <option>Father</option>
                <option>Husband</option>
              </Input>&nbsp;&nbsp;
          <Input type="text" name="relativeFirstName" id="relativeFirstName" placeholder="First Name" onChange={this.onChange} />
          <Input type="text" name="relativeMiddleName" id="relativeMiddleName" placeholder="Middle Name" onChange={this.onChange} />
          <Input type="text" name="relativeLastName" id="relativeLastName" placeholder="Last Name" onChange={this.onChange} />
            </div>

            {/*<div className="form-group text-left">
            <Label for="fullName">Full Name :  </Label>
            <Input type="text" name="fullName" id="fullName" placeholder="As Per Document" onChange={this.onChange} />
        </div>*/}

            <div className="form-group text-left">
              <label>Gender : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <Input type="radio"
                name="gender" value="male"
                checked={this.state.gender === "male"}
                id="gender"
                className="form-check-input"
                onChange={this.onChange} />
              <Label check for="male">
                Male
            </Label>&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Input type="radio"
                name="gender" value="female"
                checked={this.state.gender === "female"}
                id="gender"
                className="form-check-input"
                onChange={this.onChange} />
              <Label check>
                Female
            </Label>&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Input type="radio"
                name="gender" value="transgender"
                checked={this.state.gender === "transgender"}
                id="gender"
                className="form-check-input"
                onChange={this.onChange} />{' '}
              <Label check for="transgender">
                Transgender
            </Label>
            </div>

            <div className="form-group text-left">
              <Label for="countryOfBirth">Country Of Birth : </Label>
              <Input type="text" name="countryOfBirth" id="countryOfBirth" placeholder="As Per Document" onChange={this.onChange} />
            </div>
            <div className="form-group text-left">
              <Label for="placeOfBirth">Place Of Birth : </Label>
              <Input type="text" name="placeOfBirth" id="placeOfBirth" placeholder="As Per Document" onChange={this.onChange} />
            </div>

            <div className="form-group text-left">
              <Label for="dateOfBirth">Date Of Birth : </Label>
              <Input type="date" name="dateOfBirth" id="dateOfBirth" onChange={this.handleChange_age} />

            </div>


            <div className="form-group text-left">
              <Label for="age">Age : </Label>
              <h6 id="age" name="age"></h6>

            </div>

            <div className="form-group text-left">
              <Label for="bloodgroup">Blood Group : </Label>
              <Input type="text" name="bloodgroup" id="bloodgroup" placeholder="As Per Document" onChange={this.onChange} />
            </div>

            <div className="form-group text-left">
              <Label for="email">Email-ID : </Label>
              <Input type="email" name="email" id="email" placeholder="As Per Document" onChange={this.onChange} />
            </div>
            <div className="form-group text-left">
              <Label for="qualification">Qualification : </Label>
              <Input type="text" name="qualification" id="qualification" placeholder="As Per Document" onChange={this.onChange} />
            </div>

            <div className="form-group text-left">
              <Label for="phoneNumberOne">Contact No. 1 : </Label>
              <Input type="text" name="phoneNumberOne" id="phoneNumberOne" placeholder="As Per Document" onChange={this.onChange} />
            </div>
            <div className="form-group text-left">
              <Label for="phonenumberTwo">Contact No. 2 : </Label>
              <Input type="text" name="phonenumberTwo" id="phonenumberTwo" placeholder="As Per Document" onChange={this.onChange} />
            </div>

            <div className="form-group text-left">
              <Label for="identificationMarkOne">Identification Mark 1 : </Label>
              <Input type="text" name="identificationMarkOne" id="identificationMarkOne" placeholder="As Per Document" onChange={this.onChange} />
            </div>

            <div className="form-group text-left">
              <Label for="identificationMarkTwo">Identification Mark No. 2 : </Label>
              <Input type="text" name="identificationMarkTwo" id="identificationMarkTwo" placeholder="As Per Document" onChange={this.onChange} />
            </div>



            <div className="form-group text-left">
              <Label for="presentAddress">Present Address :</Label>
              <Input type="text" name="presentAddress" id="presentAddress" placeholder="As Per Document" onChange={this.onChange} />
            </div>

            <div className="form-group text-left">
              <Label for="permanentAddress">Permanent Address : </Label>
              <Input type="text" name="permanentAddress" id="permanentAddress" placeholder="As Per Document" onChange={this.onChange} />
            </div>

            <button type="submit" className="btn btn-primary " onClick={this.saveLearningLicence}>
              Submit
      </button>

          </form>
        </div>
        
      </div>
    );
  }
}

export default LearningLicenceForm;