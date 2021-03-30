import React, { Component } from 'react';
import ApiService from '../services/ApiService';
import Footer from './Footer';
import Header from './Header';

class AdminLogin extends Component {
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

  submitForm = (e) => {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password

    };
    ApiService.fetchUserByLoginrequest(user).then(res => {
      res.data.result != null && alert("Logged in successfully");
      if (res.data.result === null) {
        alert("Logged in Failed...............");
        this.setState({
          email: '', password: ''
        });
        this.props.history.push('/home');
      }
      else {
        alert("Logged in successfully");
        this.props.history.push("/adminServices");
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
    
          <div className="bgimg-1 wrapper fadeInDown">
            <h2 className="text-center ">
            Admin LogIn
          </h2>
         
                  <div className="card col-12 col-lg-5 login-card mt-2 text-center mx-auto">
        <form>
        <small  className="form-text text-muted">This is an admin Page. Ony Authorise people can use this</small>
          
          <div className="form-group text-left mt-5">
            <label htmlFor="email">Email address</label>
            <input type="email" required className="form-control" name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleUserInput}
            />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group text-left">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleUserInput}
            />
          </div>


          <div>
            <button type="submit" className="btn btn-primary" onClick={this.submitForm}>Log in</button>
          </div>


        </form>
            </div>
           
        </div>
      
            );
  }
}

export default AdminLogin;