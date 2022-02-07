import ContactButtons from "./contact-buttons"
import { BsCodeSlash } from 'react-icons/bs'
import Typing from 'react-typing-animation';


export default function Mobile(props, {switchTheme}) {
    return (
        <div className="mobile-container">
            <ContactButtons />
            <Typing>
            <Typing.Speed ms={60} />
                <div className="mobile-console">
                    <span><span > >>> </span>Welcome.dev</span>
                    <Typing.Speed ms={0} />
                    <p className='mobile-loading'>Loading...</p>
                </div>
                <Typing.Reset count={1} delay={1500} />
                <Typing.Speed ms={20} />
                <Typing.Delay ms={400} />
                <h3>Hello, I am...</h3>
                <h1>Marcin Bednarz</h1>
                <h2>Web Developer</h2>
            </Typing>
            <div>
                <BsCodeSlash className='icon-code' />            
            </div>
            <a href="mailto:marcinbednarz102@outlook.com"><button className="contact-button">Contact me!</button></a>
        </div>
    )
}