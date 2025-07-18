
// Need to take a image source and display it with a name under it
export default function SkillIcon(props){
    return (
    <div>
        <img src={props.src} alt="Skill Icon" className='w-16 h-16' />
        <label className="text-3xl ">{props.display_text}</label>
    </div>
    );
}