import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Giraffe from '../Media/giraffe.png';
import Biltmore from '../Media/biltmore.png';
import Bulldog from '../Media/bulldog.png'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import PortfolioPic from '../Media/portfolio.PNG';

export default function Portfolio() {
  return (
    
    <MDBContainer className='text-white text-center p-5 mt-5 '>
    <div className='container bg-dark bg-opacity-50'>
     <h1> Portfolio </h1>
    
        <div className="row features-small mt-5 wow fadeIn">

          <div className="container bg-dblue">
		
		<MDBRow>
    
    <MDBCol md='4'>
      
      <div className="thumbnail">
        <a href="http://www.bulldogtirenc.com" target="_blank" rel='noreferrer'>
          <p className="text-center"><img src={Bulldog} className='portfoliocard'  alt="bulldogtirenc" /> </p>
          
          <div className="caption">
            <p className="text-center text-white portfolio-link">Bulldogtirenc.com</p>
          </div>
        </a>
      </div>
      
      
    </MDBCol>
    
    <MDBCol md='4'>
      <div className="thumbnail">
        <a href="http://www.matthewcali.com/Projects/zoo/index.html" target="_blank" rel='noreferrer'>
         <p className="text-center"><img src={Giraffe} alt="giraffe" className='portfoliocard' /> </p>
          <div className="caption">
            <p className="text-center text-white portfolio-link">NC Zoo Companion App</p>
          </div>
        </a>
      </div>
    </MDBCol>
    <MDBCol md='4'>
      <div className="thumbnail ">
        <a href="https://www.matthewcali.com/Projects/biltmore/index.html" target="_blank" rel='noreferrer'>
         <p className="text-center"><img src={Biltmore} alt="biltmore" className='portfoliocard'/> </p>
          <div className="caption">
            <p className="text-center text-white portfolio-link">Biltmore Companion App</p>
          </div>
        </a>
      </div>
    </MDBCol>
    <MDBCol md='4'>
      <div className="thumbnail ">
        <a href="https://www.matthewcali.com" target="_blank" rel='noreferrer'>
         <p className="text-center"><img src={PortfolioPic} alt="portfolio" className='portfoliocard'/> </p>
          <div className="caption">
            <p className="text-center text-white portfolio-link">Original Portfolio</p>
          </div>
        </a>
      </div>
    </MDBCol>


        </MDBRow>
        <br/>
        <p className="text-center"> To view the code, check out my GitHub </p>
        <p className="text-center"> <a href="https://github.com/mgcali" className=" text-white nav-link border border-light rounded waves-effect waves-light"
              target="_blank" rel='noreferrer'>
              <i className="fab fa-github mr-2"></i>Github
            </a></p>
       </div> </div></div>
    </MDBContainer>
    
  )
}
