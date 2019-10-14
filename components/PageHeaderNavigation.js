import React from 'react'
import Link from "next/link";
import {
    Nav,
    Navbar,
    NavbarBrand } from "reactstrap";
import PageHeaderNavigationDropdown from '../components/PageHeaderNavigationDropdown.js'

class PageHeaderNavigation extends React.Component {

    render() {
        return (
            <React.Fragment>

                <Navbar light className="navbar navbar-expand-md pt-3 pb-3">
                    <Link prefetch href="/">
                        <NavbarBrand href="/">
                            <img src="/static/LittleLookUp-Birdie2-tiny.png" alt="Little Look-Up Birdie" />
                            <span className="icon ion-md-home mr-1"/> Little Look-Up
                        </NavbarBrand>
                    </Link>
                    <Nav navbar>
                        <PageHeaderNavigationDropdown />
                    </Nav>
                </Navbar>

            </React.Fragment>
        )
    }
}

export default PageHeaderNavigation;
