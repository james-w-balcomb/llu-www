import React from 'react'
import Link from "next/link";
import {
    Navbar,
    NavbarBrand } from "reactstrap";

class PageHeaderNavigation extends React.Component {

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
                </Navbar>

            </React.Fragment>
        )
    }
}

export default PageHeaderNavigation;
