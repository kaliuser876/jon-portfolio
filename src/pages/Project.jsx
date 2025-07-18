import Modal from '../components/Modal';
import { Trash } from 'lucide-react';
import TEST from '../assets/react.svg';
import { useState } from 'react';

export default function Projects(){
    const [open, setOpen] = useState(false);
    
    return (<div><h1>Projects</h1>
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
        </div>
    );
}