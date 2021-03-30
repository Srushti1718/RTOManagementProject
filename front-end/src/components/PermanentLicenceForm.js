import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ApiService from '../services/ApiService';
import Footer from './Footer';
import Header from './Header';

class PermanentLicenceForm extends Component {


  constructor(props) {
    super(props)

        this.state = {
          email : this.props.match.params.email,
            licenceData : {},
                
    
    }
    console.log(this.state.email);
    
    this.savePermanentLicence = this.savePermanentLicence.bind(this);
    
  }
  componentDidMount() {
    ApiService.fetchLearningLicenceByEmail(this.state.email).then( res => {
        this.setState( { licenceData : res.data });
        console.log({licenceData : res.data});
    });
  
  }

  onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

  savePermanentLicence = (e) => {
    e.preventDefault();
    let permanentLicence = {
      firstName: this.state.licenceData.firstName, middleName: this.state.licenceData.middleName, lastName: this.state.licenceData.lastName,
      relativeFirstName: this.state.licenceData.relativeFirstName, relativeMiddleName: this.state.licenceData.relativeMiddleName, relativeLastName: this.state.licenceData.relativeLastName,
      fullName: this.state.licenceData.fullName,
      gender: this.state.licenceData.gender,
      countryOfBirth: this.state.licenceData.countryOfBirth, placeOfBirth: this.state.licenceData.placeOfBirth, 
      age: this.state.licenceData.age,
      bloodgroup: this.state.licenceData.bloodgroup,
      email: this.state.licenceData.email,
      qualification: this.state.licenceData.qualification,
      phoneNumberOne: this.state.licenceData.phoneNumberOne, phonenumberTwo: this.state.licenceData.phonenumberTwo,
      identificationMarkOne: this.state.licenceData.identificationMarkOne, identificationMarkTwo: this.state.licenceData.identificationMarkTwo,
      presentAddress: this.state.licenceData.presentAddress, permanentAddress: this.state.licenceData.permanentAddress
     
    }
    
    console.log('permanentLicence => ' + JSON.stringify(permanentLicence));

    ApiService.createpermanentLicence(permanentLicence).then(res => {
      res.data.result != null && alert("Added Application successfully");
      if (res.data.result === null) {
        alert("Application Failed...............");
        this.setState({
          firstName: '', middleName: '', lasrName: '',
         relativeFirstName: '', relativeMiddleName: '', relativeLastName: '',
          fullName: '',
          gender: '',
          countryOfBirth: '', placeOfBirth: '',
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

  render() {
    return (
      <div className="licence">
         <Header />
        <div className="card col-12 col-lg-6 container-login mt-2 mx-auto hv-center">
        <Button outline block color="primary" className="mt-2 mb-2">Permanent Licence Application</Button>
          <form className="form-horizontal" onClick={this.saveLl}>

            <input type="hidden" name="id" value="${user.id }" />

            <div className="form-group text-left">
              <Label for="name">Name of the Applicant : </Label>
              <Input type="text" name="firstName" id="firstName" placeholder="First Name"  Value={this.state.licenceData.firstName} readOnly/>&nbsp;&nbsp;
           
              <Input type="text" name="middleName" id="middleName" placeholder="Middle Name" Value={this.state.licenceData.middleName} onChange={this.onChange} readOnly/> &nbsp;&nbsp;
             
              <Input type="text" name="lasrName" id="lastName" placeholder="Last Name" Value={this.state.licenceData.lastName} readOnly/>
            </div>

            <div className="form-group text-left">
              <Label for="relative">Relative's Name : </Label>
 
                
              <Input type="text" name="relativeFirstName" id="relativeFirstName" placeholder="First Name" defaultValue={this.state.licenceData.relativeFirstName} readOnly/>&nbsp;&nbsp;
              <Input type="text" name="relativeMiddleName" id="relativeMiddleName" placeholder="Middle Name" defaultValue={this.state.licenceData.relativeMiddleName} readOnly/>&nbsp;&nbsp;
              <Input type="text" name="relativeLastName" id="relativeLastName" placeholder="Last Name" defaultValue={this.state.licenceData.relativeLastName} readOnly/>
            </div>

            

            <div className="form-group text-left">
              <label>Gender : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <Input type="text" name="gender" id="gender" defaultValue={this.state.licenceData.gender} readOnly/>
              
            </div>

            <div className="form-group text-left">
              <Label for="countryOfBirth">Country Of Birth : </Label>
              <Input type="text" name="countryOfBirth" id="countryOfBirth" placeholder="As Per Document" defaultValue={this.state.licenceData.countryOfBirth} readOnly/>
            </div>
            <div className="form-group text-left">
              <Label for="placeOfBirth">Place Of Birth : </Label>
              <Input type="text" name="placeOfBirth" id="placeOfBirth" placeholder="As Per Document" defaultValue={this.state.licenceData.placeOfBirth} readOnly/>
            </div>


            <div className="form-group text-left">
              <Label for="age">Age : </Label>
              <input type="text" id="age" name="age" defaultValue={this.state.licenceData.age} readOnly/>

            </div>

            <div className="form-group text-left">
              <Label for="bloodgroup">Blood Group : </Label>
              <Input type="text" name="bloodgroup" id="bloodgroup" placeholder="As Per Document" defaultValue={this.state.licenceData.bloodgroup} readOnly/>
            </div>

            <div className="form-group text-left">
              <Label for="email">Email-ID : </Label>
              <Input type="email" name="email" id="email" placeholder="As Per Document" defaultValue={this.state.licenceData.email} readOnly/>
            </div>
            <div className="form-group text-left">
              <Label for="qualification">Qualification : </Label>
              <Input type="text" name="qualification" id="qualification" placeholder="As Per Document" defaultValue={this.state.licenceData.qualification} readOnly/>
            </div>

            <div className="form-group text-left">
              <Label for="phoneNumberOne">Contact No. 1 : </Label>
              <Input type="text" name="phoneNumberOne" id="phoneNumberOne" placeholder="As Per Document" defaultValue={this.state.licenceData.phoneNumberOne} readOnly/>
            </div>
            <div className="form-group text-left">
              <Label for="phonenumberTwo">Contact No. 2 : </Label>
              <Input type="text" name="phonenumberTwo" id="phonenumberTwo" placeholder="As Per Document" defaultValue={this.state.licenceData.phonenumberTwo} readOnly/>
            </div>

            <div className="form-group text-left">
              <Label for="identificationMarkOne">Identification Mark 1 : </Label>
              <Input type="text" name="identificationMarkOne" id="identificationMarkOne" placeholder="As Per Document" defaultValue={this.state.licenceData.identificationMarkOne} disabled/>
            </div>

            <div className="form-group text-left">
              <Label for="identificationMarkTwo">Identification Mark No. 2 : </Label>
              <Input type="text" name="identificationMarkTwo" id="identificationMarkTwo" placeholder="As Per Document" defaultValue={this.state.licenceData.identificationMarkTwo} readOnly/>
            </div>



            <div className="form-group text-left">
              <Label for="presentAddress">Present Address :</Label>
              <Input type="text" name="presentAddress" id="presentAddress" placeholder="As Per Document" defaultValue={this.state.licenceData.presentAddress} readOnly/>
            </div>

            <div className="form-group text-left">
              <Label for="permanentAddress">Permanent Address : </Label>
              <Input type="text" name="permanentAddress" id="permanentAddress" placeholder="As Per Document" defaultValue={this.state.licenceData.permanentAddress} readOnly/>
            </div>

            <button type="submit" className="btn btn-primary" onClick={this.savePermanentLicence}>
              Submit
          </button>

          </form>
        </div>

      </div>
    );
  }
}

export default PermanentLicenceForm;