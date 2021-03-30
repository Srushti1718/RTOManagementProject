import React, { Component } from 'react';
import ApiService from '../services/ApiService';
import { FormErrors } from './FormErrors';
import { Link } from 'react-router-dom';

class RegistrationForm extends Component {

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      userName: '',
            formErrors: { email: '', password: '', userName: '', },
      emailValid: false,
      passwordValid: false,
      
      formValid: false
    }
  }

  

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
  


    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is in not in appropriate format';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' value should be greater than 6!!';
        break;
        
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                    
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }
      saveUser = (e) => {
        e.preventDefault();
        let user = { 
          username : this.state.username,
          email : this.state.email,
          password : this.state.password
         };
         console.log('user => ' + JSON.stringify(user));

         ApiService.createRegistrationForm(user).then( res => {
          res.data.result != null && alert("SignUp successfully");
          if(res.data.result === null) {
            alert("SignUp Failed...............");
            this.setState({
              username : '', email : '', password : ''
            });
            this.props.history.push('/');
          } 
          else {
            this.props.history.push("/login");
          }
           
         });
      } 


    render() {
        return (
            <div className="bgimg-1 wrapper fadeInDown">
 <div className="card col-12 col-lg-6 container-login mt-2 ml-2 mr-2 mx-auto hv-center">
<form>
          
         
        
        

        <h2>Sign up</h2>
        <div className="form-group text-left">
            <label htmlFor="username">User name</label>
            <input type="name" required className="form-control" 
              name="username"
              placeholder="User Name"
              value={this.state.username}
              onChange={this.handleUserInput}  />
          </div>
          
          <div className="form-group text-left">
            <label htmlFor="email">Email address</label>
            <input type="email" required className="form-control" name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleUserInput}  />
          </div>
          
          <div className="form-group text-left">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleUserInput}  />
          </div>
          <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
          <div>
          <button type="submit" className="btn btn-primary" disabled={!this.state.formValid} onClick={this.saveUser}>Sign up</button>
          </div>
          
          <div>
        Already have an account? 
            <Link  tag="a" to="/home/registrationForm/login">Login Here</Link>
       </div>
      </form>
                
            </div>
            </div>
        );
    }
}

export default RegistrationForm;