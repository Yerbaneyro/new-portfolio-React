import ContactButtons from "../contact-buttons";
import ToggleButton from "../toggle-button";
import Navigation from "../navigation";
import PortfolioMenu from "../portfolio-menu";
import Mobile from "../mobile";

import { FaReact, FaSass, FaGithub } from "react-icons/fa";
import { SiJavascript, SiGraphql} from "react-icons/si";

import laptop from "../../img/laptop.png";
import appThumbal from "../../img/app.png";

export default function Native(props) {
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
                    <img src={laptop} alt="laptop" className="laptop" />
                </div>
                <div className="this-center">
                    <img
                        src={appThumbal}
                        alt="portfolio-screenshot"
                        className="app-thumbal"
                    />
                    <h2 className={"chat-title"}>Chat App</h2>
                    <ul className="list-native">
                        <li>React Native</li>
                        <li>iOS/Android Friendly</li>
                        <li>GraphQL</li>
                        <li>Apollo Client</li>
                    </ul>
                    <a className={"mad-mai-link"}></a>
                    <p className="description">
                        Mobile app created with React Native. Users can
                        communicate with other users. Data is held by the server
                        using GraphQL. Connection to the database is live with
                        help of Apollo Client. In the coming future, I plan to
                        implement Sign Up/Log In feature. To run an app on your
                        device you should use Expo Go. Created in Jan 2022{" "}
                    </p>
                    <div className="technologies">
                        <p>Technology:</p>
                        <div className="technology-icons">
                            <FaReact />
                            <FaSass />
                            <SiJavascript />
                            <SiGraphql />
                        </div>
                    </div>
                    <div className="links">
                        <p>See on:</p>
                        <div className="links-icons">
                            <a
                                href="https://github.com/Yerbaneyro/chatty-app"
                                target="_blank"
                            >
                                <FaGithub />
                            </a>
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
