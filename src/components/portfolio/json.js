import ContactButtons from '../contact-buttons';
import ToggleButton from '../toggle-button';
import Navigation from '../navigation';
import PortfolioMenu from '../portfolio-menu';

import { FaNode, FaGithub } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

import laptop from '../../img/laptop.png';
import jsonThumbal from '../../img/nodeproj.jpg'

export default function Json(props) {

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
            <img src={jsonThumbal} alt='portfolio-screenshot'  className='json-thumbal' />
            <h2 className={'json-title'}>JSON to PDF app</h2>
            <a className={'mad-mai-link'}></a>
            <p className='json-description'> The app is constantly listening for JSON format data on provided port. When the HTTP POST request will arrive, the app manages to transfer data and put it into the newly created pdf file, and give that file as a new response. An app could be useful to create invoices or recipes. I used Node.js Express and PDFKit. Created at the end of 2021. </p>
            <div className='technologies'>
                <p>Technology:</p>
                <div className='technology-icons'>
                    <FaNode />
                    <SiJavascript />
                </div>
            </div>
            <div className='links'>
                <p>See on:</p>
                <div className='links-icons'>
                    <a href='https://github.com/Yerbaneyro/Beeanco-json-to-pdf-' target='_blank'><FaGithub /></a>
                </div>
            </div>
        </div> 
    </div>
    <p className='footer'> &#169; 2022 Marcin Bednarz - Created using React js</p>
</body>
    )
}