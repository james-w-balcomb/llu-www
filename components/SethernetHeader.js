import React, { Component } from 'react';

import {
    Navbar, Nav, NavbarBrand, NavLink, NavItem, DropdownItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, NavbarToggler, Collapse, FormGroup, Input
} from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        return (
            <div>
                <Head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                </Head>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"><img style={{width:50}} className="mr-2" src={"/static/sethernet-bird_only.png"}/>
                        <img style={{width:160}} className="mr-2" src={"/static/sethernet-littlelookup.png"}/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <Input
                                type="search"
                                name="search"
                                id="exampleSearch"
                                placeholder="search placeholder"
                            />
                            <NavItem>
                                <NavLink href="/docs">Docs</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/tables">Tables</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}

export default Header;