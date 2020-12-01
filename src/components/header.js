import React from "react"
import {Link} from "gatsby";
import logo from '../images/warrington-cat-sitters-logo.svg';

import { Navbar, Nav } from 'react-bootstrap';

export default function Header() {
return (
    <>
        <Navbar expand="md" variant="light" className="menu-wrap">
            <Navbar.Brand href="./">
            <img
                alt=""
                src={logo}
                width={202}
                height={60}
                className="d-inline-block align-top"
            />{' '}
            <span className="d-none">Warrington Cat Sitters</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarResponsive" />
            <Navbar.Collapse id="navbarResponsive" >
                <Nav as="ul" className="ml-auto">
                    <Nav.Item as="li">
                        <Link to="/" className="nav-link" activeClassName="active">Cat Sitting</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link to="/pet-sitting" className="nav-link" activeClassName="active">Pet Sitting</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link to="#contact" className="nav-link" activeClassName="active">Contact Us</Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
    )
};