import { useTheme } from "../components/ThemeContext";

export default function Experience(){
    const {isDarkMode} = useTheme();
    return (
    <div className={isDarkMode ? 'dark-bg' : 'light-bg'}>
        <h1 className='tabs'>Experience</h1>
    </div>
    )
}