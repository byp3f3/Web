import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <div className="contain">
            <Navbar.Brand href="/" ><img src="../images/icon.png" style={{width:'80px'}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Главная</Nav.Link>
                <Nav.Link href="/cart">Каталог</Nav.Link>
                <Nav.Link href="/overlay">Корзина</Nav.Link>
                <Nav.Link href="/liked">Избранное</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </div>
        </Navbar>
    )
}

export default Header