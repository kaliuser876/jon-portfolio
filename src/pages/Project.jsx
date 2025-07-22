import Modal from '../components/Modal';
import { Trash } from 'lucide-react';
import TEST from '../assets/react.svg';
import TEST2 from '../assets/github-mark.svg';
import { useState } from 'react';

import { useTheme} from '../components/ThemeContext';

export default function Projects(){
    const {isDarkMode} = useTheme();
    const [openProject, setOpenProject] = useState(false);
    const [openDND, setOpenDND] = useState(false);

    const openInNewTab = (url) => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };
    
    return (
    <div className={isDarkMode ? 'dark-bg' : 'light-bg'}>
        <h1>Projects</h1>
        <p>
          These are some of my projects. Feel free to click on them to learn more.
        </p>
        {/* Placing my projects in this. The user will be able to click the image and find out more information */}
        <div> 
          {/* Portfolio project */}
          <span className="px-4">
            <button className='btn btn-danger ' onClick={() => setOpenProject(true)}>
              <img src={TEST} alt='React Image' className='w-16 h-16' />
            </button>
              <Modal open={openProject} onClose={() => setOpenProject(false)}>
                <div className='text-center w-56'>
                  <div className='mx-auto my-4 w-48'>
                    <h3 className='text-lg font-black text-red-500'>
                      My Portfolio
                    </h3>
                    <p className='text-sm text-green-400'>
                      This is my portfolio site
                    </p>
                  </div>
                </div>
              </Modal>
          </span>

          {/* DND Front End */}
          <span className="px-4">
            <button  onClick={() => setOpenDND(true)}>
              <img src={TEST2} alt='React Image' className='w-16 h-16' />
            </button>
              <Modal open={openDND} onClose={() => setOpenDND(false)}>
                <div className='text-center w-56'>
                  <div className='mx-auto my-4 w-48'>
                    <h3 className='text-lg font-black text-red-500'>
                      DND Front End
                    </h3>
                    <p className='text-sm text-green-400'>
                      Allow users to enter dice data to create a class that they can press a button and roll dice. This connects to discord and displays the data there.
                    </p>
                  </div>
                </div>
              </Modal>
          </span>

        </div>
      </div>
    );
}