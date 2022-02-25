import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import LandingPage from './Components/LandingPage';
import TopNav from './Components/TopNav';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Portfolio from './Components/Portfolio';
import Connect from './Components/Connect';
import Blog from './Components/Blog';
import Background from './Components/Background';
import TopNav2 from './Components/TopNav2';



function App() {
  return (
    <Router>
    <div className="App">
       <Background />
        <TopNav2 />
        <div className='content'>
         <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/portfolio" element={<Portfolio />} /> 
          <Route path="/blog" element={<Blog />} />
          <Route path="/connect" element={<Connect />} />
           
          </Routes>

        </div>
       
        
        
      
    </div>
    </Router>
  );
}

export default App;
