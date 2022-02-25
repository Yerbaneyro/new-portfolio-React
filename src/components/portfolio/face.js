import ContactButtons from "../contact-buttons";
import ToggleButton from "../toggle-button";
import Navigation from "../navigation";
import PortfolioMenu from "../portfolio-menu";
import Mobile from "../mobile";

import { FaHtml5, FaGithub, FaReact, FaPython, FaDocker } from "react-icons/fa";
import { SiFlask } from "react-icons/si";

import laptop from "../../img/laptop.png";
import FaceThumbal from "../../img/Face.png";

export default function Face(props) {
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
                            href="https://github.com/Yerbaneyro/React-Flask-Face-App"
                            target="_blank"
                        >
                            <button className="github-button">
                                GitHub <FaGithub className="button-icon" />
                            </button>
                        </a>
                        <a
                            href="https://awesome-saha-454f9c.netlify.app/"
                            target="_blank"
                        >
                            <button className="demo-button">DEMO</button>
                        </a>
                    </div>
                    <img src={laptop} alt="laptop" className="laptop" />
                    <div id="project-description">
                        <h2>Facial Recognition App</h2>
                        <p>
                            {" "}
                            I created this Facial Recognition App with two
                            parts. Firstly I developed REST API Back End with
                            Flask and Python of course. There is all Recognition
                            Magic happening. Then I created a simple Front End
                            with React JS. If you want to test the app but don't
                            want to add yourself as a new user. Find any of
                            Harry Potter pictures on your phone and show them to
                            your camera then press "Authorisation". Harry has
                            authorization.{" "}
                        </p>
                        <a
                            href="https://awesome-saha-454f9c.netlify.app/"
                            target="_blank"
                            className={"face-page-link"}
                        >
                            Click here to see DEMO
                        </a>
                    </div>
                </div>
                <div className="this-center">
                    <img
                        src={FaceThumbal}
                        alt="portfolio-screenshot"
                        className="screenshot"
                    />
                    <div className="technologies">
                        <div className="face-technology-icons">
                            <FaPython />
                            <br />
                            <SiFlask />
                            <br />
                            <FaReact />
                            <FaDocker />
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
