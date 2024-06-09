import React from 'react'
import ReactDOM from 'react-dom/client';


import './index.css'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Home></Home>
   <About></About>
   <Projects></Projects>
   <Skills></Skills>
   <Contact></Contact>
   <Footer></Footer>
  </React.StrictMode>,
)
