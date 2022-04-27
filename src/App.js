import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './Components/Skills';
import LandingPage from './Components/LandingPage';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Portfolio from './Components/Portfolio';
import Connect from './Components/Connect';
import Blog from './Components/Blog';
import Background from './Components/Background';
import TopNav2 from './Components/TopNav2';
import ContactForm from './Components/ContactForm';



function App() {
  return (
   <div className="App"> 
   
   <Router>
    
       <Background />
        <TopNav2 />
        
        <div className='content'>
         <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/skills" element={<Skills />} /> 
          <Route path="/portfolio" element={<Portfolio />} /> 
          <Route path="/blog" element={<Blog />} />
          <Route path="/connect" element={<Connect />} />
           
          </Routes>

        </div>
       
        
        
      
  
    </Router>  </div>
  );
}

export default App;
