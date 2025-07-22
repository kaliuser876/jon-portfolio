import githubIconImage from '../assets/github-mark.svg';
import linkedInIconImage from '../assets/linkedin.svg';
import resumeIcon from '../assets/resume.svg';
import resume from '../assets/jonsResume.pdf';
import { useTheme } from '../components/ThemeContext';


export default function Contact(){
    const {isDarkMode} = useTheme();
    const openInNewTab = (url) => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };
    return( 
        <div className={isDarkMode ? 'dark-bg' : 'light-bg'}>
            <h1>Contact</h1>
            <div className='flex justify-center gap-4'>
                <a href={resume} download="Jon's Resume">
                <button >
                    <img src={resumeIcon} alt='resume icon' className='w-8 h-8' />
                </button>
                </a>
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