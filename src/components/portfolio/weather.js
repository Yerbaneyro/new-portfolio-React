import ContactButtons from '../contact-buttons';
import ToggleButton from '../toggle-button';
import Navigation from '../navigation';
import PortfolioMenu from '../portfolio-menu';
import Mobile from '../mobile'

import { FaHtml5, FaGithub } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'

import laptop from '../../img/laptop.png'
import weatherThumbal from '../../img/weatherThumbal.png'

export default function Weather(props) {

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
            <img src={weatherThumbal} alt='portfolio-screenshot'  className='screenshot' />
            <h2 className={'weather-title'}>Local Weather App</h2>
            <a href='https://mbednarz.website/weather_app/index.html' target='_blank' className={'this-page-link'}>Click here to see DEMO</a>
            <p className='description'> Simple Weather App that gathers data from OpenWeather API. Easy, clean Java Script used for making the connection. This Web page asks for permission to check user localization and based on that it shows current weather. By clicking on the temperature user can change from Celcius to Fahrenheit. Created in early 2021. </p>
            <div className='technologies'>
                <p>Technology:</p>
                <div className='technology-icons'>
                    <FaHtml5 />
                    <SiJavascript />
                </div>
            </div>
            <div className='links'>
                <p>See on:</p>
                <div className='links-icons'>
                    <a href='https://github.com/Yerbaneyro/Weather-app-in-JS' target='_blank'><FaGithub /></a>
                </div>
            </div>
        </div> 
        <p className='footer'> &#169; 2022 Marcin Bednarz - Created using React js</p>
    </div>
    <Mobile />
    
</body>
    )
}