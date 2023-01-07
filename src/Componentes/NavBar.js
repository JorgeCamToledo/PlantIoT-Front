import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link} from "react-router-dom";
import "./NavBar.css";

const NavBarExample = () => {
    return (
        <>
            <Navbar classname="navBg" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/Monitoreo">PlantIoT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/Monitoreo" >Monitoreo</Nav.Link>
                            <Nav.Link as={Link} to= "/circuito">Circuitos</Nav.Link>
                            <Nav.Link as={Link} to= "/Datos" >Datos</Nav.Link>
                            <Nav.Link as={Link} to= "/Estadistica" >Estadistica</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section>
                <Outlet></Outlet>
            </section>


        </>
    );


};
export default NavBarExample;