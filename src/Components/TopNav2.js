import React from 'react'
import {Nav, Navbar,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


export default function TopNav2() {
 
  return (
    
    <Navbar  expand="lg" className='justify-content-right bg-opacity-50' bg="dark" variant="dark" >
    
     
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" className='' />
    <Navbar.Collapse id="basic-navbar-nav" >
    
   <li><Navbar.Brand> <Link to=''>Matthew Cali</Link></Navbar.Brand></li>
    <Nav className="me-auto">
    <li><Link to="/skills">Skills</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li> 
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/connect'>Connect</Link></li> 
    
    </Nav>
    </Navbar.Collapse>
    </Navbar>
  
  

  )
}
