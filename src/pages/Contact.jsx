import githubIconImage from '../assets/github-mark.svg';
import linkedInIconImage from '../assets/linkedin.svg';
import resumeIcon from '../assets/resume.svg';
import resume from '../assets/Jon_Richardson_Resume_August_2025.pdf';
import { useTheme } from '../components/ThemeContext';


export default function Contact(){
    const {isDarkMode} = useTheme();
    const openInNewTab = (url) => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };
    return( 
        <div className={isDarkMode ? 'dark-bg' : 'light-bg'}>
            <h1 className='tabs'>Contact</h1>
            <div className='flex justify-center gap-4'>
                <a href={resume} download="Jon's Resume">
                <button className='icon-button' >
                    <img src={resumeIcon} alt='resume icon' className='w-16 h-16 dark:invert' />
                </button>
                </a>
                <button className='icon-button' onClick={() => openInNewTab('https://github.com/kaliuser876')}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt='GitHub icon' className='w-16 h-16' />
                </button>
                <button className='icon-button' onClick={() => openInNewTab('https://www.linkedin.com/in/jonathan-richardson-621281269/')}>
                    <img src={linkedInIconImage} alt='LinkedIn icon' className='w-16 h-16' />
                </button>
            </div>
        </div>
    )
}