import ContactButtons from "../contact-buttons";
import ToggleButton from "../toggle-button";
import Navigation from "../navigation";
import PortfolioMenu from "../portfolio-menu";
import Mobile from "../mobile";

import { FaReact, FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

import laptop from "../../img/laptop.png";
import GeoThumbal from "../../img/GeoIp.png";

export default function GeoIP(props) {
    return (
        <body data-theme={props.theme}>
            <div className="container" data-theme={props.theme}>
                <ContactButtons />
                <a onClick={props.switchTheme} className="dark-mode-switcher">
                    <ToggleButton currentTheme={props.theme} />
                </a>
                <Navigation setcurrentScreen={props.setcurrentScreen} />
                <div className="center-screen">
                    <PortfolioMenu
                        setcurrentScreen={props.setcurrentScreen}
                        currentScreen={props.currentScreen}
                    />
                    <div className="opacity">
                        <a
                            href="https://github.com/Yerbaneyro/3D-GeoIP"
                            target="_blank"
                        >
                            <button className="github-button">
                                GitHub <FaGithub className="button-icon" />
                            </button>
                        </a>
                        <a
                            href="https://loving-wing-e7f08c.netlify.app/"
                            target="_blank"
                        >
                            <button className="demo-button">DEMO</button>
                        </a>
                    </div>
                    <img src={laptop} alt="laptop" className="laptop" />
                    <div id="project-description">
                        <h2>GeoIP 3D</h2>
                        <p>
                            {" "}
                            With this App, you can check your public IP address
                            and see its localization on the 3D Globe. Another
                            feature of the GeoIP app is checking someone else
                            public IP and its geolocalisation data. I used
                            TypeScript and React to create this app and fetched
                            API from https://freegeoip.app/. I also decided to
                            implement localization visualization with globe.gl
                            library for React.js{" "}
                        </p>
                        <a
                            href="https://loving-wing-e7f08c.netlify.app/"
                            target="_blank"
                            className={"face-page-link"}
                        >
                            Click here to see DEMO
                        </a>
                    </div>
                </div>
                <div className="this-center">
                    <img
                        src={GeoThumbal}
                        alt="portfolio-screenshot"
                        className="screenshot"
                    />
                    <div className="technologies">
                        <div className="face-technology-icons">
                            <FaReact />
                            <SiTypescript />
                        </div>
                    </div>
                </div>

                <p className="footer">
                    {" "}
                    &#169; 2022 Marcin Bednarz - Created using React js
                </p>
            </div>
            <Mobile />
        </body>
    );
}
