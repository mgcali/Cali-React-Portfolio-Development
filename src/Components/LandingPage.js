import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Container from 'react-bootstrap/Container';


import ReactTypingEffect from 'react-typing-effect';
import Headshot from '../Media/headshot.JPG';
import DownloadIcon from '@mui/icons-material/Download';




 function LandingPage() {
       
  return (
    
    <Container className='text-white'>
      <br/> <br/>
  

      <div>
        <div className='container text-center bg-dark bg-opacity-75'>
      <div className='row'>
      <div className='col-7 p-5'><h1><ReactTypingEffect
        text={["Matthew Cali", "Web Developer", "Leader with compassion", "Creative","Curious", "Detail Oriented", "Passionate"]} speed="200" eraseDelay="700" eraseSpeed="100"
      /></h1></div>
        <br/>
       
            <div className="col-md-6 mb-5">
              <img src={Headshot} className="img-fluid z-depth-1-half rounded-circle w-75" alt="man with brown hair and brown eyes, green camo jacket smiling" ></img>
            </div>
            <div className='col-md-6 pl-3'>
              <h2>About Me:</h2>
              <br/>
            <p>Welcome to my portfolio! My name is Matthew Cali and I'm a senior web development student at Wake Technical Community College with a passion for learning new technologies. I look forward to beginning my journey as a junior developer and continue to learn new skills.</p>
            
            <hr/>

            <p>
              With a strong leadership background and <strong>years</strong> of high-quality customer service experience, I'm the right fit for any business looking to create high quality products and services that will leave your customer highly-satisfied. 
            </p>
            <div className=' btn btn-outline-white'>
            <a className='text-white'  href="https://www.matthewcali.com/files/MatthewCaliResume.pdf" target="_blank" download="MatthewCaliResume" rel='noreferrer'>Download Resume
            <i class="text-white"><DownloadIcon></DownloadIcon></i></a>
            </div>
            </div>
            
            </div>
        </div>
      </div>

      <br/> <br/>
      
    </Container>
    
    
  )}       
        
   


export default LandingPage;