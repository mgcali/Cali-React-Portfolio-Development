import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Container from 'react-bootstrap/Container';
import { useSpring,  animated } from 'react-spring';
import Logo from '../Media/Logo.gif';
import ReactTypingEffect from 'react-typing-effect';
import Avatar from '../Media/avatar.jpg';

 function LandingPage() {
     const styles = useSpring({ 
       from: { opacity: 0,}, 
       to: { opacity: 1, },
       config: { delay: 7000, duration:3500,} })

     
  return (
    
    
    <Container className='text-white'>
      <br/> <br/>
      <animated.div style={styles}>
        <div className='row bg-dark bg-opacity-75'>
      <div className='col-4 p-5'>
      <img src={Logo} height='200' width='200' alt='matthew cali logo'></img>
      </div><div className='col-8 p-5'><h1><ReactTypingEffect
        text={["Matthew Cali", "Web Developer", "Leader with compassion"]} speed="100" eraseDelay="2000" eraseSpeed="100"
      /></h1></div></div>
      </animated.div>
     
      <br />

      <animated.div style={styles}>
        <div className='container text-center bg-dark bg-opacity-75'>
      <div className='row'>
        <h1 className='p-4 mb-3'>About me!</h1>
        <br/>
            <div className="col-md-6 mb-4">
              <img src={Avatar} className="img-fluid z-depth-1-half rounded-circle w-75" alt="man with brown hair and brown eyes, green camo jacket smiling" ></img>
            </div>
            <div className='col-md-6 mb-4'>
            <p>Welcome to my portfolio! My name is Matthew Cali and I'm a senior web development student at Wake Technical Community College with a passion for learning new technologies. I look forward to beginning my journey as a junior developer and continue to learn new skills.</p>
            
            <hr/>

            <p>
              With a strong leadership background and <strong>years</strong> of high-quality customer service experience, I'm the right fit for any business looking to create high quality products and services that will leave your customer highly-satisfied. 
            </p>
            </div>
        
            </div>
        </div>
      </animated.div>

      <br/> <br/>
      
    </Container>
    
    
  )}       
        
   


export default LandingPage;