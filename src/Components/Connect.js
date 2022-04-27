import React from 'react';
import Logo from '../Media/Logo.gif';
import '../App.css';
import Container from 'react-bootstrap/Container';



export default function Connect() {
  
  return (
    <Container className='text-white text-center p-4 '>
    <br /> <br />


    <div className='bg-dark bg-opacity-75 p-3'>
      
      
      <img src={Logo} height='200' width='200' alt='matthew cali logo'></img>
      <h2 className="h1-responsive font-weight-bold text-center my-4">Contact </h2>
    <p className="text-center w-responsive mx-auto mb-5">Like what you see? Feel free to reach out to me and I will promptly get back to you.</p>
    
    <div className="row">

       
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" method="POST">

                
                <div className="row">

                   
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control"/>
                            <label for="name" className="">Your name</label>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control"/>
                            <label for="email" className="">Your email</label>
                        </div>
                    </div>
                    

                </div>
                

                
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
               

               
                <div class="row">

                    
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                

            <div class="text-center text-md-left">
                <button class="btn default-color text-white" type="submit" >Send</button>
            </div>
            </form>

            <div class="status"></div>
        </div>
        

        
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                
                <br/>
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Youngsville, NC 27596, USA</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>(585) 690-8066</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>mgcali@my.waketech.edu</p>
                </li>
            </ul>
        </div>
        <div><p>Let's connect on LinkedIn!</p></div>
        <a href="https://www.linkedin.com/in/matthew-cali-8b417a217/" class="nav-link waves-effect waves-light" target="_blank" rel="noreferrer">
              <i class="fab fa-linkedin"></i>
            </a>
    </div>
    </div>
    
    </Container>
  )
}
