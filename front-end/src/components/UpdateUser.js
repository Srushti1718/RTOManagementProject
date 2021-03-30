import React, { Component } from 'react';
import ApiService from '../services/ApiService'
import Footer from './Footer';
import Header from './Header';

class UpdateUser extends Component {


    constructor(props) {
        super(props)

        this.state = {
            id : this.props.match.params.id,
            username : '',
            email : ''
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount() {
        ApiService.getUserById(this.state.id).then( (res) => {
            let user = res.data;
            this.setState({
                username : user.username,
                email : user.email
            });
        });
    }

    updateUser = (e) => {
        e.preventDefault();
        let user = {
            username : this.state.username,
            email : this.state.email
        };
        ApiService.updateUser(user, this.state.id).then( res => {
            this.props.history.push('/admin');
        }); 
    }

    changeNameHandler = (event) => {
        this.setState({username : event.target.value})
    }

    changeEmailHandler = (event) => {
        this.setState({email : event.target.value})
    }

    cancel() {
        this.props.history.push('/admin')
    }


    render() {
        return (
            <div className="admin">
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 mt-5 offset-md-3">
                            <h3 className="text-center">Update User</h3>
                            <div className="card-body">

                                <form>
                                    <div className="form-group">
                                        <label>User Name :</label>
                                        <input placeholder="User Name" name="username" className="form-control"
                                            value={this.state.username} onChange={this.changeNameHandler}  />
                                    </div>

                                    <div className="form-group">
                                        <label>Email :</label>
                                        <input placeholder="Email Id" name="email" className="form-control" 
                                        value={this.state.email} onChange={this.changeEmailHandler}  />
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateUser}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft : "10px"}}>Cancel</button>
                                </form>
                                
                            </div>
                           

                        </div>
                        
                    </div>
                    <a class="btn btn-primary text-center btn-lg button mt-5 ml-2" href="/userServices" role="button"><span>Back To User Services</span></a>
                </div>
                <Footer />
            </div>
        );
    }
}

export default UpdateUser;