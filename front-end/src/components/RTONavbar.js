import React, { Component , useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const RTONavbar = (props) => {
        const [isOpen, setIsOpen] = useState(false);

        const toggle = () => setIsOpen(!isOpen);
 
   
        return (
            <div className="text-white">
               
                    <Navbar color="dark" expand="md">
                  
                        <NavbarBrand href="/">RTO</NavbarBrand>
                        
                     
                      
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink className="" href="/home">Home</NavLink>
                                </NavItem>
                               
                                <NavItem>
                                    <NavLink href="/services">Services</NavLink>
                                </NavItem>
                            </Nav>
                            <NavbarText>24 x 7 Citizen Call Center :  1800 120 8040 (Toll Free)</NavbarText>
                        </Collapse>
                   </Navbar>
                </div>
);
         
        
        }


export default RTONavbar;