import { BiHomeAlt, BiCube, BiUserCircle } from "react-icons/bi";

export default function Navigation({ setcurrentScreen }) {
    function refreshPage() {
        window.location.reload();
    }

    return (
        <div className="nav-bar">
            <div onClick={() => refreshPage()}>
                <p className="home">
                    <BiHomeAlt className="icon" />
                    Home
                </p>
            </div>
            <div onClick={() => setcurrentScreen("Portfolio")}>
                <p className="portfolio">
                    <BiCube className="icon" />
                    Projects
                </p>
            </div>
            <div onClick={() => setcurrentScreen("About")}>
                <p className="about-me">
                    <BiUserCircle className="icon" />
                    About Me.
                </p>
            </div>
        </div>
    );
}
