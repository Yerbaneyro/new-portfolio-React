import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi';

export default function ContactButtons() {
    return(
        <div className='social-buttons'>
            <div>
            <FaGithub />
            <FaLinkedin />
            </div>
            <div>
            <FiMail />
            <p className='cv'>CV</p>
            </div>  
        </div>
        )
    }