import { useTheme } from "../components/ThemeContext";

export default function Experience(){
    const {isDarkMode} = useTheme();
    return (
    <div className={isDarkMode ? 'dark-bg' : 'light-bg'}>
        <h1 className='tabs'>Experience</h1>

        During my Senior year in my capstone class, me and a team of 4 others were tasked with creating a Student Login service that utilzed QR codes to check students in and
        maintain a record of login times. This was usefull for foreien exchange students who were here on academic visa's and needed to provided records that they went to class.
        This project taught me the importance of planning ahead, working with my team, and trying to keep everyone on track. 
        We created our project using Bun.js (Backend) and raw HTML code. This was a poor decision looking back because Bun was a new service that did not have much reference material, and we
        should have utilized React.js for the front end instead of reliying souly on HTML and scripts of javascript. 
        However, we pushed forward. I was in charge of making the database, making API routes in a RESTful manner, connecting the front end to the backend and deploying our service. That meant I had to
        go into the HTML files and hard code the API calls. Along with that I had to fix errors created by teamates and make sure everything ran smoothly so we had a functional product. 
        If I were to do the project again I would do several things differently. Primarily I would use Vite + React.js for front end, and Express.js for backend. This would give me 
        enough control over what is being display along with being able to reuse components which were present in the entire project. The backend would have more documentation and 
        I would be able to create routes without fear. I would use Azure blob storage for our database because it was so easy to connect to. For deployment Railway was super helpful
        and I would use it again. 

    </div>
    )
}