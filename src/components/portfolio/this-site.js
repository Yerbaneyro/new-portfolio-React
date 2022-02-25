import ContactButtons from "../contact-buttons";
import ToggleButton from "../toggle-button";
import Navigation from "../navigation";
import PortfolioMenu from "../portfolio-menu";
import Mobile from "../mobile";

import laptop from "../../img/laptop.png";
import PortfolioThumbal from "../../img/portfolio-thumbal.png";

import "./this-site.css";

import { FaReact, FaSass, FaGithub } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

export default function ThisSite(props) {
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
                            href="https://github.com/Yerbaneyro/new-portfolio-React"
                            target="_blank"
                        >
                            <button className="github-button">
                                GitHub <FaGithub className="button-icon" />
                            </button>
                        </a>
                        <a href="https://mbednarz.website/" target="_blank">
                            <button className="demo-button">
                                You are here!
                            </button>
                        </a>
                    </div>
                    <img src={laptop} alt="laptop" className="laptop" />
                    <div id="project-description">
                        <h2>My Portfolio</h2>
                        <p>
                            {" "}
                            My Portfolio website...you are currently here.
                            Proudly designed and created by myself with help of
                            React library. I used React Spring to create
                            animations. Page is trying to be minimalistic in
                            design but also comprehensive in providing content
                            value. I hope you like it. Let me know I will really
                            appreciate all feedback. Created in Feb 2022{" "}
                        </p>
                    </div>
                </div>
                <div className="this-center">
                    <img
                        src={PortfolioThumbal}
                        alt="portfolio-screenshot"
                        className="screenshot"
                    />
                    <div className="technologies">
                        <div className="face-technology-icons">
                            <FaReact />
                            <FaSass />
                            <SiJavascript />
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
