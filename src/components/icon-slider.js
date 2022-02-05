import { FaHtml5, FaCss3, FaReact, FaSass, FaLinux, FaNodeJs, FaPython, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiGit } from 'react-icons/si'


export default function IconsSlider() {
    return (
        <div className='icon-container'>
            <FaHtml5 />
            <FaCss3 />
            <SiJavascript /> 
            <SiTypescript /> 
            <FaSass />
            <FaReact />
            <FaNodeJs />
            <FaPython />
            <SiGit />
            <FaLinux />
        </div>
    )
}