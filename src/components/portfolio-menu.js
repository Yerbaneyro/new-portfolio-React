import { useSpring, animated } from "react-spring"

export default function PortfolioMenu() {

    const menuAnimation = useSpring({
        from: { transform: "translateY(-150%)"},
                
        to: [
            { transform: "translateY(30%)",
                opacity: "1" }
        ],
        config: { duration: "800" },
        
    })

    return (
        <animated.div style={menuAnimation} className="portfolio-menu">
            <ul>
                <li>This Site</li>
                <li>JSON to PDF converter</li>
                <li>Vegan Calculator</li>
                <li>React Native Chat App</li>
                <li>Mad Mai Landing Page</li>
                <li>Weather Checker</li>
            </ul>
        </animated.div>
    )
}