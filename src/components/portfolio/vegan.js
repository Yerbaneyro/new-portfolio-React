import ContactButtons from '../contact-buttons';
import ToggleButton from '../toggle-button';
import Navigation from '../navigation';
import PortfolioMenu from '../portfolio-menu';

import { FaHtml5, FaExternalLinkAlt, FaReact, FaSass, FaLinux, FaNodeJs, FaPython, FaGithub, FaLinkedin, FaJava, FaCss3 } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiGit } from 'react-icons/si'

import laptop from '../../img/laptop.png';
import veganThumbal from '../../img/vegan.png'

export default function Vegan(props) {

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
            <img src={veganThumbal} alt='portfolio-screenshot'  className='screenshot' />
            <h2 className={'vegan-title'}>Vegan Calculator</h2>
            <a href='https://mbednarz.website/Vegan%20Calculator/index.html' target='_blank' className={'this-page-link'}>Click here to see DEMO</a>
            <p className='description'>Pure, simple JavaScript with some styling. One of the first web applications that I have done with this technology. The calculator is showing how big a change in environment could have been done if one person decide to change their animal-based diet for plant-based one. Created in early 2021.  </p>
            <div className='technologies'>
                <p>Technology:</p>
                <div className='technology-icons'>
                    <SiJavascript />
                    <FaCss3 />
                    <FaHtml5 />
                </div>
            </div>
            <div className='links'>
                <p>See on:</p>
                <div className='links-icons'>
                    <a href='https://github.com/Yerbaneyro/Vegan-Calculator' target='_blank'><FaGithub /></a>
                </div>
            </div>
        </div> 
    </div>
    <p className='footer'> &#169; 2022 Marcin Bednarz - Created using React js</p>
</body>
    )
}