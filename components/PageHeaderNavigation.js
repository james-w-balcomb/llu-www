import React from 'react'
import Link from "next/link";
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Input,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    Nav,
    Navbar,
    NavbarBrand } from "reactstrap";
import PageHeaderNavigationDropdown from '../components/PageHeaderNavigationDropdown.js'

class PageHeaderNavigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <React.Fragment>

                <Navbar light color="light" className="navbar navbar-expand-md pt-3 pb-3">
                    <Link prefetch href="/">
                        <NavbarBrand href="/">
                            <img src="/static/LittleLookUp-Birdie2-tiny.png" alt="Little Look-Up Birdie" />
                            <span className="icon ion-md-home mr-1"/> Little Look-Up
                        </NavbarBrand>
                    </Link>
                    <Nav navbar>
                        <PageHeaderNavigationDropdown />
                    </Nav>

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

            </React.Fragment>
        )
    }
}

export default PageHeaderNavigation;
