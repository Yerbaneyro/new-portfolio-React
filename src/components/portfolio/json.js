import ContactButtons from '../contact-buttons';
import ToggleButton from '../toggle-button';
import Navigation from '../navigation';
import PortfolioMenu from '../portfolio-menu';

import laptop from '../../img/laptop.png'

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
                <div className='center'>
                <h1 className={'portfolio-title'}>JSON</h1>
                <h2>Chose project from menu on the left.</h2>
                </div> 
            </div>
        </body>
    )
}