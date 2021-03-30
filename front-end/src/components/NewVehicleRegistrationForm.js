import axios from 'axios';
import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ApiService from '../services/ApiService';
import Footer from './Footer';
import Header from './Header';

class NewVehicleRegistrationForm extends Component {


  
  
      constructor(props) {
        super(props);
        this.state = {
         
          typeOfVehicle : '',
          firstName : '',
          middleName :'',
          lastName : '',
          age : '',
          presentAddress : '',
          permanentAddress : '',
          manufacturingMonthYear : '',
          manufacturer : '',
          seatingCapacity : '',
          chassiNo : '',
          engineNo : '',
          model : '',
          colour : '',
          fuel : '',
          registeredUpTo : '',
          insuranceNo : '',
          insuranceUpTo : '',
          insuranceCompany : '',
        }
        this.saveNewVehicleRegistration = this.saveNewVehicleRegistration.bind(this);
        this.onChange = this.onChange.bind(this);
      }
    
      saveNewVehicleRegistration = (e) => {
        e.preventDefault();
        let newVehicle = {
          typeOfVehicle : this.state.typeOfVehicle,
          firstName : this.state.firstName,
          middleName :this.state.middleName,
          lastName : this.state.lastName,
          age : this.state.age,
          presentAddress : this.state.presentAddress,
          permanentAddress : this.state.permanentAddress,
          manufacturingMonthYear : this.state.manufacturingMonthYear,
          manufacturer : this.state.manufacturer,
          seatingCapacity : this.state.seatingCapacity,
          chassiNo : this.state.chassiNo,
          engineNo : this.state.engineNo,
          model : this.state.model,
          colour : this.state.colour,
          fuel : this.state.fuel,
          registeredUpTo : this.state.registeredUpTo,
          insuranceNo : this.state.insuranceNo,
          insuranceUpTo : this.state.insuranceUpTo,
          insuranceCompany : this.state.insuranceCompany,
        };
        console.log('newVehicle => ' + JSON.stringify(newVehicle));

        ApiService.createNewVehicleRegistration(newVehicle).then( res => {
         res.data.result != null && alert("Added Application successfully");
         if(res.data.result === null) {
           alert("Application Failed...............");
           this.setState({
            typeOfVehicle : '',
            firstName : '',
            middleName :'',
            lastName : '',
            age : '',
            presentAddress : '',
            permanentAddress : '',
            manufacturingMonthYear : '',
            manufacturer : '',
            seatingCapacity : '',
            chassiNo : '',
            engineNo : '',
            model : '',
            colour : '',
            fuel : '',
            registeredUpTo : '',
            insuranceNo : '',
            insuranceUpTo : '',
            insuranceCompany : ''
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
                <Button outline color="primary" className="mt-2 mb-2">New Vehicle Registration Application</Button>
        <form inline>

        <div className="form-group text-left">
          <Label for="name">Name of the Applicant : </Label>
          <Input type="text" name="firstName" 
          id="firstName" 
          placeholder="First Name" 
          value={this.state.firstName}
          onChange={this.onChange} />&nbsp;&nbsp;


          <Input type="text" 
          name="middleName" 
          id="middleName" 
          placeholder="Middle Name" 
          value={this.state.middleName}
          onChange={this.onChange} /> &nbsp;&nbsp;

          <Input type="text" 
          name="lastName" 
          id="lastName" 
          placeholder="Last Name" 
          value={this.state.lastName}
          onChange={this.onChange} />
        </div>
        
        <div className="form-group text-left">
          <Label for="age">Age : </Label>
          <Input type="text" 
          name="age" 
          id="age" 
          placeholder="As Per Document"
          value={this.state.age} 
          onChange={this.onChange} />
        </div>

        <div className="form-group text-left">
          <Label for="presentAddress">Present Address :</Label>
          <Input type="text"
           name="presentAddress" 
           id="presentAddress" 
           placeholder="As Per Document" 
           value={this.state.presentAddress}
           onChange={this.onChange} />
        </div>

        <div className="form-group text-left">
          <Label for="permanentAddress">Permanent Address : </Label>
          <Input type="text" 
          name="permanentAddress" 
          id="permanentAddress" 
          placeholder="As Per Document" 
          value={this.state.permanentAddress}
          onChange={this.onChange} />
        </div>

        <div className="form-group text-left">
        <Label for="typeOfVehicle">Select Multiple</Label>
        <Input type="select" 
        name="typeOfVehicle" 
        id="typeOfVehicle" 
        value={this.state.typeOfVehicle}
        onChange={this.onChange} >
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
          <Label for="manufacturingMonthYear">Manufacturing Month Year : </Label>
          <Input type="date" name="manufacturingMonthYear" 
          id="manufacturingMonthYear"
          value={this.state.manufacturingMonthYear} 
          onChange={this.onChange} />

        </div>

        <div className="form-group text-left">
          <Label for="manufacturer">Manufacturer :</Label>
          <Input type="text" name="manufacturer" 
          id="manufacturer" 
          placeholder="manufacturer" 
          value={this.state.manufacturer}
          onChange={this.onChange} />
        </div>

        <div className="form-group text-left">
          <Label for="seatingCapacity">Seating Capacity :</Label>
          <Input type="text" 
          name="seatingCapacity" 
          id="seatingCapacity" 
          placeholder="seatingCapacity" 
          value={this.state.seatingCapacity}
          onChange={this.onChange} />
        </div>

        <div className="form-group text-left">
          <Label for="chassiNo">Chassi No :</Label>
          <Input type="text" 
          name="chassiNo" 
          id="chassiNo" 
          placeholder="chassiNo"
          value={this.state.chassiNo}
          onChange={this.onChange} />
        </div>

        <div className="form-group text-left">
          <Label for="engineNo">Engine No :</Label>
          <Input type="text" 
          name="engineNo" 
          id="engineNo" 
          placeholder="engineNo" 
          value={this.state.engineNo}
          onChange={this.onChange} />
        </div>

        <div className="form-group text-left">
          <Label for="model">Model :</Label>
          <Input type="text" 
          name="model" 
          id="model" 
          placeholder="model"
          value={this.state.model} 
          onChange={this.onChange} />
        </div>

        <div className="form-group text-left">
          <Label for="colour">Colour :</Label>
          <Input type="text" 
          name="colour" 
          id="colour" 
          placeholder="colour"
          value={this.state.colour} 
          onChange={this.onChange} />
        </div>

        <div className="form-group text-left">
          <Label for="fuel">Colour :</Label>
          <Input type="text" 
          name="fuel" 
          id="fuel" 
          placeholder="fuel"
          value={this.state.fuel} 
          onChange={this.onChange} />
        </div>

        <div className="form-group text-left">
          <Label for="registeredUpTo">Registered UpTo </Label>
          <Input type="date" 
          name="registeredUpTo" 
          id="registeredUpTo" 
          vlaue={this.state.registeredUpTo}
          onChange={this.onChange} />

        </div>

        <div className="form-group text-left">
          <Label for="insuranceCompany">Insurance Company :</Label>
          <Input type="text" 
          className = "form-control" 
          name="insuranceCompany" 
          id="insuranceCompany" 
          placeholder="insuranceCompany" 
          value={this.state.insuranceCompany}
          onChange={this.onChange} />
        </div>

        <div className="form-group text-left">
          <Label for="insuranceNo">Insurance Number :</Label>
          <Input type="text" 
          className = "form-control" 
          name="insuranceNo" 
          id="insuranceNo" 
          placeholder="insuranceCompany" 
          value={this.state.insuranceNo}
          onChange={this.onChange} />
        </div>

        <div className="form-group text-left">
          <Label for="insuranceUpTo">Insurance UpTo : </Label>
          <Input type="date" 
          name="manufacturingMonthYear" 
          id="manufacturingMonthYear" 
          value={this.state.manufacturingMonthYear}
          onChange={this.onChange} />

        </div>

        <div>
                <button type="submit" class="btn btn-primary" onClick={this.saveNewVehicleRegistration}>Apply</button>
            </div>
     
   

    </form>
      </div >
     
            </div>
        );
    }
}

export default NewVehicleRegistrationForm;