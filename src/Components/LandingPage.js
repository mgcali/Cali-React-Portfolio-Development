import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Container from 'react-bootstrap/Container';
import { useSpring,  animated } from 'react-spring';

 function LandingPage() {
     const styles = useSpring({ 
       from: { opacity: 0,}, 
       to: { opacity: 1, },
       config: { delay: 5000, duration:5000,} })
    
  return (
    
    <animated.div style={styles}>
    <Container fluid className='text-white'>
      <div className='text-center'>
      <h1>Test</h1>
      
          
      <h2>test2</h2>
      </div>
      
    </Container>
    </animated.div>
    
  )}       
        
   


export default LandingPage;