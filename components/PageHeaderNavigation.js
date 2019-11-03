import React from 'react'
import Link from "next/link";
import {
    Nav,
    Navbar,
    NavbarBrand
} from "reactstrap";
import PageHeaderNavigationDropdown from '../components/PageHeaderNavigationDropdown.js'


class PageHeaderNavigation extends React.Component {

    render() {
        return (
            <React.Fragment>

                <Navbar light color="light" className="navbar navbar-expand-md pt-2 pb-2">
                    <div className="w-100">
                        <Link prefetch href="/">
                            <NavbarBrand href="/">
                                <img src="/static/sethernet-bird_only.png" alt="Little Look-Up Birdie" style={{width:'40px'}}/>
                                <span className="icon ion-md-home mr-2"/> Little Look-Up
                            </NavbarBrand>
                        </Link>
                        <Nav navbar className="float-right" style={{marginRight: '85px'}}>
                            <PageHeaderNavigationDropdown/>
                        </Nav>
                    </div>
                </Navbar>

            </React.Fragment>
        )
    }
}

export default PageHeaderNavigation;
