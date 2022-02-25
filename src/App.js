import "./App.scss";
import { useSpring, animated } from "react-spring";

import ToggleButton from "./components/toggle-button";
import useLocalStorage from "use-local-storage";

import laptop from "./img/laptop.png";

import { useState } from "react";

import Navigation from "./components/navigation";
import ContactButtons from "./components/contact-buttons";
import IconsSlider from "./components/icon-slider";
import PortfolioMenu from "./components/portfolio-menu";
import { AboutMe, AboutSkills } from "./components/about-me";

import GeoIp from "./components/portfolio/geoip";
import ThisSite from "./components/portfolio/this-site";
import Json from "./components/portfolio/json";
import Face from "./components/portfolio/face";
import MadMai from "./components/portfolio/madmai";
import Native from "./components/portfolio/native";

import AnimatedTypingHome from "./components/typing-home";
import Mobile from "./components/mobile";

function App() {
    //Checking if user set a theme preference in their browser.
    const defaultDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    const [theme, setTheme] = useLocalStorage(
        "theme",
        defaultDark ? "dark" : "light"
    );

    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    const myName = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 8000,
        config: { duration: "2000" },
    });

    const [currentScreen, setcurrentScreen] = useState("Home");

    if (currentScreen == "Home") {
        return (
            <body data-theme={theme}>
                <div className="border">
                    <div className="container" data-theme={theme}>
                        <ContactButtons />
                        <a onClick={switchTheme} className="dark-mode-switcher">
                            <ToggleButton currentTheme={theme} />
                        </a>
                        <Navigation setcurrentScreen={setcurrentScreen} />
                        <div className="fixing-container">
                            <img src={laptop} alt="laptop" className="laptop" />
                        </div>
                        <div className="center">
                            <AnimatedTypingHome />
                            <animated.div style={myName}>
                                <IconsSlider />
                            </animated.div>
                        </div>
                        <p className="footer">
                            {" "}
                            &#169; 2022 Marcin Bednarz - Created using React js
                        </p>
                    </div>
                </div>
                <Mobile />
            </body>
        );
    }

    if (currentScreen == "Portfolio") {
        return (
            <body data-theme={theme}>
                <div className="container" data-theme={theme}>
                    <ContactButtons />
                    <a onClick={switchTheme} className="dark-mode-switcher">
                        <ToggleButton currentTheme={theme} />
                    </a>
                    <Navigation setcurrentScreen={setcurrentScreen} />
                    <div className="center-screen">
                        <PortfolioMenu
                            setcurrentScreen={setcurrentScreen}
                            currentScreen={currentScreen}
                        />
                        <img src={laptop} alt="laptop" className="laptop" />
                    </div>
                    <div className="center">
                        <h1 className={"portfolio-title"}>Portfolio</h1>
                        <h2 className={"portfoliio-caption"}>
                            Chose project from menu on the left.
                        </h2>
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

    if (currentScreen == "This-site") {
        return (
            <ThisSite
                theme={theme}
                switchTheme={switchTheme}
                setcurrentScreen={setcurrentScreen}
                currentScreen={currentScreen}
            />
        );
    }
    if (currentScreen == "Face") {
        return (
            <Face
                theme={theme}
                switchTheme={switchTheme}
                setcurrentScreen={setcurrentScreen}
            />
        );
    }
    if (currentScreen == "JSON") {
        return (
            <Json
                theme={theme}
                switchTheme={switchTheme}
                setcurrentScreen={setcurrentScreen}
                currentScreen={currentScreen}
            />
        );
    }

    if (currentScreen == "GeoIp") {
        return (
            <GeoIp
                theme={theme}
                switchTheme={switchTheme}
                setcurrentScreen={setcurrentScreen}
            />
        );
    }

    if (currentScreen == "Native") {
        return (
            <Native
                theme={theme}
                switchTheme={switchTheme}
                setcurrentScreen={setcurrentScreen}
            />
        );
    }

    if (currentScreen == "MadMai") {
        return (
            <MadMai
                theme={theme}
                switchTheme={switchTheme}
                setcurrentScreen={setcurrentScreen}
            />
        );
    }

    return (
        <body data-theme={theme}>
            <div className="container" data-theme={theme}>
                <ContactButtons />
                <a onClick={switchTheme} className="dark-mode-switcher">
                    <ToggleButton currentTheme={theme} />
                </a>
                <Navigation setcurrentScreen={setcurrentScreen} />
                <div className="about-center-screen">
                    <AboutSkills />
                    <FaUserAlt className="about-icon" />
                    <img src={laptop} alt="laptop" className="laptop" />
                    <AboutMe />
                </div>
                <p className="footer">
                    {" "}
                    &#169; 2022 Marcin Bednarz - Created using React js
                </p>
            </div>
            <Mobile switchTheme={switchTheme} theme={theme} />
        </body>
    );
}

export default App;
