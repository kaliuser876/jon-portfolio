import { useTheme} from '../components/ThemeContext';

export default function About(){
    const {isDarkMode} = useTheme();
    return (
    <div className={isDarkMode ? 'dark-bg' : 'light-bg'}>
        <h1 className='tabs'>About Me</h1>
        <div>
            <p>
                Hi, my name is Jon Richardson 
            </p>
            <p>
            I am looking to get into Cybersecurity, Software or Full-Stack development
            I have been programing for the past 8 years. Initially I learned Python during my Freshman Year of Highscool.
            That class taught me a lot about the fundamentals of programing and semantics.
            Throughout the rest of my time at Highscool I learned Java and JavaScript.
            Then I went to Elmhurst University and pursued Cybersecurity and Computer Science.
            I learend C++ and C and continued using Java and JavaScript. 
            Aditionally I learned the basics of networks, security, and how to write documents.
            To supplement real world experience I used HackTheBox to practice and hone my skills. 
            Now I have graduated and currently pursing full time work. 

            </p>
        </div>

    
    </div>
    )
}