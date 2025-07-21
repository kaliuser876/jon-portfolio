import Projects from "./Project"
import Experience from "./Experience"
import Skills from "./Skills"
import About from "./About"
import Contact from "./Contact"

export default function Home(){
    return <><h1>Home</h1>
    <p>
        Hi, my name is Jon
        I am a software developer and a full-stack enginer
    </p>
    <Projects/>
    <Experience/>
    <Skills />
    <About />
    <Contact />
    </>
}