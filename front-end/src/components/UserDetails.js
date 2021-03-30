import React, { Component } from 'react';
import ApiService from '../services/ApiService'
import Footer from './Footer';
import Header from './Header';
import {Card} from 'reactstrap';

class UserDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id : this.props.match.params.id,
            user : {}
            
        }
        //console.log('user => ' + JSON.stringify(user));
    }

    componentDidMount() {
        ApiService.getUserById(this.state.id).then( res => {
            this.setState( { user : res.data });
            
        });
    }

    render() {
        return (
            <div className='admin'>
                <Header />
                {console.log(this.state.user.username,this.state.user.email,this.state.user)}
             
                <Card body inverse className="text-center mx-auto col-12 col-lg-5 mt-5" style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <h3 className="text-center">View User Details</h3>
                    <div className="card-body">
                        <div className = "row">
                            <label> User Name: </label>
                            <div className = "col"> { this.state.user.username } </div>
                        </div>

                        <div className = "row">
                            <label> Email Id: </label>
                            <div className = "col"> { this.state.user.email } </div>
                        </div>
                    </div>


               </Card>
               <a class="btn btn-primary text-center btn-lg button mt-5 ml-5" href="/userServices" role="button"><span>Back To User Services</span></a>
              
                <Footer />
            </div>
        );
    }
}

export default UserDetails;