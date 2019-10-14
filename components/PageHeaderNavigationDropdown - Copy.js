import React from 'react';
import Link from "next/link";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class PageHeaderNavigationDropdown extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <Dropdown direction="down" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    Menu
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem><Link><a href="/resistor-color-codes">Resistor Color Codes</a></Link></DropdownItem>
                    <DropdownItem><Link><a href="/resistor-color-codes2">Resistor Color Codes2</a></Link></DropdownItem>
                    <DropdownItem>Some Action</DropdownItem>
                    <DropdownItem disabled>Action (disabled)</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Foo Action</DropdownItem>
                    <DropdownItem>Bar Action</DropdownItem>
                    <DropdownItem>Quo Action</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default PageHeaderNavigationDropdown;
