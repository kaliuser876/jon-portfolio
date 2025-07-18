import './index.css';
import './style.css';
import { Trash } from 'lucide-react';
import TEST from './assets/react.svg';

import Navbar from './components/Navbar.jsx';
import Experience from './pages/Experience.jsx';
import Projects from './pages/Project.jsx';
import Home from './pages/Home.jsx';
import React, { useState } from 'react';
import { Route, Routes} from "react-router-dom";
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';
import Modal from './components/Modal.jsx';


function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
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
      <button className='btn btn-danger' onClick={() => setOpen(true)}>
        <img src={TEST} alt='React Image' className='w-16 h-16' />
      </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className='text-center w-56'>
          <Trash size={56} className="mx-auto text-red-500" />
          <div className='mx-auto my-4 w-48'>
            <h3 className='text-lg front-black text-red-500'>
              Confirm Delete
            </h3>
            <p className='text-sm text-green-400'>
              Are you sure you want to do that?
            </p>
            </div>
          </div>
        </Modal>

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
  );
}

export default App
