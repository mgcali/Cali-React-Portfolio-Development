import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Container from 'react-bootstrap/Container';
import UnderConstruction from '../Media/underconstruction.jpg';


export default function Blog() {
  return (
    <Container fluid className='text-white text-center p-5'>
    <div className='container bg-dark p-5'>
      <h1>This Page is Under Construction</h1>
      <img src={UnderConstruction} style={ {height:'40%', width: '40%'}} alt="under construction"></img><br/><br/>
      <p>This page will be updated soon using the WordPress API to automatically retrieve and load articles directly from my blog</p>
      <p>Until then - check out the link to my <a href='https://mgcali.wordpress.com/blog-2/' target='_blank' rel='noreferrer'>blog!</a></p>
      </div>
    </Container>
  )
}
