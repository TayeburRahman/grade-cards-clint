import React, { Fragment, useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
// import { Link } from "react-router-dom";
import logo from '../image/logo.png';
import './Navbar.css';

const Navbars = () => {
    const [navSize, setnavSize] = useState("7rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#4b13ce") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("7rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
    return (
        <Fragment>
          <Navbar collapseOnSelect expand="lg" 
          style={{
                   backgroundColor: navColor,
                   height: navSize,
                   transition: "all 1s",
                   position: 'fixed',
                   zIndex: 200,
                   width:'100%',
                   top:0,
                   
                 }}>
           <Container className='Containernav'>
           <Navbar.Brand as={HashLink} to="/home"> 
           <img src={logo} className="img-fluid mt-2" alt="..." width='50%' />
           </Navbar.Brand>
           <Navbar.Toggle className='mt-2' aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav" className='background-nav'>
             <Nav className="me-auto">
             </Nav>
             <Nav>
             <Nav.Link as={HashLink} to="/home" className='menuText'>Home</Nav.Link>
             <NavDropdown title="RoboGrading" id="collasible-nav-dropdown">
                 <NavDropdown.Item as={HashLink} to="/about-robograding"> About Robograding </NavDropdown.Item>
                 <NavDropdown.Item as={HashLink} to="/robograding">Why Robograding</NavDropdown.Item>
                 <NavDropdown.Item as={HashLink} to="#action/3.2">Another action</NavDropdown.Item>
                 <NavDropdown.Item as={HashLink} to="/Priceing">Pricing</NavDropdown.Item>
                 <NavDropdown.Item as={HashLink} to="#action/3.4">How it Works</NavDropdown.Item>
                 <NavDropdown.Item as={HashLink} to="#action/3.4">FAQs</NavDropdown.Item>
               </NavDropdown>
               <Nav.Link as={HashLink} to="#pricing" className='menuText'>About</Nav.Link>
               <Nav.Link as={HashLink} to="#pricing" className='menuText'>Blog</Nav.Link>
               <Nav.Link as={HashLink} to="#pricing" className='menuText'>Contact</Nav.Link>
               <Nav.Link as={HashLink} to="dashboard" className='menuText'><button className="button-34" role="button">Grade Cards</button>
               </Nav.Link>
             </Nav>
           </Navbar.Collapse>
           </Container>
         </Navbar>
        </Fragment>
    );
};

export default Navbars;