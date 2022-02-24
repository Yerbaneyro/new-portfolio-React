import { useSpring, animated } from "react-spring"
import { FaDocker, FaHtml5, FaCss3, FaReact, FaSass, FaLinux, FaNodeJs, FaPython, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiGit, SiFlask } from 'react-icons/si'

function AboutMe() {

    const menuAnimation = useSpring({
        from: { transform: "translateY(-150%)"},
                
        to: [
            { transform: "translateY(-5%)",
                opacity: "1" }
        ],
        config: { duration: "800" },
        
    })

    return (
        <animated.div style={menuAnimation} className="about-me-text">
            
            <h3 className="profile">Profile:</h3>            
            <p>I am a web developer and my aim for this year is to start a full-time job at an entry-level. My previous career background was related to the electronic industry. But I found that web development gives me more opportunities to develop myself and be creative.</p>
            <p>Currently, I live in Salzburg, Austria, and work remotely as a freelancer developing websites, copywriting, and solving some easy coding problems for a variety of clients. </p>
            <p>I am also love anything related with outdoor activities, and I am trying to spend as much as possible time surouded by nature. I am climber, sailor nature and animals lover (V).</p>
        </animated.div>
    )
}

function AboutSkills() {
    const menuAnimation = useSpring({
        from: { transform: "translateY(-150%)"},
                
        to: [
            { transform: "translateY(-5%)",
                opacity: "1" }
        ],
        config: { duration: "800" },
        
    })

    return(
        <animated.div style={menuAnimation} className="about-me-tools">
            
            <h3 className="my-toolbelt">My Toolbelt:</h3>
            <div className="skils-container">
                <FaHtml5 />
                <FaCss3 />
                <SiJavascript /> 
                <SiTypescript /> 
                <FaSass />
                <FaReact />
                <FaNodeJs />
                <FaPython />
                <SiFlask />
                <FaDocker />
                <SiGit />
                <FaLinux />
            </div>
            <h4 className="experience">I also have experience working with:</h4>
            <div className="list">
                <ul>
                    <li>GraphQl</li>
                    <li>Apollo</li>
                    <li>React Native</li>
                </ul>
                <ul >
                    <li>Express</li>
                    <li>SQLite</li>
                    <li>Gimp/PS</li>
                </ul>
            </div>
        </animated.div>
    )
}

export {
    AboutMe,
    AboutSkills
}