import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { FormErrors } from './FormErrors';
import { Link } from 'react-router-dom';
import ApiService from '../services/ApiService';
import Header from './Header';
import Footer from './Footer';

class PermanentLicenceLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',

      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,

      formValid: false
    }
  }

  componentDidMount() {
    let userInput = {
      email : this.state.email,
     
    
   
};
    ApiService.fetchLicenceByLoginrequest(userInput).then( res => {
        this.setState( { userInput : res.data });
    });
  }

  submitForm(e) {
   
    let user = {
      email: this.state.email,
     

    };
    ApiService.fetchLicenceByLoginrequest(user).then(res => {
      res.data.result != null && alert("Logged in successfully");
      if (res.data.result === null) {
        alert("Logged in Failed...............");
        this.setState({
          email: '', password: ''
        });
        this.props.history.push('/home');
      }
      else {
        this.props.history.push(`/services/permanentLicencelogin/permanentLicenceForm/${user.email}`);
      }

    });
   
     
  
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;


    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is not matched!!';
        break;

      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid,

    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }
  render() {
  return (
    <div className="licence1">
      <Header />
      <div className="card col-12 col-lg-6 login-card mt-5 hv-center mx-auto">
      <Button outline block color="primary" className="mt-2 mb-2 ">Permanent Licence Login</Button>
      <form>
          <div>
          <small id="help" className="form-text text-muted">
            <p>Note : If you want to apply for permanent licence you should have learning licence.
                Please enter following credentials.</p>
             </small>
          </div>
          <div className="form-group text-left">
            <label htmlFor="email">Email address</label>
            <input type="email" required className="form-control" name="email"
              placeholder="Email"
              value={this.state.email}
            onChange={this.handleUserInput}
          />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
     


        <div>
          {console.log(this.state.email)}
          <button type="submit" className="btn btn-primary" onClick={this.submitForm(this.state.email)}>Apply</button>
        </div>

      </form>
      </div>
      
    </div>
    
  )
}
}

export default PermanentLicenceLoginForm;



