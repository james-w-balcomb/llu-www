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
                            <img src="/static/sethernet-bird_only.png" alt="Little Look-Up Birdie" style={{width:'30px'}}/>
                            <span className="icon ion-md-home mr-2"/> Little Look-Up
                        </NavbarBrand>
                    </Link>
                </Navbar>

            </React.Fragment>
        )
    }
}

export default PageHeaderNavigation;
