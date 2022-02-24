import { useState } from "react";

import MobileHome from "./mobile/mobile-home";
import MobilePortfolio from "./mobile/mobile-portfolio";
import MobileAbout from "./mobile/mobile-about";

export default function Mobile(props, {switchTheme}) {
    
    const [mobilePage, setMobilePage] = useState('Mobile-Home')

    if(mobilePage == 'Mobile-Home') {
        return (
        <div className="mobile-container">
            <MobileHome setMobilePage={setMobilePage}/>
        </div>
        )
    }
    if(mobilePage == 'Mobile-Portfolio')
    return (
        <div className="mobile-container">
            <MobilePortfolio setMobilePage={setMobilePage}/>
        </div>
    )

    return (
        <div className="mobile-container">
            <MobileAbout setMobilePage={setMobilePage}/>
        </div>
    )
}