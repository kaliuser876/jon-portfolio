import githubIconImage from '../assets/github-mark.svg';
import linkedInIconImage from '../assets/linkedin.svg';
import resumeIcon from '../assets/resume.svg';


export default function Contact(){
    const openInNewTab = (url) => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };
    return( 
        <div>
            <h1>Contact</h1>
            <div className='flex justify-center gap-4'>
                <button onClick={() => openInNewTab('https://github.com/kaliuser876')}>
                    <img src={resumeIcon} alt='resume icon' className='w-8 h-8' />
                </button>
                <button onClick={() => openInNewTab('https://github.com/kaliuser876')}>
                    <img src={githubIconImage} alt='GitHub icon' className='w-8 h-8 scale-75' />
                </button>
                <button onClick={() => openInNewTab('https://www.linkedin.com/in/jonathan-richardson-621281269/')}>
                    <img src={linkedInIconImage} alt='LinkedIn icon' className='w-8 h-8' />
                </button>
            </div>
        </div>
    )
}