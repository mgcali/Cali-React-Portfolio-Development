import React from 'react';
import BarGraph from '../Media/Languages.mp4';
import Diagram from '../Media/techknowledge.mp4';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


export default function Skills() {
  return (
    <MDBContainer className='text-white text-center p-5 mt-5 '>
      <h1> Skills </h1>
      <p>Here are some of my current languages and technical knowledge. Like technology, my skills are always evolving to keep up with the latest technologies.</p>
       <video autoPlay muted >
            <source src={BarGraph} type="video/mp4" />
            </video>
            <video autoPlay muted >
            <source src={Diagram} type="video/mp4" />
            </video>
    
    </MDBContainer>
  )
}
