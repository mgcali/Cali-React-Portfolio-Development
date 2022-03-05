import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Container from 'react-bootstrap/Container';


export default function Blog() {
  return (
    <Container fluid className='text-white text-center p-5'>
    <div className='container bg-dark p-5'>
      <h1>Blog</h1>
      <p>Check out my <a href='https://mgcali.wordpress.com/blog-2/' target='_blank' rel='noreferrel'>blog!</a></p>
      </div>
    </Container>
  )
}
