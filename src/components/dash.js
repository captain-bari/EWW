import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import {firebase} from '../firebase'
import Add from "./add";
import Welcome from "./welcome";
import Count from "./count";

class NavbarPage extends Component {
state = {
  isOpen: false,
  msg:true,
  countpage:false,
  rulepage:true,
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen , msg:false});
}

render() {
  return (
    <div>
    <Router>
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">EWW Cringy</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active={this.state.rulepage}>
              <MDBNavLink to="/EWW">Rules</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active={this.state.countpage}>
              <MDBNavLink to="/EWW" onClick={() => this.setState({ countpage:true,rulepage:false})}>Count</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/EWW">Pricing</MDBNavLink>
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
     
   
     
    </Router>
    {this.state.rulepage && <div><Welcome/><Add/></div>}
    {this.state.countpage && <div><Count/></div>}
    </div>
    
    );
  }
}

export default NavbarPage;