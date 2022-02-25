import ContactButtons from "../contact-buttons";
import ToggleButton from "../toggle-button";
import Navigation from "../navigation";
import PortfolioMenu from "../portfolio-menu";
import Mobile from "../mobile";

import { FaHtml5, FaSass, FaGithub } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";


import laptop from "../../img/laptop.png";
import madmaiThumbal from "../../img/madmai.png";

export default function MadMai(props) {
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
                            href="https://github.com/Yerbaneyro/MadMai-Business-site"
                            target="_blank"
                        >
                            <button className="github-button">
                                GitHub <FaGithub className="button-icon" />
                            </button>
                        </a>
                        <a href="http://madmai.pl/" target="_blank">
                            <button className="demo-button">DEMO</button>
                        </a>
                    </div>
                    <img src={laptop} alt="laptop" className="laptop" />
                    <div id="project-description">
                        <h2>Mad Mai - Landing Page</h2>
                        <p>
                            {" "}
                            Landing Page with some simple JavaScript elements
                            for smooth scrolling when using navigation. Simple
                            bussines design. I was creating this page with
                            direct cooperation with the client. He was happy
                            with the effect. Unfortunately, he is not turning on
                            SSL. But the Site is live and the client already has
                            received a few business contacts from here. Created
                            in Oct 2021.{" "}
                        </p>
                        <a
                            href="http://madmai.pl/"
                            target="_blank"
                            className={"face-page-link"}
                        >
                            Click here to see DEMO
                        </a>
                    </div>
                </div>
                <div className="this-center">
                    <img
                        src={madmaiThumbal}
                        alt="portfolio-screenshot"
                        className="screenshot"
                    />
                    <div className="technologies">
                        <div className="face-technology-icons">
                            <FaHtml5 />
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
