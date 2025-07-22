
// Need to take a image source and display it with a name under it
export default function SkillIcon(props){
    return (
         <div className="relative group w-24 sm:w-28 flex flex-col items-center rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105 duration-300">
            {/* Animated hover background (slides up from bottom) */}
            <div className="absolute inset-0 bg-violet-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col items-center space-y-2 p-2">
                <img src={props.src} alt="Skill Icon" className="w-16 h-16" />
                <span className="text-base sm:text-lg text-black dark:text-white transition-colors duration-300">
                    {props.display_text}
                </span>
            </div>
        </div>
    );
}