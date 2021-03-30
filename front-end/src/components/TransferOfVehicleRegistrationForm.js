import axios from 'axios';
import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ApiService from '../services/ApiService';
import Header from './Header';
import Footer from './Footer';



class TransferOfVehicleRegistrationForm extends Component {



  constructor(props) {
    super(props);
    this.state = {
        typeOfVehicle : '',
        firstName : '',
        middleName :'',
        lastName : '',
        fullName : '',
        age : '',
        nameOfPrevOwner : '',
        permanentAddress : '',
        dateOfPurchase : '',
        manufacturer : '',
        seatingCapacity : '',
        chassiNo : '',
        engineNo : '',
        model : '',
        colour : '',
        fuel : '',
        prevRegisteredNo : '',
        addressOfPrevOwner : '',
    }
    this.saveTVR = this.saveTVR.bind(this);
  }

  saveTVR = (e) => {
    console.log("in function");
    e.preventDefault();
    let newVehicle = {
      typeOfVehicle : this.state.typeOfVehicle,
      firstName : this.state.firstName,
      middleName :this.state. middleName,
      lastName : this.state.lastName,
      fullName : this.state.fullName,
      age : this.state.age,
      nameOfPrevOwner : this.state.nameOfPrevOwner,
      permanentAddress : this.state.permanentAddress,
      dateOfPurchase : this.state.dateOfPurchase,
      manufacturer : this.state.manufacturer,
      seatingCapacity : this.state.seatingCapacity,
      chassiNo : this.state.chassiNo,
      engineNo : this.state.engineNo,
      model : this.state.model,
      colour : this.state.colour,
      fuel : this.state.fuel,
      prevRegisteredNo : this.state.prevRegisteredNo,
      addressOfPrevOwner : this.state.addressOfPrevOwner,
    };
    console.log('newVehicle => ' + JSON.stringify(newVehicle));
    ApiService. createTransferOfVehicle(newVehicle).then( res => {
      res.data.result != null && alert("Added Application successfully");
      if(res.data.result === null) {
        alert("Application Failed...............");
        this.setState({
          typeOfVehicle : '',
          firstName : '',
          middleName :'',
          lastName : '',
          fullName : '',
          age : '',
          nameOfPrevOwner : '',
          permanentAddress : '',
          dateOfPurchase : '',
          manufacturer : '',
          seatingCapacity : '',
          chassiNo : '',
          engineNo : '',
          model : '',
          colour : '',
          fuel : '',
          prevRegisteredNo : '',
          addressOfPrevOwner : ''
        });
        this.props.history.push('/');
      } 
      else {
       alert("Applied Successfully....!!!");
        this.props.history.push("/services");
       }
        
     });
  } 

  onChange = (e) =>
  this.setState({ [e.target.name]: e.target.value }, () => {
    // this will have the latest this.state.age1
    console.log(e.target.value);
  })

  render() {

    return (
<div className="vehicle">
<Header />
      <div className="card col-12 col-lg-6 container-login mt-2 hv-center mx-auto">
      <Button outline block color="primary" className="mt-2 mb-2">Transfer Of Vehicle Application</Button>
        <form inline>

        <div className="form-group text-left">
          <Label for="name">Name of the Applicant : </Label>
          <Input type="text" name="firstName" id="firstName" placeholder="First Name" onChange={this.onChange} required />&nbsp;&nbsp;
          <Input type="text" name="middleName" id="middleName" placeholder="Middle Name" onChange={this.onChange} required /> &nbsp;&nbsp;
          <Input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={this.onChange} required />
        </div>

        <div className="form-group text-left">
          <Label for="fullName">Full Name :  </Label>
          <Input type="text" name="fullName" id="fullName" placeholder="As Per Document" onChange={this.onChange} required />
        </div>

        <div className="form-group text-left">
          <Label for="age">Age of person to be registered as registered owner : </Label>
          <Input type="text" name="age" id="age" placeholder="As Per Document" onChange={this.onChange} required />
        </div>

        <div className="form-group text-left">
          <Label for="nameOfPrevOwner">Name of the person from whom the vehicle is purchased :  </Label>
          <Input type="text" name="nameOfPrevOwner" id="nameOfPrevOwner" required placeholder="Name of the person from whom the vehicle is purchased" onChange={this.onChange} />
        </div>

        <div className="form-group text-left">
          <Label for="addressOfPrevOwner">Address of the person from whom the vehicle is purchasedAddress :</Label>
          <Input type="text" name="addressOfPrevOwner" id="addressOfPrevOwner" required placeholder="Address of the person from whom the vehicle is purchasedAddress" onChange={this.onChange} />
        </div>

        <div className="form-group text-left">
          <Label for="dateOfPurchase"> Date Of Purchase : </Label>
          <Input type="date" name="dateOfPurchase" id="dateOfPurchase" onChange={this.onChange} required />

        </div>

        <div className="form-group text-left">
        <Label for="typeOfVehicle">Type Of Vehicle : </Label>
        <Input type="select" name="typeOfVehicle" id="typeOfVehicle" onChange={this.onChange} required >
          <option>MCWOG</option>
          <option>MCWG</option>
          <option>LMV</option>
          <option>3W-NT</option>
          <option>TRCTOR</option>
          <option>LMV-TR</option>
          <option>3W-TR</option>
          <option>TRANS</option>
          <option>INVCRG</option>
          <option>RDRLR</option>
          <option>LMV-TT</option>
          <option>OTHVEH</option>
          <option>MCWOGT</option>
          <option>MCWGT</option>
          <option>LMVPVT</option>
          <option>PSVBUS</option>
          <option>PVTBUS</option>
          <option>LDRXCV</option>
          <option>CRANE</option>
          <option>FLIFT</option>
          <option>BRIGS</option>
          <option>CNEQP</option>
          <option>INVCG2</option>
          <option>INVCG3</option>
        </Input>
        </div>

        

        <div className="form-group text-left">
          <Label for="manufacturer">Manufacturer :</Label>
          <Input type="text" name="manufacturer" id="manufacturer" placeholder="manufacturer" onChange={this.onChange} required />
        </div>

        <div className="form-group text-left">
          <Label for="seatingCapacity">Seating Capacity :</Label>
          <Input type="text" name="seatingCapacity" id="seatingCapacity" placeholder="seatingCapacity" onChange={this.onChange} required />
        </div>

        <div className="form-group text-left">
          <Label for="chassiNo">Chassi No :</Label>
          <Input type="text" name="chassiNo" id="chassiNo" placeholder="chassiNo" onChange={this.onChange} required />
        </div>

        <div className="form-group text-left">
          <Label for="engineNo">Engine No :</Label>
          <Input type="text" name="engineNo" id="engineNo" placeholder="engineNo" onChange={this.onChange} required />
        </div>

        <div className="form-group text-left">
          <Label for="model">Model :</Label>
          <Input type="text" name="model" id="model" placeholder="model" onChange={this.onChange} required />
        </div>

        <div className="form-group text-left">
          <Label for="colour">Colour :</Label>
          <Input type="text" name="colour" id="colour" placeholder="colour" onChange={this.onChange} required />
        </div>

        <div className="form-group text-left">
          <Label for="fuel">Fuel :</Label>
          <Input type="text" name="fuel" id="fuel" placeholder="fuel" onChange={this.onChange} required />
        </div>

        <div className="form-group text-left">
          <Label for="prevRegisteredNo">Particulars of previous registration and registered number (if any) : </Label>
          <Input type="text" name="prevRegisteredNo" id="prevRegisteredNo" onChange={this.onChange} required />

        </div>

        <div className="form-group text-left">
          <Label for="permanentAddress">Permanent Address : </Label>
          <Input type="text" name="permanentAddress" id="permanentAddress" placeholder="As Per Document" onChange={this.onChange} required />
        </div>

        <div>
                <button type="submit" class="btn btn-primary" onClick={this.saveTVR}>Apply</button>
            </div>
     
   

    </form>
    </div >
  
      
      </div>
    );
  }


}

export default TransferOfVehicleRegistrationForm;


