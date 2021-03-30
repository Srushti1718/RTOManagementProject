import React, { Component } from 'react';
import { CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    Container
} from "reactstrap";
import Footer from './Footer';
import Header from './Header';

class AdminServices extends Component {
    render() {
        return (
            <div className="admin">
                <Header />
                 <div>
                    <Card className="text-center mx-auto col-12 col-lg-6 ">
                    <CardBody>
                            <CardTitle className="font-weight-bold"> Admin Services  </CardTitle>
                            <CardText>
                                <small id="description" className="form-text text-muted">
                                    <p>In this you can use ADMIN services.
     </p>
                                </small>
                            </CardText>
                            <Container className="text-center">
                                <ListGroup>
                                    <Link className="list-group-item list-group-item-action list-group-item-warning mt-5" tag="a" to="/userServices">Users Related Services
                                    <small id="description" className="form-text text-muted">
                                    In this you can see all users.
                                </small>
                                </Link>
                                    <Link className="list-group-item list-group-item-action list-group-item-warning mt-2" 
                                    tag="a" to="/learningLicense/:id">Approved Learning Licence
                                    <small id="description" className="form-text text-muted">
                                    To approve learning Licence you can click here.
                                </small>
                                </Link>
                                <Link className="list-group-item list-group-item-action list-group-item-warning mt-2" tag="a" to="#">Approved Permanent Licence
                                    <small id="description" className="form-text text-muted">
                                    To approve learning Licence you can click here.
                                </small>
                                </Link>
                                <Link className="list-group-item list-group-item-action list-group-item-warning mt-2"
                                 tag="a" to="/newvehicle/:id">Approved New Vehicle Registration
                                    <small id="description" className="form-text text-muted">
                                    To approve learning Licence you can click here.
                                </small>
                                </Link>
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

export default AdminServices;