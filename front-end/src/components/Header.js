import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import RTONavbar from './RTONavbar';


class Header extends Component {
    render() {
        return (
            <div className="text-center">
            <Card className="bg-light ">
                <CardBody>
                    <h6 className="text-center" >Welcome To Online RTO Management System</h6>
     
     
     
     
  
     
            </CardBody>
            </Card>
            <RTONavbar />
    
        </div>

         
        );
    }
}

export default Header;