import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import BarGraph from '../Media/Languages.svg';
import Diagram from '../Media/techknowledge.svg';
import { MDBContainer } from "mdbreact";


export default function Skills() {
  return (
    <MDBContainer className='text-white text-center p-5 mt-5 '>
     <div className='container'> 
      <h1> Skills </h1>
      <p>Here are some of my current languages and technical knowledge. Like technology, my skills are always evolving to keep up with the latest technologies.</p>
       
            <img src={BarGraph} alt="language bar graph"/>
            <br/> <br/>
            <img src={Diagram} alt="technical knowledge chart"/>
            
            </div>
    </MDBContainer>
  )
}
