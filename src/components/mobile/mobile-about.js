import ContactButtons from "../contact-buttons";

import MyPicture from "../../img/avatar.png";

export default function MobileAbout({ setMobilePage }) {
    return (
        <div>
            <ContactButtons />
            <nav>
                <button onClick={() => setMobilePage("Mobile-Home")}>
                    Home
                </button>
                <button onClick={() => setMobilePage("Mobile-Portfolio")}>
                    Projects
                </button>
                <button onClick={() => setMobilePage("Mobile-About")}>
                    About Me
                </button>
            </nav>
            <h1>About Me.</h1>
            <div className="mobile-about-me">
                <img src={MyPicture} className="my-avatar" />
                <p>
                    I am a web developer and my aim for this year is to start a
                    full-time job at an entry-level. My previous career
                    background was related to the electronic industry. But I
                    found that web development gives me more opportunities to
                    develop myself and be creative.
                </p>
                <p>
                    Currently, I live in Salzburg, Austria, and work remotely as
                    a freelancer developing websites, copywriting, and solving
                    some easy coding problems for a variety of clients.{" "}
                </p>
                <p>
                    I am also love anything related with outdoor activities, and
                    I am trying to spend as much as possible time surouded by
                    nature. I am climber, sailor nature and animals lover (V).
                </p>
            </div>
        </div>
    );
}
