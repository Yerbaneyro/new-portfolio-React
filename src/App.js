import './App.scss';
import { BiHomeAlt, BiCube, BiUserCircle,  } from 'react-icons/bi';
import { useSpring, animated } from 'react-spring';
import { FaHtml5, FaCss3, FaReact, FaSass, FaLinux, FaNodeJs, FaPython, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiGit } from 'react-icons/si'
import { FiMail } from 'react-icons/fi'
import ToggleButton from './components/toggle-button'
import useLocalStorage from 'use-local-storage'


function IconsSlider() {
  return (
    <div className='icon-container'>
      <FaHtml5 />
      <FaCss3 />
      <SiJavascript /> 
      <SiTypescript /> 
      <FaSass />
      <FaReact />
      <FaNodeJs />
      <FaPython />
      <SiGit />
      <FaLinux />
    </div>
  )
}

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

function Navigation() {
  
  return (
    <div className='nav-bar'>
      <div>
        <p className='home'><BiHomeAlt className='icon'/>Home</p>
      </div>
      <div>
      <p className='portfolio'><BiCube className='icon'/>Projects</p>      
      </div>
      <div>
        <p className='about-me'><BiUserCircle className='icon'/>About Me.</p>
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

  const props = useSpring({
    to: {opacity: 1, scale: 1.3},
    from: { opacity: 0, scale: 1},
    config: { friction: 70 },
    }
  );
  
  return (
    <div className="container" data-theme={theme}>
      <ContactButtons />
      <a onClick={switchTheme} ><ToggleButton currentTheme={theme}/></a>
      <Navigation /> 
      <div className='center'>
            <animated.h1 style={props} className={'myName'}>Marcin Bednarz</animated.h1>
            <h2>Web Developer</h2>
      </div> 
      <IconsSlider />
      
    </div>
  );
}

export default App;
