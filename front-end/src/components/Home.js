import React, { Component } from 'react';
import { Card, CardBody,CardSubtitle,CardText,CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';
import Header from './Header';

class Home extends Component {
    render() {
        return (
            
            <div className="home">
<Header />
<div>
<Card className="text-center mx-auto col-12 col-lg-6 mt-5">
    <CardTitle>Online RTO Management System</CardTitle>
                        <CardBody>
                            
                            <CardSubtitle className="font-weight-bold">  </CardSubtitle>
                            <CardText>
                                <small id="description" className="form-text text-muted">
                               <p>RTO Management System is an online information source developed for Road Transport Authority to facilitate the users in applying for various licenses and registrations. This tool has been designed to facilitate the flow of information within the organization. 
                                   RTO Management System provides the facility of applying licenses online, issuance of permanent license, registration of vehicle.</p>

<p>In the Previous System It is not efficient in performing office work in RTO services, It includes much manual process and time consuming, It is not user friendly, Maintains local data base.</p>

<p>To overcome problems in the existing System a new RTO services RTO Management System is proposed after study of system. The objectives of proposed system are: Ensure data integrity and security, less manpower, Accurate handling in multiple details.</p> 

<p>A website basically built to issue driving license to citizens. Citizens can apply for learner’s license, driving license, vehicle registration and monitor the status of application. Citizens can also submit complaints or queries.</p>

<p>From an end-user perspective, the RTO Management System Project consists of four functional elements : Vehicle Registration Module, License Module, Report Module, and Security Module.
</p> 
                        </small>
                            </CardText>
                            </CardBody>
                            </Card>
  
                
</div>

            </div>
        );
    }
}

export default Home;