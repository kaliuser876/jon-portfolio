import '../components/SkillIcon';
import SkillIcon from '../components/SkillIcon';
import ReactIcon from '../assets/react.svg';
import { useTheme } from '../components/ThemeContext';

export default function Skills(){
    const {isDarkMode} = useTheme();
    return (
        <div className={isDarkMode ? 'dark-bg' : 'light-bg'}>
            <div className="text-center px-4">
            <h1 className="text-4xl font-bold mb-6">
                Skills
            </h1>

            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">
                    Programming Languages
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" display_text="Java" />
                    <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" display_text="JavaScript" />
                    <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" display_text="Python" />
                    <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" display_text="C++" />
                    <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" display_text="C#" />
                    <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" display_text="C" />
                </div>
            </div>

            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">
                    JavaScript Frameworks's
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" display_text="NodeJS" />
                    <SkillIcon src={ReactIcon} display_text="React" />
                </div>
            </div>

            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">
                    Operating Systems
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg" display_text="Windows" />
                    <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kalilinux/kalilinux-original.svg" display_text="Kali Linux" />
                    <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" display_text="Linux" />
                </div>
            </div>

            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">
                    Resource Managers
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" display_text="GitHub" />
                    <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/railway/railway-original.svg" display_text="Railway" />
                </div>
            </div>

            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">
                    Databases
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" display_text="MySQL" />
                    <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" display_text="Azure" />
                </div>
            </div>

        </div>  
    </div>
    )
}