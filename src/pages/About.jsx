import { useTheme} from '../components/ThemeContext';

export default function About(){
    const {isDarkMode} = useTheme();
    return (
    <div className={isDarkMode ? 'dark-bg' : 'light-bg'}>
    <h1 className='tabs'>About Me</h1>
    </div>
    )
}