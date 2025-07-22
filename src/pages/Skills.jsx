import '../components/SkillIcon';
import SkillIcon from '../components/SkillIcon';
import TEST from '../assets/react.svg';



export default function Skills(){
    return (
    <div>
        <h1>
            Skills
        </h1>
        <span className='flex justify-center gap-4 text-green-300 '>
            <SkillIcon src={TEST} display_text="React" />
            <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" display_text="React" />
            <SkillIcon src={TEST} display_text="React" />
        </span>
    </div>
    )
}