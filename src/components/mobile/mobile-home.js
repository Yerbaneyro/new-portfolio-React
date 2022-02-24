import { FaDocker, FaHtml5, FaCss3, FaReact, FaSass, FaLinux, FaNodeJs, FaPython, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiGit, SiFlask } from 'react-icons/si'

import ContactButtons from "../contact-buttons";
import Typing from 'react-typing-animation';

export default function MobileHome({setMobilePage}) {

    return (
        <div>
        <ContactButtons />
            <nav>
                <button onClick={() => setMobilePage('Home')}>Home</button>
                <button onClick={() => setMobilePage('Portfolio')}>Projects</button>
                <button onClick={() => setMobilePage('About')}>About Me</button>
            </nav>
            <Typing>
            <Typing.Speed ms={60} />
                <div className="mobile-console">
                    <span><span > >>> </span>Welcome.<span className="dev">dev</span></span>
                    <Typing.Speed ms={0} />
                    <p className='mobile-loading'>Loading...</p>
                </div>
                <Typing.Reset count={1} delay={1500} />
                <Typing.Speed ms={20} />
                <Typing.Delay ms={400} />
                <h3>Hello, I am...</h3>
                <h1 className='my-name-mobile'>Marcin Bednarz</h1>
                <h2>Web Developer</h2>
            </Typing>
            <div className="mobile-bottom">
            <div className="mobile-skils-container">
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
            <a href="mailto:marcinbednarz102@outlook.com"><button className="contact-button">Contact me!</button></a>
            </div>
        </div>    
    )

}