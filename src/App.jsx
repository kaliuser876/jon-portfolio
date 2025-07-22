import './index.css';
import './style.css';

import Navbar from './components/Navbar.jsx';
import Experience from './pages/Experience.jsx';
import Projects from './pages/Project.jsx';
import Home from './pages/Home.jsx';
import React, { useState, useEffect } from 'react';
import { Route, Routes} from "react-router-dom";
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';

import { ThemeContext } from './components/ThemeContext.js';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div className={isDarkMode ? 'dark-bg' : 'light-bg'}>
        {/*Nav Bar */}
        {/*Contain Home, Projects, Experience, Skills, About Me Contact */}
        <><Navbar />
        <div className='container'>
          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
        </>

        {/*Little Introduction, Have an image to pull attraction. Keep it simple. Express 
        full stack developer and software developer */}


        {/*Projects
        Show off some of the things I have done on github, link to the pages. Make them clickable, expand on them
        then allow the user to click the image again to redirect */}

        {/*Experience
        Give simple bulitpoints about internships, tutoring */}


        {/*Skills
        Use image's to show my skills (python snake) */}


        {/*About Me 
        Add a little shpeel about my hobbies and drive*/}


        {/*Contact Me*/}
      </div>
    </ThemeContext.Provider>
  );
}

export default App
