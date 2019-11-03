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
                <DropdownToggle>
                    Menu
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem><Link><a href="/">Home</a></Link></DropdownItem>
                    <DropdownItem><Link><a href="/tables">Tables</a></Link></DropdownItem>
                    <DropdownItem><Link><a href="/about">About</a></Link></DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default PageHeaderNavigationDropdown;
