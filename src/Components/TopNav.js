import React from 'react'
import Container from 'react-bootstrap/Container';
import {Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Media/Logo.gif';
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring';

export default function TopNav() {
    const styles = useSpring({ 
        from: { opacity: 0, marginTop: -500,}, 
        to: { opacity: 1, marginTop: 0,},
        config: { delay: 1000, duration:1000,} })
  return (
      <animated.div style={styles}>
    <Container fluid  >
    <Navbar  expand="lg" className='justify-content-right' >
    <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white' />
    <Navbar.Collapse id="basic-navbar-nav" >
    
        <Nav id='primary-navigation' >
        <ul>
            <Nav >
                <ul>
                
                    <li><Link to="/about">About</Link></li>
                   <li><Link to="/portfolio">Portfolio</Link></li> 
                   <li><Link to=''><img src={Logo} height='130' width='200' alt='matthew cali logo'></img></Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/connect'>Connect</Link></li> 
                </ul>
            </Nav>
            
        </ul>
        </Nav>
        
        
        
        
        
        </Navbar.Collapse>
        </Navbar>
       
        
        
        </Container>
      </animated.div>
  )
}
