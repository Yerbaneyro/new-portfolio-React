import ContactButtons from "../contact-buttons";

import FaceThumbal from '../../img/Face.png';
import GeoThumbal from '../../img/GeoIp.png';
import ThisThumbal from '../../img/portfolio-thumbal.png';
import MadMaiThumbal from '../../img/madmai.png';
import NodeThumbal from '../../img/nodeproj.jpg';
import NativeThumbal from '../../img/app.png';


import {FaHtml5, FaGithub, FaReact, FaPython, FaDocker, FaSass, FaNode  } from 'react-icons/fa'
import { SiFlask, SiTypescript, SiJavascript, SiGraphql  } from 'react-icons/si'

export default function MobilePortfolio({setMobilePage}) {

    return (
        <div>
            <ContactButtons />
            <nav>
                <button onClick={() => setMobilePage('Mobile-Home')}>Home</button>
                <button onClick={() => setMobilePage('Mobile-Portfolio')}>Projects</button>
                <button onClick={() => setMobilePage('Mobile-About')}>About Me</button>
            </nav>
            <h1>Portfolio</h1>
            <div className="portfolio-item">
                <h2>Facial Recognition App</h2>
                <div className="mobile-tools">
                    <FaPython />
                    <SiFlask />
                    <FaReact />
                    <FaDocker />
                </div>
                <div>
                    <img src={FaceThumbal} alt='portfolio' className="mobile-thumbal"/>
                </div>
                <p> I created this Facial Recognition App with two parts. Firstly I developed REST API Back End with Flask and Python of course. There is all Recognition Magic happening. Then I created a simple Front End with React JS. If you want to test the app but don't want to add yourself as a new user. Find any of Harry Potter pictures on your phone and show them to your camera then press "Authorisation". Harry has authorization.  </p>
                <a href='https://github.com/Yerbaneyro/React-Flask-Face-App' target='_blank'><button className='mobile-github-button'>GitHub <FaGithub /></button></a>
                <a href='https://awesome-saha-454f9c.netlify.app/' target='_blank'><button className='mobile-demo-button'>DEMO</button></a>
            </div>
            <div className="portfolio-item">
                <h2>GeoIP 3D</h2>
                <div className="mobile-tools">
                    <FaReact />
                    <SiTypescript />
                </div>
                <div>
                    <img src={GeoThumbal} alt='portfolio' className="mobile-thumbal"/>
                </div>
                <p> With this App, you can check your public IP address and see its localization on the 3D Globe. Another feature of the GeoIP app is checking someone else public IP and its geolocalisation data. I used TypeScript and React to create this app and fetched API from https://freegeoip.app/. I also decided to implement localization visualization with globe.gl library for React.js  </p>
                <a href='https://github.com/Yerbaneyro/3D-GeoIP' target='_blank'><button className='mobile-github-button'>GitHub <FaGithub /></button></a>
                <a href='https://loving-wing-e7f08c.netlify.app/' target='_blank'><button className='mobile-demo-button'>DEMO</button></a>
            </div>
            <div className="portfolio-item">
                <h2>My Portfolio</h2>
                <div className="mobile-tools">
                    <FaReact />
                    <FaSass />
                    <SiJavascript />
                </div>
                <div>
                    <img src={ThisThumbal} alt='portfolio' className="mobile-thumbal"/>
                </div>
                <p> My Portfolio website...you are currently here. Proudly designed and created by myself with help of React library. I used React Spring to create animations. Page is trying to be minimalistic in design but also comprehensive in providing content value. I hope you like it. Let me know I will really appreciate all feedback. Created in Feb 2022  </p>
                <a href='https://github.com/Yerbaneyro/new-portfolio-React' target='_blank'><button className='mobile-github-button'>GitHub <FaGithub /></button></a>
                <a href='https://mbednarz.website/' target='_blank'><button className='mobile-demo-button'>DEMO</button></a>
            </div>
            <div className="portfolio-item">
                <h2>MadMai - Landing Page</h2>
                <div className="mobile-tools">
                    <FaHtml5 />
                    <FaSass />
                    <SiJavascript />
                </div>
                <div>
                    <img src={MadMaiThumbal} alt='portfolio' className="mobile-thumbal"/>
                </div>
                <p> Landing Page with some simple JavaScript elements for smooth scrolling when using navigation. Simple bussines design. I was creating this page with direct cooperation with the client. He was happy with the effect. Unfortunately, he is not turning on SSL. But the Site is live and the client already has received a few business contacts from here. Created in Oct 2021. </p>
                <a href='https://github.com/Yerbaneyro/MadMai-Business-site' target='_blank'><button className='mobile-github-button'>GitHub <FaGithub /></button></a>
                <a href='http://madmai.pl/' target='_blank'><button className='mobile-demo-button'>DEMO</button></a>
            </div>
            <div className="portfolio-item">
                <h2>React Native Chat App</h2>
                <div className="mobile-tools">
                    <FaReact />
                    <FaSass />
                    <SiJavascript />
                    <SiGraphql />
                </div>
                <div>
                    <img src={NativeThumbal} alt='portfolio' className="mobile-native-thumbal"/>
                </div>
                <p> Mobile app created with React Native. Users can communicate with other users. Data is held by the server using GraphQL. Connection to the database is live with help of Apollo Client. In the coming future, I plan to implement Sign Up/Log In feature. To run an app on your device you should use Expo Go. Created in Jan 2022 </p>
                <a href='https://github.com/Yerbaneyro/chatty-app' target='_blank'><button className='mobile-github-button'>GitHub <FaGithub /></button></a>
                <button className='mobile-demo-button'>Only localy</button>
            </div>
            <div className="portfolio-item">
                <h2>JSON to PDF</h2>
                <div className="mobile-tools">
                    <FaNode />
                    <SiJavascript />
                </div>
                <div>
                    <img src={NodeThumbal} alt='portfolio' className="mobile-thumbal"/>
                </div>
                <p> The app is constantly listening for JSON format data on provided port. When the HTTP POST request will arrive, the app manages to transfer data and put it into the newly created pdf file, and give that file as a new response. An app could be useful to create invoices or recipes. I used Node.js Express and PDFKit. Created at the end of 2021. </p>
                <a href='https://github.com/Yerbaneyro/Beeanco-json-to-pdf-' target='_blank'><button className='mobile-github-button'>GitHub <FaGithub /></button></a>
                <button className='mobile-demo-button'> Only localy</button>
            </div>
        </div>
    )
}