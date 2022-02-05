import { useSpring, animated } from "react-spring"

export default function PortfolioMenu( props ) {

    const checkScreen = () => {
        
        if( props.currentScreen == 'Portfolio' ) {
            return '800'
        }
        return '0'
    }

    console.log(checkScreen)

    const menuAnimation = useSpring({
        from: { transform: "translateY(-150%)"},
                
        to: [
            { transform: "translateY(30%)",
                opacity: "1" }
        ],
        config: { duration: `${checkScreen()}` },
        
    })

    return (
        console.log(JSON.stringify(props.currentScreen)), 
        <animated.div style={menuAnimation} className="portfolio-menu">
            <ul>
                <li onClick={() => props.setcurrentScreen('This-site')}>This Site</li>
                <li onClick={() => props.setcurrentScreen('JSON')}>JSON to PDF converter</li>
                <li onClick={() => props.setcurrentScreen('Vegan')}>Vegan Calculator</li>
                <li onClick={() => props.setcurrentScreen('Native')}>React Native Chat App</li>
                <li onClick={() => props.setcurrentScreen('MadMai')}>Mad Mai Landing Page</li>
                <li onClick={() => props.setcurrentScreen('Weather')}>Weather Checker</li>
            </ul>
        </animated.div>
    )
}