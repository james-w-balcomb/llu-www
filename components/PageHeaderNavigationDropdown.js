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
                    <DropdownItem><Link><a href="/">Home</a></Link></DropdownItem>
                    <DropdownItem><Link><a href="/tables">Tables</a></Link></DropdownItem>
                    <DropdownItem><Link><a href="/table">Table</a></Link></DropdownItem>
                    <DropdownItem><Link><a href="/about">About</a></Link></DropdownItem>
                    <DropdownItem><Link><a href="/terms-and-conditions">T&C</a></Link></DropdownItem>
                    <DropdownItem><Link><a href="/sethernet-index">SetherNet Index</a></Link></DropdownItem>
                    <DropdownItem><Link><a href="/sethernet-table">SetherNet Table</a></Link></DropdownItem>
                    <DropdownItem divider />
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
