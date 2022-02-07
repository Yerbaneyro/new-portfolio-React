import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi';
import { BsFileEarmarkPerson } from 'react-icons/bs'

export default function ContactButtons() {
    return(
        <div className='social-buttons'>
            <div>
            <a href='https://github.com/Yerbaneyro' target='_blank'><FaGithub /></a>
            <a href='https://www.linkedin.com/in/mbednarz1992/' target='_blank'><FaLinkedin /></a>
            </div>
            <div>
            <a href="mailto:marcinbednarz102@outlook.com"><FiMail /></a>
            <a href='https://mbednarz.website/Marcin%20Bednarz%20-%20Web%20Developer.pdf' target="_blank" download className='cv'><BsFileEarmarkPerson /></a>
            </div>  
        </div>
        )
    }