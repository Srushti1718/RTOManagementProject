import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from "reactstrap";
import Header from './Header';

class Service extends Component {
    render() {
        return (
            <div className="services">
                <Header />
                <div>
                    <Card className="text-center mx-auto col-12 col-lg-8 mt-5 ">
                        <CardBody>
                            <CardSubtitle className="font-weight-bold"> License Services </CardSubtitle>
                            <CardText>
                                <small id="description" className="form-text text-muted"><p>Any person after completion 18 years is eligible to apply for a Driving license (Learner/Permanent).&nbsp;<br />
     Any person after attaining the age of 16 yrs is eligible to apply for license for motorcycle without gear engine capacity not exceeding 50cc with written consent of parent/guardian.<br />
     The eligible age to apply for license to drive a transport vehicle in any public place is 20 yrs. No person shall be granted a learner&rsquo;s license&nbsp;to drive a transport vehicle unless he has held a driving license&nbsp;to drive a light motor vehicle for at least one year.
     </p>
                                </small>
                            </CardText>
                            <Container className="text-center">
                                <ListGroup horizontal>
                                    <Link className="list-group-item list-group-item-action list-group-item-info mr-5" tag="a" to="/services/learningLicence">Learning Licence</Link>
                                    <Link className="list-group-item list-group-item-action list-group-item-info ml-5" tag="a" to="/services/permanentLicencelogin">Permanent Licence</Link>
                                </ListGroup>

                            </Container>
                        </CardBody>
                    </Card>
                    <Card className="text-center mx-auto col-12 col-lg-8 mt-5">
                        <CardBody>
                            <CardSubtitle className="font-weight-bold"> Vehicle Registration Services </CardSubtitle>
                            <CardText>
                                <small id="description" className="form-text text-muted">
                               <p>The Regional Transport Office (RTO) is responsible for registering and keeping track of every vehicle that runs on the roads of India. 
                                Each state has its own RTO that offers citizens a wide range of services related to their vehicles. 
                                One of the most important services offered by the RTOs is vehicle registration. 
                                You need to register your vehicle with the respective RTO of your state after buying it. 
                                Here, you can check the vehicle registration process with RTO in India in detail.</p> 
                        </small>
                            </CardText>
                            <Container className="text-center">

                                <ListGroup horizontal>
                                    <Link className="list-group-item list-group-item-action list-group-item-info mr-5" tag="a" to="/services/newVehicle">New Vehicle Registration</Link>
                                    <Link className="list-group-item list-group-item-action list-group-item-info ml-5" tag="a" to="/services/treansferOfVehicle">Transfer Of Vehicle Registration</Link>
                                </ListGroup>
                            </Container>
                        </CardBody>
                    </Card>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Service;