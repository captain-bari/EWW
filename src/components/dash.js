import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import Add from './add';
import {firebase} from '../firebase'



class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}



render() {
  return (
    <Router>
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">EWW Cringy</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!">Rules</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem >Sign Out</MDBDropdownItem>
                 
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      <Add/>
   
    
    </Router>
    
    );
  }
}

export default NavbarPage;