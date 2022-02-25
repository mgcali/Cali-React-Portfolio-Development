import React from 'react'
import Container from 'react-bootstrap/Container';
import {Nav, Navbar, Offcanvas} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Media/Logo.gif';
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring';

export default function TopNav2() {
    const styles = useSpring({ 
        from: { opacity: 0, marginTop: -500,}, 
        to: { opacity: 1, marginTop: 0,},
        config: { delay: 1000, duration:1000,} })
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
    <li><Link to="/about">About</Link></li>
                   <li><Link to="/portfolio">Portfolio</Link></li> 
                   <li><Link to='/blog'>Blog</Link></li>
                  <li><Link to='/connect'>Connect</Link></li> 
    </Nav>
    </Container>
  </Navbar>

  )
}
