import ContactButtons from '../contact-buttons';
import ToggleButton from '../toggle-button';
import Navigation from '../navigation';
import PortfolioMenu from '../portfolio-menu';
import Mobile from '../mobile'

import laptop from '../../img/laptop.png';
import PortfolioThumbal from '../../img/portfolio-thumbal.png';

import './this-site.css';

import {  FaReact, FaSass, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiGit } from 'react-icons/si'

export default function ThisSite(props) {

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
                    <img src={PortfolioThumbal} alt='portfolio-screenshot'  className='screenshot' />
                    <h2 className={'this-site-title'}>My Portfolio</h2>
                    <a href='https://mbednarz.website/' target='_blank' className={'this-page-link'}>www.mbednarz.website</a>
                    <p className='description'>My Portfolio website...you are currently here. Proudly designed and created by myself with help of React library. I used React Spring to create animations. Page is trying to be minimalistic in design but also comprehensive in providing content value. I hope you like it. Let me know I will really appreciate all feedback. Created in Feb 2022 </p>
                    <div className='technologies'>
                        <p>Technology:</p>
                        <div className='technology-icons'>
                            <FaReact />
                            <FaSass />
                            <SiJavascript />
                        </div>
                    </div>
                    <div className='links'>
                        <p>See on:</p>
                        <div className='links-icons'>
                            <a href='https://github.com/Yerbaneyro/new-portfolio-React' target='_blank'><FaGithub /></a>
                            <div className='live-link-container'>
                                <p id='live'>Live</p>
                                <p id='live-link'>Site</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <Mobile />
            <p className='footer'> &#169; 2022 Marcin Bednarz - Created using React js</p>
        </body>
    )
}