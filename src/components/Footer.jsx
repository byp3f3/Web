import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Footer = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" >
        <div className="contain" style={{flexWrap: 'wrap'}}>
            <Navbar.Brand href="/" ><img src="../images/icon.png" style={{width:'200px', margin: '0, 30px'}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{display: 'table-column', width: '100px'}}>
                <Nav.Link href="/">Главная</Nav.Link>
                <Nav.Link href="/cart">Каталог</Nav.Link> 
            </Nav>
            <Nav className="me-auto" style={{display: 'table-column', width: '150px'}}>
                <Nav.Link href="/overlay">Корзина</Nav.Link>
                <Nav.Link href="/liked">Избранное</Nav.Link>
            </Nav>
            <h1 style={{display: 'table-column', width: '700px'}}>Батон - всегда свежий выбор!</h1>
            </Navbar.Collapse>
            <Navbar.Brand href="/home" ><img src="../images/icon.png" style={{width:'200px', margin: '0, 30px'}}/></Navbar.Brand>
        </div>
        </Navbar>
    )
}

export default Footer