import { useState } from 'react';
import './toggle-button.css'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BsMoonStars } from 'react-icons/bs'



export default function ToggleButton(props) {

    const currentTheme = () => {
        console.log(props)
        if(props.currentTheme == 'light') {
            return false
            
        }
        return true
    }
    const { disabled, className } = props;

    const [toggle, setToggle] = useState(currentTheme());

    const triggerToggle = () => {

        if ( disabled ) { return; }
        setToggle( !toggle )
    }


    const toggleClasses = classNames('wrg-toggle', {
        'wrg-toggle--checked': toggle,
        'wrg-toggle--disabled': disabled
    }, className);
    

    return (
        <div onClick={triggerToggle} className={toggleClasses}>
            <div className="wrg-toggle-container">
                <div className="wrg-toggle-check">
                    <span><BsMoonStars className='moon'/></span>
                </div>
                <div className="wrg-toggle-uncheck">
                    <span>🌞</span>
                </div>
            </div>
            <div className="wrg-toggle-circle"></div>
            <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
        </div>
    )
}

ToggleButton.propTypes = {
    disabled: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
    icons: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            checked: PropTypes.node,
            unchecked: PropTypes.node
        })
    ])
};