import ContactButtons from '../contact-buttons';
import ToggleButton from '../toggle-button';
import Navigation from '../navigation';
import PortfolioMenu from '../portfolio-menu';

import { FaHtml5, FaExternalLinkAlt, FaReact, FaSass, FaLinux, FaNodeJs, FaPython, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiGit } from 'react-icons/si'
import { MdMobileFriendly } from 'react-icons/md';

import laptop from '../../img/laptop.png';
import madmaiThumbal from '../../img/madmai.png';

export default function MadMai(props) {

return(
    <body data-theme={props.theme}>
    <div className="container" data-theme={props.theme}>
        <ContactButtons />
        <a onClick={props.switchTheme} className='dark-mode-switcher'><ToggleButton currentTheme={props.theme}/></a>
        <Navigation setcurrentScreen={props.setcurrentScreen}/> 
        <div className='center-screen'>
            <PortfolioMenu setcurrentScreen={props.setcurrentScreen} currentScreen={props.currentScreen} />
            <img src={laptop} alt='laptop' className='laptop'/>
        </div>
        <div className='this-center'>
            <img src={madmaiThumbal} alt='portfolio-screenshot'  className='screenshot' />
            <h2 className={'mad-mai-title'}>Mad Mai - Landing Page</h2>
            <a href='http://madmai.pl/' target='_blank' className={'mad-mai-link'}>www.madmai.pl</a>
            <p className='description'>Landing Page with some simple JavaScript elements for smooth scrolling when using navigation. Simple bussines design. I was creating this page with direct cooperation with the client. He was happy with the effect. Unfortunately, he is not turning on SSL. But the Site is live and the client already has received a few business contacts from here. Created in Oct 2021.   </p>
            <div className='technologies'>
                <p>Technology:</p>
                <div className='technology-icons'>
                    <FaHtml5 />
                    <FaSass />
                    <SiJavascript />
                    <MdMobileFriendly className='mad-mai-res'/>
                </div>
            </div>
            <div className='links'>
                <p>See on:</p>
                <div className='links-icons'>
                    <a href='https://github.com/Yerbaneyro/MadMai-Business-site' target='_blank'><FaGithub /></a>
                    <div className='live-link-container'>
                        <p id='live'>Live</p>
                        <p id='live-link'>Site</p>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    <p className='footer'> &#169; 2022 Marcin Bednarz - Created using React js</p>
</body>
    )
}