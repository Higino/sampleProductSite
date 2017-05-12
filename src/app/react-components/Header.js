import React from "react";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

export default class Layout extends React.Component {
    constructor () {
        super(); 
        this.state = {siteName: "eCommerce-R-US"};
    }

    handleSelect(eventKey) {
       console.log('Selected ' + eventKey + ' key');
    };
    render () {
        
        const navbarInstance = (
        <Navbar inverse collapseOnSelect onSelect={this.handleSelect}>
            <Navbar.Header>
            <Navbar.Brand>
                <a href="#">{this.props.siteName}</a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="#">Home</NavItem>
                <NavItem eventKey={2} href="#">List Items</NavItem>
                <NavDropdown eventKey={3} title="Preferences" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider eventKey ={3.0}/>
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={4} href="#">Login</NavItem>
                <NavItem eventKey={5} href="#">Help</NavItem>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        );

        return (
            <header> {navbarInstance}</header>
        );
    }
}