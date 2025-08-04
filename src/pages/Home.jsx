import Projects from "./Project"
import Experience from "./Experience"
import Skills from "./Skills"
import About from "./About"
import Contact from "./Contact"
import { useTheme } from "../components/ThemeContext"

export default function Home(){
    const {isDarkMode} = useTheme();
    return (
        <div className={isDarkMode ? 'dark-bg' : 'light-bg'}>
            <div className="text-center font-sans  px-4">
                <h1 className='tabs'>Home</h1>
                <div>
                    <p>
                        Hi, my name is Jon Richardson 
                    </p>
                    <p>
                    I am a software developer and a full-stack engineer
                    </p>
                </div>
                <Projects />
                <Experience />
                <Skills />
                <About />
                <Contact />
            </div>
        </div>
        )
}