import './App.scss';
import { useSpring, animated } from 'react-spring';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi';
import ToggleButton from './components/toggle-button';
import useLocalStorage from 'use-local-storage';
import laptop from './img/laptop.png';
import { useState } from 'react';
import Navigation from './components/navigation';
import IconsSlider from './components/icon-slider';
import PortfolioMenu from './components/portfolio-menu';
import AnimatedTypingHome from './components/typing-home'

function ContactButtons() {
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




function App() {

  //Checking if user set a theme preference in their browser.
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme ==='light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  const myName = useSpring({
    from: { opacity: 0},
    to: {opacity: 1},
    delay: 8000,
    config: { duration: "2000", },
    }
  );

  const [currentScreen, setcurrentScreen] = useState('Home');

    console.log(currentScreen)

  if (currentScreen == 'Home') {

    return(
      <body data-theme={theme}>
        <div className="container" data-theme={theme}>
          <ContactButtons />
          <a onClick={switchTheme} className='dark-mode-switcher'><ToggleButton currentTheme={theme}/></a>
          <Navigation setcurrentScreen={setcurrentScreen}/> 
          <img src={laptop} alt='laptop' className='laptop'/>
          <div className='center'>
            <AnimatedTypingHome />
            <animated.div style={myName}>
              <IconsSlider />
            </animated.div>  
          </div> 
        </div>
      </body>
    )
  }

  if (currentScreen == 'Portfolio') {

    return(
      <body data-theme={theme}>
        
        <div className="container" data-theme={theme}>
          <ContactButtons />
          <a onClick={switchTheme} className='dark-mode-switcher'><ToggleButton currentTheme={theme}/></a>
          <Navigation setcurrentScreen={setcurrentScreen}/> 
          <div className='center-screen'>
            <PortfolioMenu />
            <img src={laptop} alt='laptop' className='laptop'/>
          </div>
          <div className='center'>
            <animated.h1 style={myName} className={'portfolio-title'}>Portfolio</animated.h1>
            <h2>Chose project from menu on the left.</h2>
          </div> 
        </div>
      </body>
    )
  }

  return (
    <body data-theme={theme}>
    <div className="container" data-theme={theme}>
      <ContactButtons />
      <a onClick={switchTheme} className='dark-mode-switcher'><ToggleButton currentTheme={theme}/></a>
      <Navigation setcurrentScreen={setcurrentScreen}/> 
      <img src={laptop} alt='laptop' className='laptop'/>
      <div className='center'>
          <animated.h1 style={myName} className={'myName'}>About</animated.h1>
      </div> 
      
      
      
    </div>
    </body>
  );
}

export default App;
